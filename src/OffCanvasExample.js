import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'; // Import Button component if needed
import ContactCard from './ContactCard'; // Make sure the path is correct based on your file structure

function OffCanvasExample({ show, handleClose, ...props }) {
  return (
    <Offcanvas show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Information</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ContactCard />
        <Button  variant="secondary" onClick={handleClose} className="mt-3 close_btn">
        <i class="bi bi-x"></i>
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvasExample;
