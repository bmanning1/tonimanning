import React from 'react';
import { StyledTextField } from './styles';
import schema from '../../utils/schema';

const Input = ({
    name,
    multiline,
    error,
    register,
    ...props
}) => {
    const multilineProps = multiline ? { multiline, rows: 6 } : {};
    const shrinkOnErrorProps = error ? { InputLabelProps: { shrink: true } } : {};

    return (
        <StyledTextField
            name={name}
            inputRef={register(schema[name])}
            helperText={error && error.message}
            error={!!error}
            {...props}
            {...multilineProps}
            {...shrinkOnErrorProps}
        />
    );
};

export default Input;
