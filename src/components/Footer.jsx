import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faBootstrap,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

export default () => (
  <footer className="py-3 bg-dark mt-auto text-white-50">
    <div className="text-center">
      <a className="icon-link" href="#">
        <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
      </a>
      <a className="icon-link" href="https://react-bootstrap.netlify.com/">
        <FontAwesomeIcon icon={faBootstrap} size="lg" className="mr-2" />
      </a>
      <a className="icon-link" href="https://developer.mozilla.org/ru/">
        <FontAwesomeIcon icon={faJs} size="lg" className="mr-2" />
      </a>
      <a className="icon-link" href="https://ru.reactjs.org/">
        <FontAwesomeIcon icon={faReact} size="lg" className="mr-2" />
      </a>
    </div>
  </footer>
)
