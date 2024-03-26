import { TextField, Divider } from '@mui/material';

export default function ExamenObstetrico(){
    return (
        <div className="flex_col examen_obstetrico gap_sm">
            <div className="grid gap_xs">
                <TextField fullWidth label="Fecha" variant="filled"/>
                <TextField fullWidth label="Nauseas/Vomitos" variant="filled"/>
                <TextField fullWidth label="Constipacion" variant="filled"/>
                <TextField fullWidth label="Algias" variant="filled"/>
                <TextField fullWidth label="Calambres" variant="filled"/>
                <TextField fullWidth label="Varices" variant="filled"/>
                <TextField fullWidth label="Insomnio" variant="filled"/>
                <TextField fullWidth label="Cefalea" variant="filled"/>
                <TextField fullWidth label="Edemas" variant="filled"/>
                <TextField fullWidth label="Peso" variant="filled"/>
            </div>
            <h4>Orina</h4>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="A" variant="filled"/>
                <TextField fullWidth label="G" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="T.A." variant="filled"/>
                <TextField fullWidth label="Altura uterina" variant="filled"/>
                <TextField fullWidth label="Presentacion" variant="filled"/>
                <TextField fullWidth label="Foco fetal" variant="filled"/>
                <TextField fullWidth label="Hemorragias extra-genitales" variant="filled"/>
            </div>
            <div>
                <TextField fullWidth label="Firma/Registro MPPS" variant="filled"/>
            </div>
        </div>
    )
}