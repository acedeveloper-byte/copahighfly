import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { HOST, SITE_ID, URL_IMAGE } from "@/utils/static";



const getData = async () => {
  const res = await fetch(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`, {
    cache: "no-store", // ya revalidate: 60 if you want ISR
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const Page = async () => {
  const data = await getData();
  const posts = data.response || [];

  return (
    <>
      <Header />

      <Container className="mt-5 mb-5">
        <div className="text-center mb-4">
          <h3 className="mb-1">Latest Blogs</h3>
        </div>

        <Row className="g-4">
         {posts.map((item, index) => (
  <Col key={index} md={4}>
    <a href={`/blog/${item.blog_url}`} className="text-decoration-none">
      <div className="card">
        <img
          src={`${URL_IMAGE}${item.blog_images}`}
          className="card-img-top"
          alt={item.blog_image_tag}
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{item.meta_title}</h5>
          <p className="card-text">
            {item.meta_description.slice(0, 85)}
          </p>
        </div>
      </div>
    </a>
  </Col>
))}

        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Page;
