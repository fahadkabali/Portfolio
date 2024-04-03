import React from 'react'
import "./blog.css";
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg'

export default function Blog() {
  const date = new Date().getUTCFullYear();
  return (
    <section className="blog container section" id="blog">
        <h2 className="section_title">Latest Posts</h2>

        <div className="blog_container grid">
          <div className="blog_card">
            <div className="blog_thumb">
              <a href="https://www.wearedevelopers.com/magazine/best-tools-for-front-end-development" target="_blank" rel="noopener noreferrer"><span className="blog_category">Reviews</span></a>
              <img src={Image1} alt="" className="blog_img" />
            </div>
            <div className="blog_details">
            <a href="https://fullscale.io/blog/backend-tech-stack/" target="_blank" rel="noopener noreferrer">
              <h3 className="blog_title">Best App Development Tools For Your Project</h3>
              </a>
              <div className="blog_meta">
                <span>{date}</span>
                <span className="blog_dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>
          <div className="blog_card">
            <div className="blog_thumb">
              <a href="https://youtu.be/YxC3V1XhgmU" target="_blank" rel="noopener noreferrer"><span className="blog_category">Tutorials</span></a>
              <img src={Image2} alt="" className="blog_img" />
            </div>
            <div className="blog_details">
            <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
              <h3 className="blog_title">Best Development Learning platform For Your Project</h3>
              </a>
              <div className="blog_meta">
                <span>{date}</span>
                <span className="blog_dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>
          <div className="blog_card">
            <div className="blog_thumb">
              <a href="https://niftypm.com/blog/software-development-tools/" target="_blank" rel="noopener noreferrer"><span className="blog_category">Business</span></a>
              <img src={Image3} alt="" className="blog_img" />
            </div>
            <div className="blog_details">
            <a href="https://niftypm.com/blog/software-development-tools/" target="_blank" rel="noopener noreferrer">
              <h3 className="blog_title">Best secure Development Tools For Your Project</h3>
              </a>
              <div className="blog_meta">
                <span>{date}</span>
                <span className="blog_dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
