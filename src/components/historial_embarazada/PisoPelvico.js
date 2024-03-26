import { TextField, Divider } from '@mui/material';

export default function PisoPelvico(){
    return (
        <div className="flex_col piso_pelvico gap_sm">
            <h2>Piso pelvico</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Firma" variant="filled"/>
                <TextField fullWidth label="Relajado" variant="filled"/>
                <TextField fullWidth label="Cistocele" variant="filled"/>
                <TextField fullWidth label="Rectocele" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Desgarro" variant="filled"/>
                <TextField fullWidth label="Tacto" variant="filled"/>
                <TextField fullWidth label="Especulo" variant="filled"/>
                <TextField fullWidth label="Observaciones" variant="filled"/>
            </div>
        </div>
    )
}