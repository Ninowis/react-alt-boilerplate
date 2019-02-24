import React from 'react'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'

const Header = () => (
  <header className="header">
    <a className="logo" href="https://reactjs.org/" title="Visit React website">
      <img src="./images/react-logo.svg"/>
      <span>React App Boilerplate</span>
    </a>
    <Navigation />
    <div className="options">
      <Button href="https://github.com/Ninowis/react-app-boilerplate" label="Clone on GitHub"/>
    </div>
  </header>
)

export default Header