import React from 'react'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'

const Header = () => (
  <header className="header">
    <a className="app-logo" href="https://reactjs.org/" title="Visit React website">
      <img src="./images/react-logo.svg"/>
    </a>
    <span className="app-title">React Alt Boilerplate</span>
    <Navigation />
    <div className="options">
      <Button href="https://github.com/Ninowis/react-alt-boilerplate" label="Clone on GitHub"/>
    </div>
  </header>
)

export default Header