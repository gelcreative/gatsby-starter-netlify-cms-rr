import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledSingleBlogPost = styled.article`
  background: #ffffff;
  position: relative;
  padding-top: 150px;
  background: center no-repeat;
  background-size: cover;
  min-height: 400px;

  &:hover {
    .single-post-color-bg {
      opacity: 0;
    }

    .single-blog-post-info {
      background-color: ${props => props.theme.middleBlue};
    }

    .single-blog-post-info * {
      color: #ffffff;
    }

    .single-post-tag {
      background-color: ${props => props.theme.red};
    }
  }

  .single-post-color-bg {
    background: center no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: 300ms;
    z-index: 0;
  }

  .single-blog-post-info {
    position: relative;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    transition: 500ms;
    z-index: 1;
    /* max-height: 300px; */
    overflow: hidden;
  }

  .single-blog-post-info * {
    transition: 500ms;
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
    margin: 0;
    transition: 500ms;
    z-index: 1;
  }

  .single-post-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
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

const SingleBlogPost = (props) => (
  <StyledSingleBlogPost 
    style={{
      backgroundImage: `url(${
        !!props.grayscaleBannerImage.childImageSharp 
        ? props.grayscaleBannerImage.childImageSharp.fluid.src 
        : props.grayscaleBannerImage
      })`
    }}
  >
      <div 
      className="single-post-color-bg"
      style={{
        backgroundImage: `url(${
          !!props.bannerImage.childImageSharp 
          ? props.bannerImage.childImageSharp.fluid.src 
          : props.bannerImage
        })`
      }}
    ></div>
    <p className="single-post-tag"><span className="visually-hidden">Post Category:</span> {props.tag}</p>
    <div className="single-blog-post-info">
      <h3>{props.title}</h3>
      <p className="single-post-date">Published: {props.date}</p>
      <p className="single-post-excerpt">{props.excerpt}</p>
    </div>
    <Link to={props.slug} className="single-post-link"><span className="visually-hidden">Read blog post: {props.title}</span></Link>
  </StyledSingleBlogPost>
)

export default SingleBlogPost