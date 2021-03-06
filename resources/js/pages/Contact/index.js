import React, {useState,useEffect } from 'react';
import './Contact.css'
import Form from '../../components/Form';
import axios from 'axios';
import {SpaceBetween} from '../../components/SpaceBetween';
import {Modal} from '../../components/Modal';
import { Link } from 'react-router-dom';
import { update } from 'lodash';


const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [sentEmail, setsentEmail] = useState(false);

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const hadleSubmit = (event) => {
        event.preventDefault();
        setShowSpinner(true)   
        sendEmail();
    }

    const sendEmail = () => {
        setsentEmail(true)
        setShowSpinner(false)
        setShowModal(true)
         
    }

    return(
        <div className="Contact-Container flex justifyc">
            <div>ESTO ES UNA PRUEBA</div>
            {showModal ? <Modal sentEmail={sentEmail} onClickButton={() => setShowModal(false)}/> : ''}
            <SpaceBetween height="45vh" />
            <Form onSubmit={handleSubmit} onChange={handleInputChange} showSpinner={showSpinner}/>
        </div>
    );
}

export default Contact;