// eslint-disable-next-line max-len
const formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSep9_wZpXMAtFmsyfrKkGYpBwWqOhVRnY6zVZ0E7-ErrggEow/formResponse';

// NOTE: bm-cors-proxy whitelists urls so cannot be used locally
const proxyURL = process.env.REACT_APP_ENV === 'local'
    ? 'https://cors-anywhere.herokuapp.com'
    : 'https://bm-cors-proxy.herokuapp.com';

// NOTE: Get googleID values from submitting the form and checking the request
const googleIDs = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1065046570',
    booking: 'entry.1166974658',
    message: 'entry.839337160'
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
