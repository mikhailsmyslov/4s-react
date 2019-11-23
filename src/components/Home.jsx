import React from 'react'
import { Carousel } from 'react-bootstrap'
import images from '../assets/landingImages'
import homePageHelper from '../assets/homePageHelper.png'
import { AuthConsumer } from './AuthContext'

const renderCarousel = images => (
  <Carousel className="mb-5">
    {images.map(({ title, text, src, size }, index) => (
      <Carousel.Item className="w-100" key={index}>
        <img
          className="d-block w-100"
          data-src={`holder.js/${size}?text=${title}&bg=373940`}
          alt={`${title}`}
          src={src}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
)

const renderAuthUserHomePage = (user) => (
  <div className="text-center">
    <h3>{`Hello, ${user.nickName}`}</h3>
    <p>Please browse to the news block and check it out!</p>
    <img src={homePageHelper} className="helper-image" alt="helper" />
  </div>
)

export default () => (
  <AuthConsumer>
    {({ user }) =>
      user ? renderAuthUserHomePage(user) : renderCarousel(images)
    }
  </AuthConsumer>
)
