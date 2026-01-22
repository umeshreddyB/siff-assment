import { useState } from 'react'
import { contactAPI } from '../../services/api'

import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({name: '',email: '',phone: '',subject: '',message: ''})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      await contactAPI.submitContact(formData)
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-description">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                For any queries, collaborations, or support, reach out to us through any of the following channels.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:contactus@parikshe.in">contactus@parikshe.in</a>
                  </div>
                </div>

                <div className="contact-item">
                 
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:6366548224">6366548224</a>
                  </div>
                </div>

                <div className="contact-item">
                
                  <div>
                    <h3>Institutional Queries</h3>
                    <a href="mailto:padmashree@parikshe.in">padmashree@parikshe.in</a>
                  </div>
                </div>
              </div>

              <div className="reach-info">
                <h3>Our Reach</h3>
                <p>Parikshe has a presence in <strong>33 districts</strong> and <strong>27 cities</strong> across Karnataka.</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              {success && (
                <div className="success-message">
                  Thank you for contacting us! We will get back to you soon.
                </div>
              )}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
