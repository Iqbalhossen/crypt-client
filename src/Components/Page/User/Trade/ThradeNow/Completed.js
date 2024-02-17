import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Completed = ({ data }) => {
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(true);
    const [results, setResults] = useState([])
    const CloseModal = ()=>{
        setResults([]);
        setShow(false);
    }
    useEffect(() => {
        if (data?._id) {
            fetch(`http://localhost:5000/api/user/trade/log/single/view/${data?._id}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setResults(data?.data);
                    console.log(data)
                });

        }

    }, [])
    if (results?.Result !== null && results?.Result !== undefined) {
        return (
            <>
                <Modal show={show} onHide={handleClose} >

                    <Modal.Body>

                        <div className="text-center py-5">
                        <i className="fa-solid fa-circle-exclamation display-2 py-3"></i>
                            <h4>
                                {results?.Result === "Loss" ? "$0.00" : ''}
                                {results?.Result === "Win" ? `$${results?.Result_Amount}` : ''}
                                {results?.Result === "Draw" ? `$${results?.Result_Amount}` : ''}  {results?.Result}
                               
                            </h4>
                            <p>Message: Trade</p>
                            <p>Selected Period: {results?.Time}s</p>
                            <p>Price: {results?.Crypto_price}</p>
                            <p>Direction: {results?.HighLow}</p>
                            <p>Amount: ${results?.Amount}</p>
                            <Button variant="secondary" onClick={CloseModal} className='mt-5'>
                            Close
                        </Button>
                        </div>

                    </Modal.Body>
                
                </Modal>
            </>
        );
    }


    //     0.00 Draw
    // Message: Trade
    // Selected Period: 30s
    // Price: 42,267.42
    // Direction: High
    // Amount: 10.00

};

export default Completed;