import { TextField, Divider } from '@mui/material';

export default function DatosMentruales({
    datos_menstruales_edad_menarquia,
  datos_menstruales_ciclo,
  datos_menstruales_duracion,
  datos_menstruales_cantidad,
  datos_menstruales_dolor,
}){
    return (
        <div className="flex_col gap_sm">
            <h2>Datos menstruales</h2>
            <Divider/>
            <div className="datos_menstruales grid gap_xs">
                <TextField fullWidth label="Menarquia (edad)" value={datos_menstruales_edad_menarquia} variant="filled"/>
                <TextField fullWidth label="Ciclo" value={datos_menstruales_ciclo} variant="filled"/>
                <TextField fullWidth label="Duracion" value={datos_menstruales_duracion} variant="filled"/>
                <TextField fullWidth label="Cantidad" value={datos_menstruales_cantidad} variant="filled"/>
                <TextField fullWidth label="Dolor" value={datos_menstruales_dolor} variant="filled"/>
            </div>
        </div>  
    )
}