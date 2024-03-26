import { Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Embarazo from './Embarazo';
export default function AntecedentesObstetricos(){
    // si estas visualizando uno hecho, enviar peticion
    // si estas creando un historial nuevo, solo guardarlo
    return (
        <div className="flex_col gap_sm">
            <h2>Antecedentes obstetricos</h2>
            <Divider/>
            <div className="flex_col gap">
                <Embarazo/>
                <Embarazo/>
                <Embarazo/>
            </div>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Añadir embarazo
            </Button>
        </div>
    )
}