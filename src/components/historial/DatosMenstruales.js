import { TextField, Divider } from '@mui/material';

export default function DatosMentruales(){
    return (
        <div className="flex_col gap_sm">
            <h2>Datos menstruales</h2>
            <Divider/>
            <div className="datos_menstruales grid gap_xs">
                <TextField fullWidth label="Menarquia (edad)" variant="filled"/>
                <TextField fullWidth label="Ciclo" variant="filled"/>
                <TextField fullWidth label="Duracion" variant="filled"/>
                <TextField fullWidth label="Cantidad" variant="filled"/>
                <TextField fullWidth label="Dolor" variant="filled"/>
            </div>
        </div>  
    )
}