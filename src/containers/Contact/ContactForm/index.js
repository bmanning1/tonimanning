import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import sendFormData from '../../../utils/sendFormData';
import therapies from '../../../utils/therapies';
import Input from '../../../components/Input';
import SelectInput from '../../../components/SelectInput';
import Alert from '../../../components/Alert';
import { StyledForm, StyledButton } from './styles';

const bookingOptions = ['General Enquiry', ...Object.values(therapies).map((therapy) => therapy.name)];

const ContactForm = () => {
    const bookingChosen = new URLSearchParams(useLocation().search).get('booking');
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        booking: bookingChosen || '',
        message: ''
    };

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(initialValues);

    const onChange = (type) => (e) => {
        setData({ ...data, [type]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        sendFormData({
            data,
            resetForm: () => setData(initialValues),
            alertSuccess: () => setSubmitted(true),
            setError
        });
    };

    return (
        <>
            <Alert
                open={submitted}
                onClose={() => setSubmitted(false)}
                text="Thank you, your form has been submitted!"
            />
            <Alert
                type="error"
                open={error}
                onClose={() => setError(null)}
                text={error}
            />

            <StyledForm onSubmit={onSubmit}>
                <Input label="Name" value={data.name} onChange={onChange('name')} />
                <Input label="Email" value={data.email} onChange={onChange('email')} />
                <Input label="Phone" value={data.phone} onChange={onChange('phone')} />
                <SelectInput
                    keyName="booking"
                    options={bookingOptions}
                    label="Booking/Enquiry"
                    value={data.booking}
                    onChange={onChange('booking')}
                />
                <Input label="Message" value={data.message} onChange={onChange('message')} multiline />

                <StyledButton type="submit">
                    Submit
                </StyledButton>
            </StyledForm>
        </>
    );
};

export default ContactForm;
