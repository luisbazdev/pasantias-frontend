import { TextField, Divider } from '@mui/material';

export default function ExamenPostParto(){
    return (
        <div className="flex_col gap_sm">
            <h2>Examen post-parto</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Estado general" variant="filled"/>
                <TextField fullWidth label="Flujo" variant="filled"/>
                <TextField fullWidth label="Genitales externos" variant="filled"/>
            </div>
        </div>
    )
}