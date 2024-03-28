import { TextField, Divider } from '@mui/material';

export default function AntecedentesQuirurgicos({antecedentes_quirurgicos}){
    return (
        <div className="flex_col gap_sm">
            <h2>Antecedentes quirurgicos</h2>
            <Divider/>
            <div className="antecedentes_quirurgicos">
                <TextField fullWidth label="Antecedentes quirurgicos" value={antecedentes_quirurgicos} variant="filled"/>
            </div>
        </div>
    )
}