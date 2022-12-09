import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact">
      <h1>Need more info?</h1>
      <p>Send us your questions and we'll be contacting you</p>
      <Form/>
    </div>
  )
}

export default Contact