import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Button from '../atoms/Button'

const Home = () => (
  <PageTemplate
    pageTitle="The React Alt Boilerplate"
    leadText="An alternative to React standard file structure"
  >
    <p class="lead-text">
      A React + Webpack stack to kick start front-end developments, using an alternate file structure to React standards which abstracts Sass styles from the components in favor of a more common cascading approach.
    </p>
    <Button to='/about' label='Read more about the structure'/>
  </PageTemplate>
)

export default Home