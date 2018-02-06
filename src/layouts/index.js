import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'
import "../css/base.css";
import "prismjs/themes/prism.css";
import "../../static/styles/lib/js/fontawesome.min.js";
import "../../static/styles/lib/js/fa-brands.min.js";


const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const header =
      <header style={{ marginBottom: `1.5rem` }}>
        <ListLink to="/">Blog</ListLink>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/notes/">Notes</ListLink>
        </ul>
      </header>

      const footerStyles = {
        bottom: "0",
        width: "100%",
        fontSize: "1rem",
        textAlign: "center"
      }
      const footer = 
        <footer style={footerStyles}>
          <h2 style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1em", marginBottom: "0"}}>
            <a href="https://twitter.com/_subsid" style={{margin: "0.5em"}} target="_blank"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/subsid" style={{margin: "0.5em"}} target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.github.com/subsid" style={{margin: "0.5em"}} target="_blank"><i className="fab fa-github-square"></i></a>
          </h2>
          <p style={{marginTop: "-0.5em"}}>
            <a href="/about">About</a>
            &nbsp;&#183;&nbsp;
            <a href="/blog">Blog</a>
            &nbsp;&#183;&nbsp;
            <a href="/notes">Notes</a>
            &nbsp;&#183;&nbsp;
            <a href="/blog/rss.xml">RSS</a></p>
        </footer>

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {header}
        {children()}
        {footer}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
