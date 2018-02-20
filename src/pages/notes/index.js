import React from "react"
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'
import {get} from 'lodash'

function generateLinkeAndDescription(url, i) {
  // I love this!
  switch (true) {
    case /probability/.test(url):
      return (
        <div key={i}>
          <a href={withPrefix(url)} target="_blank">Probability</a>
          &nbsp; Probability concepts. Mostly taken from <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/">MIT's 6.041</a>
          <br/>
        </div>
      )
    case /mmds/.test(url):
      return (
        <div key={i}>
          <a href={withPrefix(url)} target="_blank">MMDS</a>
          &nbsp; Notes from <a href="https://lagunita.stanford.edu/courses/course-v1:ComputerScience+MMDS+SelfPaced/about">this</a>&nbsp;wonderful course on Mining of Massive datasets.
          <br/>
        </div>
      )
    case /learning-from-data/.test(url):
      return (
        <div key={i}>
          <a href={withPrefix(url)} target="_blank">Machine Learning</a>
          &nbsp; Caltech's introductory <a href="https://work.caltech.edu/telecourse.html">ML course</a>
        </div>
      )
  }
  return null
}

class NotesIndex extends React.Component {
  render() {
    const noteFiles = get(this.props, "data.allFile.edges")

    return (
      <div style={{ flex: "1 0 auto" }}>
        <p>
          These are some course notes that I find useful. Written using <a href="https://orgmode.org">Org Mode</a> and exported using <a href="https://github.com/fniessen/org-html-themes">org html themes</a>.
        </p>
        <br />
        {noteFiles.map((f, i) => 
          generateLinkeAndDescription(f.node.publicURL, i)
        )}
      </div>
    )
  }
}

export default NotesIndex

export const query = graphql`
  query NotesQuery {
    allFile(filter: { extension: { eq: "html" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }`
