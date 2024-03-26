import { TextField, Divider } from '@mui/material';

export default function Radiologia(){
    return (
        <div className="flex_col gap_sm">
            <h2>Radiologia</h2>
            <Divider/>
            <div>
                <TextField fullWidth label="Radiologia" variant="filled"/>
            </div>
        </div>
    )
}