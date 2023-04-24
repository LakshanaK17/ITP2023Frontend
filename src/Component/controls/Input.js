import React from 'react'
import { TextField } from '@mui/material';

export default function Input(props) {

    const { name, label, value,error=null, onChange,type,min,max } = props;
    return (
        <div style={{margin:"8px" ,width:"100%"}}>
                        <label>{label}</label>

            <TextField
             min={min? min:''}
             max={max? max:""}
            variant="outlined"
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            fullWidth
           
            {...(error && {error:true,helperText:error})}
            
        />
        </div>
    )
}
