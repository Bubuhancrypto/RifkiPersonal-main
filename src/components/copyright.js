import React from 'react'

import PropTypes from 'prop-types'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className={`copyright-copyright ${props.rootClassName} `}>
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">©Copyright - Rifki Nugraha</span>
      </div>
    </div>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
