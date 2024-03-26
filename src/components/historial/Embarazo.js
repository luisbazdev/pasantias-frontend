import { TextField } from '@mui/material';

export default function Embarazo(){
    return (
        <div className="grid embarazo gap_xs">
            <TextField fullWidth label="Año" variant="filled"/>
            <TextField fullWidth label="Tipo de parto" variant="filled"/>
            <TextField fullWidth label="Tiempo de trabajo" variant="filled"/>
            <TextField fullWidth label="Hemorragia" variant="filled"/>
            <TextField fullWidth label="Lesion perineal" variant="filled"/>
            <TextField fullWidth label="Toxemia" variant="filled"/>
            <TextField fullWidth label="Puerperio" variant="filled"/>
            <TextField fullWidth label="Peso del niño" variant="filled"/>
            <TextField fullWidth label="Vivo o muerto" variant="filled"/>
            <TextField fullWidth label="Sexo" variant="filled"/>
            <TextField fullWidth label="Observaciones" variant="filled"/>
        </div>
    )
}