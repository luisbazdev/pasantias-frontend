import "./Historial.css"
import AntecedentesFamiliares from "./historial/AntecedentesFamiliares";
import AntecedentesObstetricos from "./historial/AntecedentesObstetricos";
import AntecedentesQuirurgicos from "./historial/AntecedentesQuirurgicos";
import DatosMentruales from "./historial/DatosMenstruales";
import EmbarazoActual from "./historial/EmbarazoActual";
import ExamenFisico from "./historial/ExamenFisico";
import Gesta from "./historial/Gesta";
import HistoriaMedicaPasada from "./historial/HistoriaMedicaPasada";
import HistoriaObstetrica from "./historial/HistoriaObstetrica";

export default function Historial(){
    return (
        <div className="flex_col gap_lg padding_lg">
            <HistoriaObstetrica/>
            <AntecedentesFamiliares/>
            <DatosMentruales/>
            <HistoriaMedicaPasada/>
            <AntecedentesQuirurgicos/>
            <EmbarazoActual/>
            <Gesta/>
            <AntecedentesObstetricos/>
            <ExamenFisico/>
        </div>
    )
}