import { FormControlLabel, Switch, TextField } from '@mui/material';

export default function Referencia({refer}){
    return (
        <div className="grid referencia gap_xs">
            <FormControlLabel control={<Switch defaultChecked />} label={refer} labelPlacement="top" />
            <TextField fullWidth label="Fecha" variant="filled"/>
            <TextField fullWidth label="Resultado" variant="filled"/>
        </div>
    )
}