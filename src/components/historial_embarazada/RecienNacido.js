import { TextField, Divider } from '@mui/material';

export default function RecienNacido(){
    return (
        <div className="flex_col gap_sm">
            <h2>Recien nacido</h2>
            <Divider/>
            <div className='grid recien_nacido gap_xs'>
                <TextField fullWidth label="Peso" variant="filled"/>
                <TextField fullWidth label="Sexo" variant="filled"/>
                <TextField fullWidth label="Talla" variant="filled"/>
                <TextField fullWidth label="Observaciones" variant="filled"/>
            </div>
        </div>
    )
}