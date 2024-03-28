import { TextField, Divider } from '@mui/material';

export default function RecienNacido({
    recien_nacido_peso,
  recien_nacido_sexo,
  recien_nacido_talla,
  recien_nacido_observaciones,
}){
    return (
        <div className="flex_col gap_sm">
            <h2>Recien nacido</h2>
            <Divider/>
            <div className='grid recien_nacido gap_xs'>
                <TextField fullWidth label="Peso" value={recien_nacido_peso} variant="filled"/>
                <TextField fullWidth label="Sexo" value={recien_nacido_sexo} variant="filled"/>
                <TextField fullWidth label="Talla" value={recien_nacido_talla} variant="filled"/>
                <TextField fullWidth label="Observaciones" value={recien_nacido_observaciones} variant="filled"/>
            </div>
        </div>
    )
}