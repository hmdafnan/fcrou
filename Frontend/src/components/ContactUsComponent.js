import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Label, Button, Row, Col } from 'reactstrap';

const url = 'http://localhost:5000';

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phno: '',
            message: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phno, message } = this.state;

        console.log('The present state is:', {name, email, phno, message});
        alert(JSON.stringify({name, email, phno, message}));

        axios.post(`${url}/contactus`, { name, email, phno, message })
            .then((result) => {
                console.log(result)
            })
    }

    render() {
        const { name, email, phno, message } = this.state;
    return (
        <div className="container-fluid bgc">
            <div className="row row-content">
                <div className='col-12'>
                    <h1>For more Information or to book an Appointment</h1>
                </div>
            </div> 
        <div>
            <Form onSubmit={this.onSubmit}>
                <Row className='form-group'>
                    <Label htmlFor='name' md={2}>Your Name:</Label>
                    <Col md={10}>
                        <Input type="text" id="name" name="name" value={name} onChange={this.onChange} />
                    </Col>
                </Row>

                <div>&nbsp;</div>

                <Row className='form-group'>
                    <Label htmlFor='email' md={2}>Your Email:</Label>
                    <Col md={4}>
                        <Input type="text" id="email" name="email" value={email} onChange={this.onChange} />
                    </Col>
                    <Label htmlFor='phno' md={2}>Your Phone Number:</Label>
                    <Col md={4}>
                        <Input type="telnum" id="phno" name="phno" value={phno} onChange={this.onChange} />
                    </Col>
                </Row>

                <div>&nbsp;</div>

                <Row className='form-group'>
                    <Label htmlFor='message' md={2}>Your Query/Feedback:</Label>
                    <Col md={10}>
                        <Input className='col-md-6' type="textarea" id="message" name="message" value={message} onChange={this.onChange} />
                    </Col>
                </Row>

                <div>&nbsp;</div>
                <Row className='form-group'>
                    <Col md={10}>
                        <Button type='submit' color='primary'>Send</Button>
                    </Col>
                </Row>
            </Form>
        </div>
        </div>
    )
    }
}
console.log(ContactUs);

export default ContactUs;