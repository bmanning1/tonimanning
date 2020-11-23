// eslint-disable-next-line max-len
const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdW3mZBm-pMc9hD3HZqSQdEEx5SV0O4cQ0YjAUwp-nLtWNkpQ/formResponse';

// NOTE: bm-cors-proxy whitelists urls so cannot be used locally
const proxyURL = process.env.REACT_APP_ENV === 'local'
    ? 'https://cors-anywhere.herokuapp.com'
    : 'https://bm-cors-proxy.herokuapp.com';

// NOTE: Get googleID values from submitting the form and checking the request
const googleIDs = {
    name: 'entry.758967776',
    email: 'entry.1264703845',
    phone: 'entry.1775748061',
    booking: 'entry.770141734',
    message: 'entry.100639756'
};

const sendFormData = async({ data }) => {
    const searchParams = Object.keys(googleIDs)
        .map((key) => (
            `${encodeURIComponent(googleIDs[key])}=${encodeURIComponent(data[key])}`
        ))
        .join('&');

    const formConfig = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'https://docs.google.com',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: searchParams
    };

    return fetch(`${proxyURL}/${formURL}`, formConfig)
        .then((res) => res.status)
        .catch((err) => err.status);
};

export default sendFormData;
