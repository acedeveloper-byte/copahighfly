'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
  const [formData, setFormData] = useState({
    meta_title: '',
    focus_keywords: '',
    meta_description: '',
    category: '',
    blog_url: '',
    blog_image_tag: '',
    title_tag_h1: '',
    blog_description: '',
    blog_image: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/blog/create-new-blog', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Blog created successfully!');
        setFormData({
          meta_title: '',
          focus_keywords: '',
          meta_description: '',
          category: '',
          blog_url: '',
          blog_image_tag: '',
          title_tag_h1: '',
          blog_description: '',
          blog_image: null,
        });
      } else {
        setMessage(`❌ Error: ${result.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('❌ Failed to submit the form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Create Blog</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Meta Title</label>
          <input
            type="text"
            className="form-control"
            name="meta_title"
            value={formData.meta_title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Focus Keywords</label>
          <input
            type="text"
            className="form-control"
            name="focus_keywords"
            value={formData.focus_keywords}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <textarea
            className="form-control"
            name="meta_description"
            value={formData.meta_description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog URL</label>
          <input
            type="text"
            className="form-control"
            name="blog_url"
            value={formData.blog_url}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Image Tag</label>
          <input
            type="text"
            className="form-control"
            name="blog_image_tag"
            value={formData.blog_image_tag}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Title Tag H1</label>
          <input
            type="text"
            className="form-control"
            name="title_tag_h1"
            value={formData.title_tag_h1}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Description</label>
          <textarea
            className="form-control"
            name="blog_description"
            rows="4"
            value={formData.blog_description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Image</label>
          <input
            type="file"
            className="form-control"
            name="blog_image"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Page;
