import { TextField } from '@mui/material';

export default function Hematologia(){
    return (
        <div className="grid hematologia gap_xs">
            <TextField fullWidth label="Globulos rojos" variant="filled"/>
            <TextField fullWidth label="Globulos blancos" variant="filled"/>
            <TextField fullWidth label="Hb." variant="filled"/>
            <TextField fullWidth label="Hematocrito" variant="filled"/>
            <TextField fullWidth label="V.C.M" variant="filled"/>
        </div>
    )
}