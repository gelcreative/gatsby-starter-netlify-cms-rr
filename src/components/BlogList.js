import React from 'react'
import styled from 'styled-components'

import SingleBlogPost from './SingleBlogPost'

const StyledBlogList = styled.section`
  flex-wrap: wrap;

  .retirerite-blog-body-item:nth-child(2) .single-blog-post-info,
  .retirerite-blog-body-item:nth-child(3) .single-blog-post-info {
      width: 100%
  }

  @media(min-width: 769px) {
    .retirerite-blog-body-item:nth-child(n+4) article {
      padding-top: 0;
      min-height: unset;
    }

    .retirerite-blog-body-item:nth-child(n+4) [class^="single-post-bg"] {
      width: 20%;
    }

    .retirerite-blog-body-item:nth-child(n+4) .single-blog-post-info {
      min-height: 200px;
      max-height: unset;
      position: relative;
      width: 80%;
      margin-left: auto;
      background-color: ${props => props.theme.lightGrey}
    }

    .retirerite-blog-body-item:nth-child(n+4) article:hover .single-blog-post-info {
      background-color: ${props => props.theme.middleBlue};
    }
  }
`

const BlogList = (props) => {
  console.log(props);
  const { mainQuery, grayscaleImageQuery } = props.blogListQuery
  const { edges: posts } = mainQuery
  const { edges: grayScaleImages } = grayscaleImageQuery
  let columnClass = ""

  return (
    <StyledBlogList className="columns retirerite-blog-body">
      {posts
        .map(({ node: post }, i) => {

          switch(i) {
            case 1: columnClass = " is-7"
              break;
            case 2: columnClass = " is-5"
              break;
            default: columnClass = " is-12"
          }

          return (
            <div className={`column${columnClass} retirerite-blog-body-item`}>
              <SingleBlogPost 
                key={post.id}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                description={post.frontmatter.description}
                excerpt={post.excerpt}
                tag={post.frontmatter.tags[0]}
                bannerImage={post.frontmatter.bannerImage.image}
                grayscaleBannerImage={grayScaleImages[i].node.frontmatter.bannerImage.image}
                slug={post.fields.slug}
              />
            </div>
          )
        })  
      }    
    </StyledBlogList>
  )
}

export default BlogList