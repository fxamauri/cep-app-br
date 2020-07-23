import React from "react"
import PropTypes from "prop-types"
import { IoIosClose } from 'react-icons/io'
import styles from "./closeButton.module.css"

const CloseButton = ({ className, style, size, onClick }) => (
  <button className={`${className} ${styles.container}`}>
    <IoIosClose onClick={onClick} size={size} />
  </button>
)

CloseButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
}

CloseButton.defaultProps = {
  className: '',
  style: {},
  size: 50,
}

export default CloseButton
