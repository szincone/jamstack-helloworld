import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    }}
  >
    <h1>More Info</h1>
    <p>
      I am a former math teacher turned programmer who has a deep love and
      passion for creating things that help people. Contact me at{' '}
      <a
        target="_blank"
        href="https://github.com/szincone"
        rel="noopener noreferrer"
      >
        github.com/szincone
      </a>{' '}
      or my{' '}
      <a
        target="_blank"
        href="https://www.sawyerzincone.com"
        rel="noopener noreferrer"
      >
        personal site.
      </a>{' '}
    </p>
    <Link to="/">
      <button
        style={{
          background: '#53DD6C',
          color: '#ffffff',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        Go back to the homepage
      </button>
    </Link>
  </div>
)

export default SecondPage
