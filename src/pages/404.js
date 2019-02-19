import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

import SinkingShip from '../img/sinking-ship.svg'

const Styled404 = styled.article`
  margin-bottom: 5rem;

  .retirerite-404-heading {
    font-size: 10rem !important;
    color: ${props => props.theme.blue};
  }

  .retirerite-404-message {
    margin-bottom: 5rem !important;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Styled404 className="section content">
      <div className="container">
        <section className="columns">
          <div className="column is-10 is-offset-1 has-text-centered">
            <h1 className="retirerite-404-heading">404<span className="visually-hidden">Error: Page not found</span></h1>
            <p className="retirerite-404-message">Oh no! Looks like something went wrong. The page you’re looking for isn’t here. <br />Please refresh your browser or hit the back button.</p>
            <img src={SinkingShip} alt="Sinking Ship Graphic" />
          </div>
        </section>
      </div>
    </Styled404>
  </Layout>
)

export default NotFoundPage
