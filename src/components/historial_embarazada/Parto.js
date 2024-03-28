import { TextField, Divider } from '@mui/material';

export default function Parto({
    parto_fecha,
  parto_hora,
  parto_hospitalizada_en,
  parto_dias_hospitalizada,
  parto_duracion_del_trabajo,
  parto_tipo_de_parto,
  parto_lesion_perineal,
  parto_hemorragia,
  parto_puerperio,
}){
    return (
        <div className="flex_col parto gap_sm">
            <h2>Parto</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Fecha" value={parto_fecha} variant="filled"/>
                <TextField fullWidth label="Hora" value={parto_hora} variant="filled"/>
                <TextField fullWidth label="Hospitalizada en" value={parto_hospitalizada_en} variant="filled"/>
                <TextField fullWidth label="Dias hospitalizada" value={parto_dias_hospitalizada} variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Duracion del trabajo" value={parto_duracion_del_trabajo} variant="filled"/>
                <TextField fullWidth label="Tipo de parto" value={parto_tipo_de_parto} variant="filled"/>
                <TextField fullWidth label="Lesion perineal" value={parto_lesion_perineal} variant="filled"/>
                <TextField fullWidth label="Hemorragia" value={parto_hemorragia} variant="filled"/>
            </div>
            <div>
                <TextField fullWidth label="Puerperio" value={parto_puerperio} variant="filled"/>
            </div>
        </div>
    )
}