import { TextField, Divider } from '@mui/material';

export default function Gesta(){
    return (
        <div className="flex_col gap_sm">
            <h2>Gesta</h2>
            <Divider/>
            <div className="grid gesta gap_xs">
                <TextField fullWidth label="Nombre y apellido del medico" variant="filled"/>
                <TextField fullWidth label="Registro MPPS" variant="filled"/>
            </div>
        </div>
    )
}