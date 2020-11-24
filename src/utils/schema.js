const required = {
    value: true,
    message: 'This field is required'
};

const max = (value) => ({
    value,
    message: `Must be below ${value} characters`
});

const schema = {
    name: {
        required,
        maxLength: max(50)
    },
    email: {
        required,
        pattern: {
            value: /^\S+@\S+$/i,
            message: 'Must be a valid email'
        },
        maxLength: max(100)
    },
    phone: {
        required,
        pattern: {
            value: /^\+?[ 0-9()-]{8,15}$/,
            message: 'Must be a valid phone number'
        }
    },
    booking: {
        required
    },
    message: {
        required,
        maxLength: max(500)
    }
};

export default schema;
