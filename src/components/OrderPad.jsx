import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function OrderPad() {
    return (
        <div className='w_orderPad'>
            <h5>Order Pad: </h5>
            <Form>
                <div key={`inline-radio}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Buy"
                        name="group1"
                        type="radio"
                        id={`inline-radio-buy`}
                    />
                    <Form.Check
                        inline
                        label="Sell"
                        name="group1"
                        type="radio"
                        id={`inline-radio-sell`}
                    />
                </div>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Qty(x1)</InputGroup.Text>
                        <Form.Control
                            type='number'
                            placeholder="Quantity"
                            aria-label="Quantity"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
            
                    <InputGroup className="mb-3">
                        <Form.Control
                            type='number'
                            placeholder="Price"
                            aria-label="Price"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">MYR</InputGroup.Text>
                    </InputGroup>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Enter your pin number</Form.Label>
                        <Form.Control
                                type="password"
                                placeholder='Pin Number'
                        />
                    </Form.Group>
                </div>
                <Button variant="primary w_btn">Submit</Button>
            </Form>
        </div>
    );
  }
  
  export default OrderPad;