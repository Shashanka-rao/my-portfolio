import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Replace with backend API integration
    setSubmitted(true);
  };

  return (
    <div>
      <h2 className="mb-4">Contact Me</h2>
      {submitted && <Alert variant="success">Message sent successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} required value={formData.message} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="dark">Send</Button>
      </Form>
    </div>
  );
};

export default Contact;