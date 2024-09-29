import React from 'react';
import '../styles.css';
import { Button } from 'primereact/button';

const ContactPage = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        <i className="pi pi-envelope" style={{ color: '#f0c040' }}></i> Email: contact@arasaka.com
      </p>
      <p>
        <i className="pi pi-phone" style={{ color: '#f0c040' }}></i> Phone: +2077 1234-5678
      </p>
      <Button label="Send a Message" icon="pi pi-send" className="p-button-rounded p-button-warning" />
    </div>
  );
};

export default ContactPage;
