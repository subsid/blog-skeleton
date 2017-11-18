import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './sid-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`Siddharth`}
          style={{
          }}
        />
        <p
          style={{
            marginBottom: rhythm(1),
          }}
        >
          Hi there! My name is Siddharth. Currently, I'm a masters cs student
          at Texas A&M University, College Station.  Before joining graduate
          school, I worked as a software engineer at &nbsp;
          <a href="https://govimana.com/">VIMANA</a>, a manufacuring data analytics
          company. Things I enjoy include building stuff, programming, table
          tennis, cooking, hiking and fitness.
        </p>
        <p>
          You can reach me at
          <br/>
          <a title="Email" href="mailto:sidharth3930@gmail.com">
            sidharth3930[at]<span style={{display: 'none'}}>yup-</span>gmail.com
          </a>&nbsp;|&nbsp;<a title="Twitter" href="http://twitter.com/_subsid">
            Twitter
          </a>&nbsp;|&nbsp;
          <a title="LinkedIn" href="http://twitter.com/_subsid">
            LinkedIn
          </a>&nbsp;|&nbsp;
          <a title="Github" href="http://github.com/subsid">
            Github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
