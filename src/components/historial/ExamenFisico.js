import { TextField, Divider } from '@mui/material';

export default function ExamenFisico(){
    return (
        <div className="flex_col examen_fisico gap_sm">
            <h2>Examen fisico</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Talla" variant="filled"/>
                <TextField fullWidth label="Peso previo" variant="filled"/>
            </div>
            <div className="grid gap_xs">
            <TextField fullWidth label="Aspecto general" variant="filled"/>
            <TextField fullWidth label="Edemas" variant="filled"/>
            <TextField fullWidth label="Piel" variant="filled"/>
            <TextField fullWidth label="Senos" variant="filled"/>
            <TextField fullWidth label="Sistema nervioso" variant="filled"/>
            <TextField fullWidth label="Abdomen" variant="filled"/>
            <TextField fullWidth label="Aparato digestivo" variant="filled"/>
            <TextField fullWidth label="Vulva y perine" variant="filled"/>
            <TextField fullWidth label="Aparato circulatorio" variant="filled"/>
            <TextField fullWidth label="Vagina" variant="filled"/>
            <TextField fullWidth label="Aparato respiratorio" variant="filled"/>
            <TextField fullWidth label="Cuello" variant="filled"/>
            <TextField fullWidth label="Rx Pulmonar" variant="filled"/>
            <TextField fullWidth label="Cuerpo uterino" variant="filled"/>
            <TextField fullWidth label="Aparato urinario" variant="filled"/>
            <TextField fullWidth label="Anexos" variant="filled"/>
            <TextField fullWidth label="Aparato locomotor" variant="filled"/>
            <TextField fullWidth label="Sistema ganglionar" variant="filled"/>
            <TextField fullWidth label="Varices" variant="filled"/>
            <TextField fullWidth label="Otros" variant="filled"/>
            </div>
        </div>
    )
}