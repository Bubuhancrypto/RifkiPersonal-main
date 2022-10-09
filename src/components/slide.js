import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">
        <div className="slide-left-side">
          <div className="slide-decorations-container">
            <img
              alt="image"
              src="/playground_assets/union-200h.png"
              className="slide-dots"
            />
            <div className="slide-squares-container">
              <div className="slide-light-green"></div>
              <div className="slide-orange"></div>
            </div>
          </div>
          <div className="slide-image-container">
            <img
              alt={props.image_alt}
              src="/playground_assets/card%20kid.svg"
              className="slide-image"
            />
          </div>
        </div>
        <div className="slide-right-side">
          <span className="slide-testimonial">{props.Testimonial}</span>
          <span className="slide-author">{props.Author}</span>
          <span className="slide-role">{props.Role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  Author: 'Rifki Nugraha',
  Testimonial:
    "My career goal is to become successful at what I do not only for myself but also to help others grow and become the best version of themselves. If I don't achieve my career goals I will still be happy knowing that I did something that will benefit my future self.",
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbWlsZXxlbnwwfHx8fDE2NDM0MDc4MTE&ixlib=rb-1.2.1&w=700',
  image_alt: 'image',
  Role: 'Superdad & Knowledge Seeker',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Testimonial: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
