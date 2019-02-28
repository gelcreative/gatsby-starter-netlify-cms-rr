import React from "react";
import Layout from '../../components/Layout'
import ContactDetails from '../../components/ContactDetails'
import RetireRiteCta from '../../components/RetireRiteCta'

export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <article className="section">
          <div className="container">
            <div className="content">
              <section className="retirerite-page-title retirerite-page-intro columns is-centered">
                <div className="column has-text-centered">
                  <h1>Contact</h1>
                </div>
              </section>
              <ContactDetails />
            </div>
          </div>
          <div className="content">
            <RetireRiteCta />
          </div>
        </article>
      </Layout>
    );
  }
}