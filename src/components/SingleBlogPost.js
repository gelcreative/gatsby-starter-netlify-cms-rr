import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import placeholder from '../img/bloglist-default.jpg'

const StyledSingleBlogPost = styled.article`
  background: #ffffff;
  position: relative;
  padding-top: 150px;
  background: center no-repeat;
  background-size: cover;
  min-height: 400px;

  &:hover {
    .single-post-bg-grayscale{
      opacity: 1;
    }

    .single-post-bg-placeholder {
      background-color: ${props => props.theme.lightGrey};
    }

    .single-blog-post-info {
      background-color: ${props => props.theme.middleBlue};
      .single-post-date {
        color: #ffffff;
      }
    }

    .single-blog-post-info * {
      color: #ffffff;
    }

    .single-post-tag {
      background-color: ${props => props.theme.red};
    }
  }

  .single-post-bg-color,
  .single-post-bg-grayscale,
  .single-post-bg-placeholder {
    background: center no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: 300ms;
  }

  .single-post-bg-color {
    z-index: 0;
  }

  .single-post-bg-grayscale {
    opacity: 0;
    z-index: 1;
  }

  .single-post-bg-placeholder {
    background-color: ${props => props.theme.middleBlue};
  }

  .single-blog-post-info {
    position: absolute;
    bottom: 0;
    padding: 1em;
    transition: 500ms;
    z-index: 2;
    max-height: 80%;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    h3.single-post-title {
      margin-bottom: 0;
    }
    .single-post-date {
      font-size: 1.6rem;
      color: #515151;
      font-style: italic;
      margin-bottom: 0.5em;
    }
  }

  .single-post-excerpt {
    line-height: 1.3;
  }

  .single-blog-post-info * {
    transition: 500ms;
  }

  .single-post-tag {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 0.5em 2%;
    background-color: #29303e;
    margin: 0;
    transition: 500ms;
    z-index: 4;
    a {
      color: #ffffff;
      &:hover {
        color: #ffffff;
      }
    }
  }

  .single-post-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
  }

  @media(max-width: 769px) {
    .single-post-tag {
      right: unset;
      left: 0;
    }
  }

  @media(min-width: 770px) {
    .single-blog-post-info {
      width: 58%;
      min-height: 9em;
    }
  }
`

const SingleBlogPost = (props) => {
  const hasBannerImage = props.bannerImage
  let postBannerImage
  if(hasBannerImage) {
    postBannerImage = 
                    <>
                      <div 
                        className="single-post-bg-color"
                        style={{
                          backgroundImage: `url(${
                            !!props.bannerImage.childImageSharp 
                            ? props.bannerImage.childImageSharp.fluid.src 
                            : props.bannerImage
                          })`
                        }}
                      ></div>
                      <div 
                        className="single-post-bg-grayscale"
                        style={{
                          backgroundImage: `url(${
                            !!props.grayscaleBannerImage.childImageSharp 
                            ? props.grayscaleBannerImage.childImageSharp.fluid.src 
                            : props.grayscaleBannerImage
                          })`
                        }}
                      ></div>
                    </>
  } else {
    postBannerImage = <div 
                        className="single-post-bg-placeholder"
                        style={{
                          backgroundImage: `url(${placeholder})`,
                          border: '3px solid #262262'
                        }}  
                      ></div>
  }

  return (  
    <StyledSingleBlogPost>
      { postBannerImage }
      <p className="single-post-tag"><Link to={`/tags/${props.tag}`}><span className="visually-hidden">Post Category:</span> {props.tag}</Link></p>
      <div className="single-blog-post-info">
        <h3 className="single-post-title">{props.title}</h3>
        <p className="single-post-date">Published: {props.date}</p>
        <p className="single-post-excerpt">{props.description}</p>
      </div>
      <Link to={props.slug} className="single-post-link"><span className="visually-hidden">Read blog post: {props.title}</span></Link>
    </StyledSingleBlogPost>
  )
}

export default SingleBlogPost