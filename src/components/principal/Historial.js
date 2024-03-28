import { Avatar } from "@mui/material";

export default function Historial(){
    return (
        <div className="flex historial_card gap_sm">
            <div>
                <Avatar>M</Avatar>
            </div>
            <div className="flex_col">
                <p className="historial_card_paciente">Maria Chiquinquira Baez Guerra, V29853081</p>
                <p className="historial_card_fecha">29 de Enero de 2024</p>
            </div>
        </div>
    )
}