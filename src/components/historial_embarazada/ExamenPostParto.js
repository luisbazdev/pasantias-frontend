import { TextField, Divider } from '@mui/material';

export default function ExamenPostParto({
    examen_post_parto_estado_general,
    examen_post_parto_flujo,
    examen_post_parto_genitales_externos,
}){
    return (
        <div className="flex_col gap_sm">
            <h2>Examen post-parto</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Estado general" value={examen_post_parto_estado_general} variant="filled"/>
                <TextField fullWidth label="Flujo" value={examen_post_parto_flujo} variant="filled"/>
                <TextField fullWidth label="Genitales externos" value={examen_post_parto_genitales_externos} variant="filled"/>
            </div>
        </div>
    )
}