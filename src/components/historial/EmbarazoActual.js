import { TextField, Divider } from '@mui/material';

export default function EmbarazoActual({
    embarazo_actual_ultimo_periodo,
    embarazo_actual_caracteres,
    embarazo_actual_primeros_movimientos,
    embarazo_actual_fecha_parto_probable,
    embarazo_actual_reposo_prenatal_desde,
}){
    return (
        <div className='flex_col gap_sm'>
            <h2>Antecedentes quirurgicos</h2>
            <Divider/>
            <div className="grid embarazo_actual gap_xs">
                <TextField fullWidth label="Ultimo periodo menstrual" value={embarazo_actual_ultimo_periodo} variant="filled"/>
                <TextField fullWidth label="Caracteres" value={embarazo_actual_caracteres} variant="filled"/>
                <TextField fullWidth label="Primeros movimientos activos" value={embarazo_actual_primeros_movimientos} variant="filled"/>
                <TextField fullWidth label="Fecha probable del parto" value={embarazo_actual_fecha_parto_probable} variant="filled"/>
                <TextField fullWidth label="Reposo pre-natal desde" value={embarazo_actual_reposo_prenatal_desde} variant="filled"/>
            </div>
        </div>
    )
}