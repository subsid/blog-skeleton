import React from "react"

export default ({ data }) =>
  <div>
    <p>
      Hi!
    </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`
