import { TextField, Divider } from '@mui/material';

export default function Parto(){
    return (
        <div className="flex_col parto gap_sm">
            <h2>Parto</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Fecha" variant="filled"/>
                <TextField fullWidth label="Hora" variant="filled"/>
                <TextField fullWidth label="Hospitalizada en" variant="filled"/>
                <TextField fullWidth label="Dias hospitalizada" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Duracion del trabajo" variant="filled"/>
                <TextField fullWidth label="Tipo de parto" variant="filled"/>
                <TextField fullWidth label="Lesion perineal" variant="filled"/>
                <TextField fullWidth label="Hemorragia" variant="filled"/>
            </div>
            <div>
                <TextField fullWidth label="Puerperio" variant="filled"/>
            </div>
        </div>
    )
}