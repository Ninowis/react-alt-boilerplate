import React from 'react'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'
import InlineSVG from 'svg-inline-react'
import logo from '../../svg/react-logo.svg'

const Header = () => (
  <header className="header">
    <a className="app-logo" href="https://reactjs.org/" title="Visit React website">
      <InlineSVG src={logo} element='span'/>
    </a>
    <span className="app-title">React Alt Boilerplate</span>
    <Navigation />
    <div className="options">
      <Button href="https://github.com/Ninowis/react-alt-boilerplate" label="Fork on GitHub"/>
    </div>
  </header>
)

export default Header