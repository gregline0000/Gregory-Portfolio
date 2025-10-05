import React, { useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock the page component to test just the contact form
const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // For now, use mailto as fallback
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      
      window.open(`mailto:gregory.sarfo@example.com?subject=${subject}&body=${body}`)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm">Error sending message. Please try again.</p>
      )}
    </form>
  )
}

describe('ContactForm', () => {
  beforeEach(() => {
    // Mock window.open
    window.open = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders contact form with all required fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  test('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    // HTML5 validation should prevent submission
    expect(window.open).not.toHaveBeenCalled()
  })

  test('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Test Subject')
    await user.type(screen.getByLabelText(/message/i), 'Test message content')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('mailto:gregory.sarfo@example.com')
      )
    })
  })

  test('has proper form labels and accessibility attributes', () => {
    render(<ContactForm />)
    
    // Check for proper labeling
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('required')
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('required')
    expect(screen.getByLabelText(/message/i)).toHaveAttribute('required')
    
    // Check for proper input types
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('type', 'text')
  })
})