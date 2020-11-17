const formURL = 'https://docs.google.com/forms/d/1Hk0Dnpke-BDf48D-iVL3rIzr7wdDFlroUyI9ivBvUC8/formResponse';

// NOTE: Get googleID values from submitting the form and checking the request
const googleIDs = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1166974658',
    booking: 'entry.716122332',
    message: 'entry.839337160'
};

const sendFormData = ({ data, resetForm, alertSuccess, setError }) => {
    const formData = new FormData();

    Object.entries(googleIDs).forEach(([entry, googleID]) => {
        formData.append(googleID, data[entry]);
    });

    const formConfig = {
        method: 'POST',
        // mode: 'no-cors', // for development only
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: formData
    };

    fetch(formURL, formConfig)
        .then(() => {
            resetForm();
            alertSuccess();
        })
        .catch(() => {
            setError('Error, please try again or contact Toni with the details on this page');
        });
};

export default sendFormData;
