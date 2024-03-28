import { TextField, Divider } from '@mui/material';

export default function HistoriaMedicaPasada({
    historia_medica_pasada_eruptivas,
    historia_medica_pasada_buba,
    historia_medica_pasada_cardiopatias,
    historia_medica_pasada_toxemias,
    historia_medica_pasada_mastitis,
    historia_medica_pasada_transfusiones,
    historia_medica_pasada_rubeola,
    historia_medica_pasada_chagas,
    historia_medica_pasada_tbc,
    historia_medica_pasada_varices,
    historia_medica_pasada_heridas,
    historia_medica_pasada_alergias,
    historia_medica_pasada_parasitosis,
    historia_medica_pasada_toxoplasmosis,
    historia_medica_pasada_diabetes,
    historia_medica_pasada_hemorroides,
    historia_medica_pasada_cicatrices,
    historia_medica_pasada_sulfonamidas,
    historia_medica_pasada_bilharziosis,
    historia_medica_pasada_micosis,
    historia_medica_pasada_tiroides,
    historia_medica_pasada_flebitis,
    historia_medica_pasada_fracturas,
    historia_medica_pasada_antibioticos,
    historia_medica_pasada_paludismo,
    historia_medica_pasada_nefropatias,
    historia_medica_pasada_electrocoagulaciones,
    historia_medica_pasada_otro,
}){
    return (
        <div className="flex_col gap_sm">
            <h2>Historia medica pasada</h2>
            <Divider/>
            <div className="historia_medica_pasada grid gap_xs">
                <TextField fullWidth label="Eruptivas" value={historia_medica_pasada_eruptivas} variant="filled"/>
                <TextField fullWidth label="Buba" value={historia_medica_pasada_buba} variant="filled"/>
                <TextField fullWidth label="Cardiopatias" value={historia_medica_pasada_cardiopatias} variant="filled"/>
                <TextField fullWidth label="Toxemias" value={historia_medica_pasada_toxemias} variant="filled"/>
                <TextField fullWidth label="Mastitis" value={historia_medica_pasada_mastitis} variant="filled"/>
                <TextField fullWidth label="Transfusiones" value={historia_medica_pasada_transfusiones} variant="filled"/>
                <TextField fullWidth label="Rubeola" value={historia_medica_pasada_rubeola} variant="filled"/>
                <TextField fullWidth label="Chagas" value={historia_medica_pasada_chagas} variant="filled"/>
                <TextField fullWidth label="TBC" value={historia_medica_pasada_tbc} variant="filled"/>
                <TextField fullWidth label="Varices" value={historia_medica_pasada_varices} variant="filled"/>
                <TextField fullWidth label="Heridas" value={historia_medica_pasada_heridas} variant="filled"/>
                <TextField fullWidth label="Alergias" value={historia_medica_pasada_alergias} variant="filled"/>
                <TextField fullWidth label="Parasitosis" value={historia_medica_pasada_parasitosis} variant="filled"/>
                <TextField fullWidth label="Toxoplasmosis" value={historia_medica_pasada_toxoplasmosis} variant="filled"/>
                <TextField fullWidth label="Diabetes" value={historia_medica_pasada_diabetes} variant="filled"/>
                <TextField fullWidth label="Hemorroides" value={historia_medica_pasada_hemorroides} variant="filled"/>
                <TextField fullWidth label="Cicatrices" value={historia_medica_pasada_cicatrices} variant="filled"/>
                <TextField fullWidth label="Sulfonamidas" value={historia_medica_pasada_sulfonamidas} variant="filled"/>
                <TextField fullWidth label="Bilharziosis" value={historia_medica_pasada_bilharziosis} variant="filled"/>
                <TextField fullWidth label="Micosis" value={historia_medica_pasada_micosis} variant="filled"/>
                <TextField fullWidth label="Tiroides" value={historia_medica_pasada_tiroides} variant="filled"/>
                <TextField fullWidth label="Flebitis" value={historia_medica_pasada_flebitis} variant="filled"/>
                <TextField fullWidth label="Fracturas" value={historia_medica_pasada_fracturas} variant="filled"/>
                <TextField fullWidth label="Antibioticos" value={historia_medica_pasada_antibioticos} variant="filled"/>
                <TextField fullWidth label="Paludismo" value={historia_medica_pasada_paludismo} variant="filled"/>
                <TextField fullWidth label="Venereas" variant="filled"/>
                <TextField fullWidth label="Nefropatias" value={historia_medica_pasada_nefropatias} variant="filled"/>
                <TextField fullWidth label="Leucorea" variant="filled"/>
                <TextField fullWidth label="Electrocoagulaciones" value={historia_medica_pasada_electrocoagulaciones} variant="filled"/>
                <TextField fullWidth label="Otro" value={historia_medica_pasada_otro} variant="filled"/>
            </div>
        </div>
    )
}