import { Divider } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import Historial from "./Historial";

export default function Historiales(){
    return (
        <div>
            <div className="flex">
                <FolderIcon style={{ color: '#bcbcbc' }}/>
                <h2>Historiales (6)</h2>
            </div>
            <Divider/>
            <div className="historiales_cont">
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
                <Historial/>
            </div>
        </div>
    )
}