import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material';

export default function Select(props) {

    const { name, label, value,error=null, onChange, options } = props;

    return (
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                sx={{width:"500px",
                margin:"4px 5px"}}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item._id} value={item.name}>{item.name  } -   {item.type && item.type} </MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
