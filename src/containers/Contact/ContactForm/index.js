import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import sendFormData from '../../../utils/sendFormData';
import therapies from '../../../utils/therapies';
import Input from '../../../components/Input';
import SelectInput from '../../../components/SelectInput';
import Alert from '../../../components/Alert';
import { StyledForm, StyledButton } from './styles';
import Loading from './Loading';

const bookingOptions = ['General Enquiry', ...Object.values(therapies).map((therapy) => therapy.name)];

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [sendingData, setSendingData] = useState(false);
    const [error, setError] = useState(null);

    const bookingChosen = new URLSearchParams(useLocation().search).get('booking');

    const { register, handleSubmit, errors, control, reset } = useForm({
        defaultValues: {
            booking: bookingChosen || ''
        }
    });

    const onSubmit = async(data) => {
        setSendingData(true);

        const status = await sendFormData({ data });
        if (status === 200) {
            setSubmitted(true);
            reset();
        } else {
            setError('ERROR Please try again or contact Toni with the details on this page');
        }

        setSendingData(false);
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
                open={!!error}
                onClose={() => setError(null)}
                text={error}
            />

            {sendingData ? <Loading /> : (
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Name" name="name" error={errors.name} register={register} />
                    <Input label="Email" name="email" error={errors.email} register={register} />
                    <Input label="Phone" name="phone" type="tel" error={errors.phone} register={register} />
                    <SelectInput
                        error={errors.booking}
                        name="booking"
                        label="Booking/Enquiry"
                        options={bookingOptions}
                        control={control}
                    />
                    <Input label="Message" name="message" error={errors.message} register={register} multiline />

                    <StyledButton type="submit">
                        Submit
                    </StyledButton>
                </StyledForm>
            )}
        </>
    );
};

export default ContactForm;
