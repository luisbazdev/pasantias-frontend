import { Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Hematologia from './Hematologia';

export default function Hematologias({hematologias}){
    return (
        <div className="flex_col gap_sm">
            <h2>Hematologias</h2>
            <Divider/>
            <div>
                <Hematologia/>
            </div>
           <Button variant="outlined" startIcon={<DeleteIcon />}>
                Añadir hematologia
            </Button>
        </div>
    )
}