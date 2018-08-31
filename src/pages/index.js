import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi my name is Sawyer.</h1>
    <p>
      I am a full-stack developer currently living in Colorado. Check out my
      portfolio site at{' '}
      <a
        target="_blank"
        href="https://www.sawyerzincone.com"
        rel="noopener noreferrer"
      >
        SawyerZincone.com
      </a>{' '}
      to see my projects hosted on GitHub or to get in contact with me via email
      or Linkedin.{' '}
    </p>
    <Link to="/page-2/">
      <button
        style={{
          background: '#53DD6C',
          color: '#ffffff',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        Go to page 2
      </button>
    </Link>
  </div>
)

export default IndexPage
