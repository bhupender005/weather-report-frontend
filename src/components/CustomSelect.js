import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';

const CustomSelect = props => {
    const {selectedValue: value, handleChange, options, label: inputLabel} = props;

    return (
        <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    style={{width: 200}}
                >
                    {options.map(({value, label}, i) => <MenuItem value={value} key={i}>{label}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
};

export default CustomSelect;