import ExamenPostParto from "./historial_embarazada/ExamenPostParto"
import ExamenesObstetricos from "./historial_embarazada/ExamenesObstetricos"
import Hematologias from "./historial_embarazada/Hematologias"
import Parto from "./historial_embarazada/Parto"
import Pelvimetria from "./historial_embarazada/Pelvimetria"
import PisoPelvico from "./historial_embarazada/PisoPelvico"
import Radiologia from "./historial_embarazada/Radiologia"
import RecienNacido from "./historial_embarazada/RecienNacido"
import ReferidaA from "./historial_embarazada/ReferidaA"

export default function HistorialEmbarazada(){
    return (
        <div className="flex_col gap_lg padding_lg">
            <Hematologias/>
            <Pelvimetria/>
            <Radiologia/>
            <Parto/>
            <RecienNacido/>
            <ExamenPostParto/>
            <PisoPelvico/>
            <ExamenesObstetricos/>
            <ReferidaA/>
        </div>
    )
}