import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Completed = ({data}) => {
    console.log(data)
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
     
        if(data.success === true){
            console.log(data)
            setShow(true);
        }

    }, [data])

 
    
    return (
        <>
                 <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> 
        </>
    );
};

export default Completed;