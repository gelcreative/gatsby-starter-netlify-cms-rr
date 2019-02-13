import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledSingleBlogPost = styled.article`
  background: #ffffff;
  position: relative;
  padding-top: 150px;
  background: center no-repeat;
  background-size: cover;

  .single-blog-post-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1em;
  }

  .single-post-date {
    font-size: 1.6rem;
    color: #515151;
    font-style: italic;
  }

  .single-post-tag {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 0.5em 2%;
    background-color: #29303e;
    color: #ffffff;
  }

  .single-post-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media(max-width: 769px) {
    .single-post-tag {
      right: unset;
      left: 0;
    }
  }

  @media(min-width: 770px) {
    .single-blog-post-info {
      width: 60%;
    }
  }
`

const SingleBlogPost = (props) => {
  return (
    <StyledSingleBlogPost 
      style={{
        backgroundImage: `url(${
          !!props.bannerImage.childImageSharp 
          ? props.bannerImage.childImageSharp.fluid.src 
          : props.bannerImage
        })`
      }}
    >
      <div className="single-blog-post-info">
        <h3>{props.title}</h3>
        <p className="single-post-date">Published: {props.date}</p>
        <p className="single-post-excerpt">{props.excerpt}</p>
      </div>
      <p className="single-post-tag"><span className="visually-hidden">Post Category:</span> {props.tag}</p>
      <Link to={props.slug} className="single-post-link"><span className="visually-hidden">Read blog post: {props.title}</span></Link>
    </StyledSingleBlogPost>
  )
}

export default SingleBlogPost