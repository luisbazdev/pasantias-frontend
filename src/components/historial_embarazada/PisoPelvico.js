import { TextField, Divider } from '@mui/material';

export default function PisoPelvico({
    examen_post_parto_piso_pelvico_firma,
    examen_post_parto_piso_pelvico_relajado,
    examen_post_parto_piso_pelvico_cistocele,
    examen_post_parto_piso_pelvico_rectocele,
    examen_post_parto_desgarros,
    examen_post_parto_tacto,
    examen_post_parto_especulo,
    examen_post_parto_observaciones,
}){
    return (
        <div className="flex_col piso_pelvico gap_sm">
            <h2>Piso pelvico</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Firma" value={examen_post_parto_piso_pelvico_firma} variant="filled"/>
                <TextField fullWidth label="Relajado" value={examen_post_parto_piso_pelvico_relajado} variant="filled"/>
                <TextField fullWidth label="Cistocele" value={examen_post_parto_piso_pelvico_cistocele} variant="filled"/>
                <TextField fullWidth label="Rectocele" value={examen_post_parto_piso_pelvico_rectocele} variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Desgarro" value={examen_post_parto_desgarros} variant="filled"/>
                <TextField fullWidth label="Tacto" value={examen_post_parto_tacto} variant="filled"/>
                <TextField fullWidth label="Especulo" value={examen_post_parto_especulo} variant="filled"/>
                <TextField fullWidth label="Observaciones" value={examen_post_parto_observaciones} variant="filled"/>
            </div>
        </div>
    )
}