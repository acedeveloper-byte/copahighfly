"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Card, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import  blog from "../../components/utils/json/blog.json"
const Page = () => {
  return (
    <>
      <Header />

      <Container className="mt-5 mb-5">
        <div className="text-center mb-4">
          <p className="text-primary mb-1">Latest Blogs</p>
      
        </div>

        <Row className="g-4">
          {blog.map((item, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Image
                  src={item.image}
                  alt="blog"
                  width={353}
                  height={180}
                  className="card-img-top"
                />
                <Card.Body>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-decoration-none text-dark"
                  >
                    <Card.Title className="fw-bold">
                    {item.title}
                    </Card.Title>
                    <Card.Text>
                     {item.shortdescription}
                    </Card.Text>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Page;
