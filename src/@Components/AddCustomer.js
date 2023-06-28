import { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import Api, { endpoints } from '@Helpers/api';

export default ({ refresh }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearForm = () => {
    setName();
    setEmail();
    setPhone();
    setAddress();
    setAge();
  }

  const handleSubmit = () => {
    if (!name, !email, !phone, !address, !age) return alert('All fields cannot be empty')
    setIsLoading(true)
    console.log('🚀 vv ~ handleSubmit:', { name, email, phone, address, age });

    Api({
      data: { name, email, phone, address, age },
      endpoint: endpoints.createCustomer(),
      onSuccess: ({ data }) => {
        setIsLoading(false)
        clearForm();
        handleClose();
        refresh();
      },
      onFail: (error) => {
        console.log('🚀 vv ~ error:', error);
        setIsLoading(false)
      },
    });
  }

  return (
    <>
      <div className="d-flex flex-row-reverse my-3">
        <Button variant="primary" onClick={handleShow}>
          Add new customer
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {[
            { placeholder: 'Name', type: 'text', value: name, onChange: e => setName(e.target.value) },
            { placeholder: 'Email', type: 'email', value: email, onChange: e => setEmail(e.target.value) },
            { placeholder: 'Phone', type: 'phone', value: phone, onChange: e => setPhone(e.target.value) },
            { placeholder: 'Address', type: 'text', value: address, onChange: e => setAddress(e.target.value) },
            { placeholder: 'Age', type: 'number', value: age, onChange: e => setAge(e.target.value) },
          ].map(attr => (
            <div className="form-floating mb-3">
              <input className="form-control"   {...attr} />
              <label>{attr.placeholder}</label>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {isLoading
            ? (
              <Button variant="primary" disabled>
                <Spinner
                  animation="grow"
                  size="sm"
                  role="status"
                />
                Submitting...
              </Button>
            ) : (
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
