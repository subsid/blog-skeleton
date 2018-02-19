import React from "react"
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

export default ({ data }) =>
  <div style={{ flex: "1 0 auto" }}>
    <p>
      These are some course notes that I find useful. Written using <a href="https://orgmode.org">Org Mode</a> and exported using <a href="https://github.com/fniessen/org-html-themes">org html themes</a>.
    </p>
    <a to={withPrefix("/notes/probability.html")} target="_blank">Probability</a>
    &nbsp; Probability concepts. Mostly taken from <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/">MIT's 6.041</a>
    <br/>
    <a to={withPrefix("/notes/mmds.html")} target="_blank">MMDS</a>
    &nbsp; Notes from <a href="https://lagunita.stanford.edu/courses/course-v1:ComputerScience+MMDS+SelfPaced/about">this</a>&nbsp;wonderful course on Mining of Massive datasets.
    <br/>
    <a to={withPrefix("/notes/learning-from-data.html")} target="_blank">Machine Learning</a>
    &nbsp; Caltech's introductory <a href="https://work.caltech.edu/telecourse.html">ML course</a>
  </div>

export const query = graphql`
  query NotesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`
