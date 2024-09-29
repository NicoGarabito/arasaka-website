import React from 'react';
import { Card } from 'primereact/card';
import '../styles.css';

const ServicesPage = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <div className="p-grid">
        <div className="p-col">
          <Card title="Corporate Security" style={{ width: '25em', marginBottom: '2em', backgroundColor: '#1f1f1f' }}>
            <p className="p-m-0" style={{ color: '#f0f0f0' }}>
              Providing top-tier security solutions for corporations worldwide.
            </p>
          </Card>
        </div>
        <div className="p-col">
          <Card title="Cyberware Installation" style={{ width: '25em', marginBottom: '2em', backgroundColor: '#1f1f1f' }}>
            <p className="p-m-0" style={{ color: '#f0f0f0' }}>
              The latest in cybernetic enhancements and installations.
            </p>
          </Card>
        </div>
        <div className="p-col">
          <Card title="Advanced AI Solutions" style={{ width: '25em', marginBottom: '2em', backgroundColor: '#1f1f1f' }}>
            <p className="p-m-0" style={{ color: '#f0f0f0' }}>
              Cutting-edge AI systems tailored for any industry.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
