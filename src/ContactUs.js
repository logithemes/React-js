import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className='float contact__us pt_120 pb_120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row align-self-center'>
              <div className='col-lg-8'>
                <div
                  className="theme_heading text-left aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  bis_skin_checked="1"
                >
                  <span className="sub d-block">Drop us a line</span>
                  <h2 className="main_heading">Have Any Project in Mind? Contact Us</h2>
                  <p className="para">
                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  </p>
                </div>
    <div className='form_controls'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    
                      <InputGroup hasValidation>
                       
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                    
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustomMessage">
                     
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a message.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Submit </Button>
                </Form>
                </div>
              </div>
              <div className='col-md-12 col-lg-4'>
                <div className='contact_img' data-aos="fade-left" data-aos-duration="600">
                  <img src={require('./assets/images/about/1.webp')} alt="" />
                </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
