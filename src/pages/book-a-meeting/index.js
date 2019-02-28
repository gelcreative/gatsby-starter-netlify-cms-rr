import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'
import styled from 'styled-components'

const StyledBookingPage = styled.article`
  label,
  input,
  select,
  textarea,
  button {
    font-size: 1.8rem;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <StyledBookingPage className="section">
          <div className="container">
            <div className="content">
              <section className="retirerite-page-title retirerite-page-intro columns is-centered">
                <div className="column has-text-centered">
                  <h1>Book a Meeting</h1>
                </div>
              </section>
              <section className="retirerite-booking-form columns">
                <div className="column is-10 is-offset-1">
                  <form
                    name="contact"
                    method="post"
                    action="/book-a-meeting/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={"first-name"} >First name</label>
                          <div className="control">
                            <input className="input" type={"text"} name={"first-name"} onChange={this.handleChange} id={"first-name"} required={true} />
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={"last-name"} >Last name</label>
                          <div className="control">
                            <input className="input" type={"text"} name={"last-name"} onChange={this.handleChange} id={"last-name"} required={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={"telephone"}>Telephone</label>
                            <div className="control">
                              <input className="input" type={"tel"} name={"telephone"} onChange={this.handleChange} id={"telephone"} required={true} />
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={"email"}>Email</label>
                            <div className="control">
                              <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <div className="select is-multiple">
                            <label htmlFor={"looking-for"} className="label">Looking for:</label>
                            <select multiple name={"looking-for"} id={"looking-for"} onChange={this.handleChange}>
                              <option value="Insurance information">Insurance information</option>
                              <option value="Investment information">Investment information</option>
                              <option value="Group benefits information">Group benefits information</option>
                              <option value="General information">General information</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={"message"}>Message</label>
                          <div className="control">
                            <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <button className="button is-link" type="submit">Send</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="columns">
                    <div className="column">
                      <small>By clicking on the "Send" button your information will be sent through email to RetireRite Financial Strategies Inc. <br />The use of email is not a secure medium and personal information should be transmitted by more secure means.</small>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </StyledBookingPage>
      </Layout>
    );
  }
}