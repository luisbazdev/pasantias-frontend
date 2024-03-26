import { Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExamenObstetrico from './ExamenObstetrico';

export default function ExamenesObstetricos(){
    return (
        <div className="flex_col gap_sm">
            <h2>Examenes obstetricos</h2>
            <Divider/>
            <div className="flex_col gap_xs">
                <ExamenObstetrico/>
            </div>
           <Button variant="outlined" startIcon={<DeleteIcon />}>
                Añadir examen obstetrico
            </Button>
        </div>
    )
}