import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ label, type, ...props }) => {
  const { to, href } = props
  if (to) {
    return <NavLink className="button" {...props}>{ label }</NavLink>
  } if (href) {
    return <a className="button" {...props}>{ label }</a>
  }
  return <button {...props} type={type}>{ label }</button>
}

export default Button