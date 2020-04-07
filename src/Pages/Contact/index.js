import React, { useState } from 'react';
import axios from 'axios';

// get values from submitting the form and checking the request
const GOOGLE_FORM_FIRSTNAME_ID = 'entry.1153632181';
const GOOGLE_FORM_LASTNAME_ID = 'entry.1579051762';
const GOOGLE_FORM_QUERY_ID = 'entry.67147629';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSegYsz0ubvEiNg9O7vw9ViXJVXpxVu4NFQZ56QkYt0Eq3GcMg/formResponse';

const ContactForm = ({ isSubmitted }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [query, setQuery] = useState('');

    const sendMessage = () => {
        const formData = new FormData();
        formData.append(GOOGLE_FORM_FIRSTNAME_ID, firstName);
        formData.append(GOOGLE_FORM_LASTNAME_ID, lastName);
        formData.append(GOOGLE_FORM_QUERY_ID, query);
        axios.post(GOOGLE_FORM_ACTION_URL, formData)
            .catch((err) => {
                if (!err.status) {
                    // network error
                } else {
                    // TODO:
                    alert('Error, please try again')
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
        isSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            First name: <input type="text" aria-label="First Name:" value={firstName} onChange={e => setFirstName(e.target.value)} /><br/>
            Last name: <input type="text" aria-label="Last Name:" value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
            Query: <textarea aria-label="Query" value={query} onChange={e => setQuery(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}

const Submitted = ({ isSubmitted }) => {
    return (
        <div>
            Your form has been submitted. If you do not hear back in x days we may have had a problem with our system so please personally email or phone me.
            <button onClick={() => isSubmitted(false)}>Make another query</button>
        </div>
    )
}

const Contact = () => {
    const [submitted, isSubmitted] = useState('');

    return (
    <div>
        <h1>Contact Page</h1>
        {submitted ? <Submitted isSubmitted={isSubmitted} /> : <ContactForm isSubmitted={isSubmitted} />}
    </div>
)};

export default Contact;