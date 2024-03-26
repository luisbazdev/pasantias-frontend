import { FormControlLabel, Switch, Divider } from '@mui/material';

export default function AntecedentesFamiliares(){
    return (
        <div className="flex_col gap_sm">
            <h2>Antecedentes familiares</h2>
            <Divider/>
            <div className="antecedentes_familiares">
                <FormControlLabel control={<Switch />} label="TBC" />
                <FormControlLabel control={<Switch />} label="Sifilis" />
                <FormControlLabel control={<Switch />} label="Diabetes" />
                <FormControlLabel control={<Switch />} label="Cancer" />
                <FormControlLabel control={<Switch />} label="Neurologicas y mentales" />
                <FormControlLabel control={<Switch />} label="Cardiopatias" />
                <FormControlLabel control={<Switch />} label="Nefritis" />
                <FormControlLabel control={<Switch />} label="Embarazos multiples" />
            </div>
        </div>
    )
}