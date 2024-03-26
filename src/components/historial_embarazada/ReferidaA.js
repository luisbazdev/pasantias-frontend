import Referencia from "./Referencia";

export default function ReferidaA(){
    return (
        <div className="grid gap_sm">
            <Referencia refer="Servicio social"/>
            <Referencia refer="Cardiologia"/>
            <Referencia refer="Odontologia"/>
            <Referencia refer="Oftalmologia"/>
            <Referencia refer="Medicina interna"/>
            <Referencia refer="Reumatologia"/>
        </div>
    )
}