const formURL = 'https://docs.google.com/forms/d/1Hk0Dnpke-BDf48D-iVL3rIzr7wdDFlroUyI9ivBvUC8/formResponse';
const proxyURL = 'https://bm-cors-proxy.herokuapp.com';

// NOTE: Get googleID values from submitting the form and checking the request
const googleIDs = {
    name: 'entry.1633920210',
    email: 'entry.227649005',
    phone: 'entry.1770822543',
    booking: 'entry.1263655967',
    message: 'entry.1846923513'
};

const sendFormData = ({ data, resetForm, alertSuccess, setError }) => {
    const formData = new FormData();

    Object.entries(googleIDs).forEach(([entry, googleID]) => {
        formData.append(googleID, data[entry]);
    });

    const formConfig = {
        method: 'POST',
        headers: {
            'X-Requested-With': 'https://docs.google.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    fetch(`${proxyURL}/${formURL}`, formConfig)
        .then((res) => {
            if (res.status === 200) {
                resetForm();
                alertSuccess();
            } else {
                throw new Error('test');
            }
        })
        .catch(() => {
            setError('Error, please try again or contact Toni with the details on this page');
        });
};

export default sendFormData;
