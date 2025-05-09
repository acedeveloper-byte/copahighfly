import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import json from "../../../components/utils/json/blog.json"
// export async function generateStaticParams() {
//   return [{ slug: "what-is-the-copa-airlines-cancellation-policy" }];
// }

export async function generateMetadata({ params }) {
  const { slug } = params;
  console.log("slug:", slug)
  const matchedPost = json.find((item) => item.slug === slug);

  if (!matchedPost) {
    return {
      title: "Page Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: matchedPost.metaTitle || "Blog",
    description: matchedPost.metaDescription || "Read this blog post.",
  };
}

export default function CancellationPolicySlugPage({ params }) {
  const { slug } = params;

  // Match content based on slug

  return (
    <>
      <Header />


      {json.filter((itex) => itex.slug === slug).map((item) => {
        return (
          <>
            <div>
              <h1 className="my-3 fw-bold fs-2 text-center">
                {item.title}
              </h1>
            </div>
            <hr />
            <Container>
              <Row>
                <Col md={9}>
                  <div className="blog-image-layout" >

                    <img
                      src={item.image}
                      alt="Copa Airlines Cancellation Policy" style={{ width: '100%' }}
                    />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </Col>
                <Col md={3} >

                  <div className="blog-list">
                    <h3>Recent Posts</h3>
                    {json.map((item, index) => (
                      <a href={`/blog/${item.slug}`} className="blog-card" key={index}>
                        <p className="blog-title">{item.title}</p>
                      </a>
                    ))}
                  </div>


                </Col>
              </Row>

            </Container>

          </>
        )
      })}


      <Footer />
    </>
  );



}
