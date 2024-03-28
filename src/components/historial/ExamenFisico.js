import { TextField, Divider } from '@mui/material';

export default function ExamenFisico({
    examen_fisico_talla,
    examen_fisico_peso_previo,
    examen_fisico_aspecto_general,
    examen_fisico_edemas,
    examen_fisico_piel,
    examen_fisico_senos,
    examen_fisico_sistema_nervioso,
    examen_fisico_abdomen,
    examen_fisico_aparato_digestivo,
    examen_fisico_vulva_y_perine,
    examen_fisico_aparato_circulatorio,
    examen_fisico_vagina,
    examen_fisico_aparato_respiratorio,
    examen_fisico_cuello,
    examen_fisico_rx_pulmonar,
    examen_fisico_cuerpo_uterino,
    examen_fisico_aparato_urinario,
    examen_fisico_aparato_locomotor,
    examen_fisico_sistema_ganglionar,
    examen_fisico_varices,
    examen_fisico_otros,
}){
    return (
        <div className="flex_col examen_fisico gap_sm">
            <h2>Examen fisico</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Talla" value={examen_fisico_talla} variant="filled"/>
                <TextField fullWidth label="Peso previo" value={examen_fisico_peso_previo} variant="filled"/>
            </div>
            <div className="grid gap_xs">
            <TextField fullWidth label="Aspecto general" value={examen_fisico_aspecto_general} variant="filled"/>
            <TextField fullWidth label="Edemas" value={examen_fisico_edemas} variant="filled"/>
            <TextField fullWidth label="Piel" value={examen_fisico_piel} variant="filled"/>
            <TextField fullWidth label="Senos" value={examen_fisico_senos} variant="filled"/>
            <TextField fullWidth label="Sistema nervioso" value={examen_fisico_sistema_nervioso} variant="filled"/>
            <TextField fullWidth label="Abdomen" value={examen_fisico_abdomen} variant="filled"/>
            <TextField fullWidth label="Aparato digestivo" value={examen_fisico_aparato_digestivo} variant="filled"/>
            <TextField fullWidth label="Vulva y perine" value={examen_fisico_vulva_y_perine} variant="filled"/>
            <TextField fullWidth label="Aparato circulatorio" value={examen_fisico_aparato_circulatorio} variant="filled"/>
            <TextField fullWidth label="Vagina" value={examen_fisico_vagina} variant="filled"/>
            <TextField fullWidth label="Aparato respiratorio" value={examen_fisico_aparato_respiratorio} variant="filled"/>
            <TextField fullWidth label="Cuello" value={examen_fisico_cuello} variant="filled"/>
            <TextField fullWidth label="Rx Pulmonar" value={examen_fisico_rx_pulmonar} variant="filled"/>
            <TextField fullWidth label="Cuerpo uterino" value={examen_fisico_cuerpo_uterino} variant="filled"/>
            <TextField fullWidth label="Aparato urinario" value={examen_fisico_aparato_urinario} variant="filled"/>
            <TextField fullWidth label="Anexos" variant="filled"/>
            <TextField fullWidth label="Aparato locomotor" value={examen_fisico_aparato_locomotor} variant="filled"/>
            <TextField fullWidth label="Sistema ganglionar" value={examen_fisico_sistema_ganglionar} variant="filled"/>
            <TextField fullWidth label="Varices" value={examen_fisico_varices} variant="filled"/>
            <TextField fullWidth label="Otros" value={examen_fisico_otros} variant="filled"/>
            </div>
        </div>
    )
}