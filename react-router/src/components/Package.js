import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Package({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (

    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is {name}!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Package