import React from 'react'

const PageTemplate = ({ pageClass, pageTitle, leadText, children }) => (
  <section className={ 'default-page ' + pageClass }>
    <header className="page-header">
      <div className="content-container">
        <h1>{ pageTitle }</h1>
        <p className="lead-text">{ leadText }</p>
      </div>
    </header>
    <div className="page-content content-container">
      { children }
    </div>
  </section>
)

export default PageTemplate