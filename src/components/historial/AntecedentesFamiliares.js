import { FormControlLabel, Switch, Divider } from '@mui/material';

export default function AntecedentesFamiliares({
    antecedentes_familiares_tbc,
  antecedentes_familiares_sifilis,
  antecedentes_familiares_diabetes,
  antecedentes_familiares_neurologicas_y_mentales,
  antecedentes_familiares_cardiopatias,
  antecedentes_familiares_nefritis,
  antecedentes_familiares_embarazos_multiples,
  antecedentes_familiares_otros,
  antecedentes_familiares_cancer,
}){
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