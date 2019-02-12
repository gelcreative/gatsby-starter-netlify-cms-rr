import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { prototype } from 'stream';

const StyledSingleBlogPost = styled.article`
  background: #ffffff;
`

const SingleBlogPost = (props) => {
  return (
    <StyledSingleBlogPost>
      <h3>{props.title}</h3>
      <p className="single-post-pub-date">Published: {props.date}</p>
      <p className="single-post-excerpt">{props.excerpt}</p>
      <p className="single-post-tag">{props.tag}</p>
    </StyledSingleBlogPost>
  )
}

export default SingleBlogPost