const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdW3mZBm-pMc9hD3HZqSQdEEx5SV0O4cQ0YjAUwp-nLtWNkpQ/formResponse';

// const proxyURL = 'https://cors-anywhere.herokuapp.com'; // Proxy for testing as the one below whitelists domains
const proxyURL = 'https://bm-cors-proxy.herokuapp.com';

// NOTE: Get googleID values from submitting the form and checking the request
const googleIDs = {
    name: 'entry.758967776',
    email: 'entry.1264703845',
    phone: 'entry.1775748061',
    booking: 'entry.770141734',
    message: 'entry.100639756'
};

const sendFormData = ({ data, resetForm, alertSuccess, setError }) => {
    // GET works but shouldn't be used as it's bad to send data in URL
    // ************************** GET **************************
    // const formURLQuery = [];
    // Object.entries(googleIDs).forEach(([entry, googleID]) => {
    //     formURLQuery.push(`${googleID}=${data[entry]}`);
    // });
    // const formConfig = {
    //     method: 'GET',
    //     headers: {
    //         'X-Requested-With': 'https://docs.google.com',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // };
    // fetch(`${proxyURL}/${formURL}?${formURLQuery.join('&')}`, formConfig)
    // ************************** GET **************************

    // POST does not work for some reason but works on POSTMAN
    // ************************** POST **************************
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
    // ************************** POST **************************
        .then((res) => {
            console.log(111111111, res);
            if (res.status === 200) {
                resetForm();
                alertSuccess();
            } else {
                throw new Error();
            }
        })
        .catch(() => {
            setError('ERROR Please try again or contact Toni with the details on this page');
        });
};

export default sendFormData;
