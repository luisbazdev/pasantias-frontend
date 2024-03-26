import { TextField, Divider } from '@mui/material';

export default function Pelvimetria(){
    return (
        <div className="flex_col pelvimetria gap_sm">
            <h2>Pelvimetria (estrecho inferior)</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Bi-isquiatico" variant="filled"/>
                <TextField fullWidth label="Sagital anterior" variant="filled"/>
                <TextField fullWidth label="Promontorio" variant="filled"/>
                <TextField fullWidth label="Muescas sacrociaticas" variant="filled"/>
                <TextField fullWidth label="Espinas ciaticas" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Arco pubico" variant="filled"/>
                <TextField fullWidth label="Sacro" variant="filled"/>
            </div>
        </div>
    )
}