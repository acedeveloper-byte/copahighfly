import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { HOST, SITE_ID, URL_IMAGE } from "@/utils/static";
import RecentPosts from "@/components/common/RecentPosts";

// --- Generate metadata dynamically from API
export async function generateMetadata({ params }) {
  const { slug } = params;
  const url = `${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`;

  try {
    console.log("Generating metadata for slug:", slug);

    const res = await fetch(url, { cache: "no-store" }); // Fresh fetch every time

    if (!res.ok) {
      const errorMsg = await res.text();
      console.error("Metadata fetch failed:", res.status, errorMsg);
      throw new Error("Metadata response not OK");
    }

    const matchedPost = await res.json();

    if (!matchedPost || !matchedPost.response) {
      console.warn("Metadata missing for slug:", slug);
      return {
        title: "Page Not Found",
        description: "The blog you are looking for does not exist.",
      };
    }

    return {
      title: matchedPost.response.meta_title || "Blog",
      description: matchedPost.response.meta_description || "Read this blog post.",
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Error Loading Page",
      description: "There was an error loading this page.",
    };
  }
}

// --- Helper to fetch blog post data
const getPostData = async (slug) => {
  const url = `${HOST}/blog/get-blog-by-urland-site/${SITE_ID}/${slug}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // ISR (incremental static regeneration)
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Blog fetch failed:", res.status, errorText);
      throw new Error("Failed to fetch blog post");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
};



// --- Main Page Component
export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const postfetch  =await  getPostData(slug) 
  const post  =  postfetch.response
  return (
    <>
      <Header />

      {post ? (
        <>
          <div>
            <h1 className="my-3 fw-bold fs-2 text-center">{post.title_tag_h1}</h1>
          </div>
          <hr />
          <Container>
            <Row>
              <Col md={9}>
                <div className="blog-image-layout">
                  <img
                    src={`${URL_IMAGE}${post.blog_images}`}
                    alt={post.title_tag_h1}
                    style={{ width: "100%" }}
                  />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.blog_description }} className="my-4"/>
              </Col>
              <Col md={3}>
               <RecentPosts/>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Container className="text-center py-5">
          <h2>Post Not Found</h2>
          <p>The blog post may have been removed or the slug is invalid.</p>
        </Container>
      )}

      <Footer />
    </>
  );
}
