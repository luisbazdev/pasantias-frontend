import { TextField, Divider } from '@mui/material';

export default function EmbarazoActual(){
    return (
        <div className='flex_col gap_sm'>
            <h2>Antecedentes quirurgicos</h2>
            <Divider/>
            <div className="grid embarazo_actual gap_xs">
                <TextField fullWidth label="Ultimo periodo menstrual" variant="filled"/>
                <TextField fullWidth label="Caracteres" variant="filled"/>
                <TextField fullWidth label="Primeros movimientos activos" variant="filled"/>
                <TextField fullWidth label="Fecha probable del parto" variant="filled"/>
                <TextField fullWidth label="Reposo pre-natal desde" variant="filled"/>
            </div>
        </div>
    )
}