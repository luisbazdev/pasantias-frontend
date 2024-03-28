import { TextField, Divider } from '@mui/material';

export default function Gesta({
    nombre_medico,
    registro_mpps,
}){
    return (
        <div className="flex_col gap_sm">
            <h2>Gesta</h2>
            <Divider/>
            <div className="grid gesta gap_xs">
                <TextField fullWidth label="Nombre y apellido del medico" value={nombre_medico} variant="filled"/>
                <TextField fullWidth label="Registro MPPS" value={registro_mpps} variant="filled"/>
            </div>
        </div>
    )
}