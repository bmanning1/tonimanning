import React from 'react';
import { FormHelperText, InputLabel, Select } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { StyledFormControl, StyledMenuItem } from './styles';
import schema from '../../utils/schema';

const SelectInput = ({ name, label, options, control, error }) => {
    const shrinkOnErrorProps = error ? { shrink: true } : {};

    return (
        <StyledFormControl error={!!error}>
            <InputLabel {...shrinkOnErrorProps}>
                {label}
            </InputLabel>

            <Controller
                as={(
                    <Select>
                        {options.map((option, i) => (
                            <StyledMenuItem key={`${name}-${i}`} value={option}>
                                {option}
                            </StyledMenuItem>
                        ))}
                    </Select>
                )}
                name={name}
                control={control}
                rules={schema[name]}
            />

            {!!error && <FormHelperText>{error.message}</FormHelperText>}
        </StyledFormControl>
    );
};

export default SelectInput;
