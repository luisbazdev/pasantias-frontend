import { TextField, Divider } from '@mui/material';

export default function HistoriaMedicaPasada(){
    return (
        <div className="flex_col gap_sm">
            <h2>Historia medica pasada</h2>
            <Divider/>
            <div className="historia_medica_pasada grid gap_xs">
                <TextField fullWidth label="Eruptivas" variant="filled"/>
                <TextField fullWidth label="Buba" variant="filled"/>
                <TextField fullWidth label="Cardiopatias" variant="filled"/>
                <TextField fullWidth label="Toxemias" variant="filled"/>
                <TextField fullWidth label="Mastitis" variant="filled"/>
                <TextField fullWidth label="Transfusiones" variant="filled"/>
                <TextField fullWidth label="Rubeola" variant="filled"/>
                <TextField fullWidth label="Chagas" variant="filled"/>
                <TextField fullWidth label="TBC" variant="filled"/>
                <TextField fullWidth label="Varices" variant="filled"/>
                <TextField fullWidth label="Heridas" variant="filled"/>
                <TextField fullWidth label="Alergias" variant="filled"/>
                <TextField fullWidth label="Parasitosis" variant="filled"/>
                <TextField fullWidth label="Toxoplasmosis" variant="filled"/>
                <TextField fullWidth label="Diabetes" variant="filled"/>
                <TextField fullWidth label="Hemorroides" variant="filled"/>
                <TextField fullWidth label="Cicactrices" variant="filled"/>
                <TextField fullWidth label="Sulfonamidas" variant="filled"/>
                <TextField fullWidth label="Bilharziosis" variant="filled"/>
                <TextField fullWidth label="Micosis" variant="filled"/>
                <TextField fullWidth label="Tiroides" variant="filled"/>
                <TextField fullWidth label="Flebitis" variant="filled"/>
                <TextField fullWidth label="Fracturas" variant="filled"/>
                <TextField fullWidth label="Antibioticos" variant="filled"/>
                <TextField fullWidth label="Paludismo" variant="filled"/>
                <TextField fullWidth label="Venereas" variant="filled"/>
                <TextField fullWidth label="Nefropatias" variant="filled"/>
                <TextField fullWidth label="Leucorea" variant="filled"/>
                <TextField fullWidth label="Electrocoagulaciones" variant="filled"/>
                <TextField fullWidth label="Otro" variant="filled"/>
            </div>
        </div>
    )
}