import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <section id='Contact' className='pt-5 pb-5'>
    <div className="container mt-5">
      <h2 className="mb-3">CONTACT ME</h2>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label visually-hidden" htmlFor="name">
            Name
          </label>
          <input className="form-control black" type="text" id="name" placeholder='Name' required />
        </div>
        <div className="mb-3">
          <label className="form-label visually-hidden" htmlFor="email">
            Email
          </label>
          <input className="form-control black" type="email" id="email" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <label className="form-label visually-hidden" htmlFor="message">
            Message
          </label>
          <textarea className="form-control black" id="message" placeholder='Message' required />
        </div>
        <button className="btn btn-light" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </section>
  )
}
export default Contact