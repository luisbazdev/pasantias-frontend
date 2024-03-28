import Referencia from "./Referencia";

export default function ReferidaA({
    referida_a_servicio_social,
  referida_a_servicio_social_fecha,
  referida_a_servicio_social_resultado,
  referida_a_servicio_cardiologia,
  referida_a_servicio_cardiologia_fecha,
  referida_a_servicio_cardiologia_resultado,
  referida_a_servicio_odontologia,
  referida_a_servicio_odontologia_fecha,
  referida_a_servicio_odontologia_resultado,
  referida_a_servicio_oftalmologia,
  referida_a_servicio_oftalmologia_fecha,
  referida_a_servicio_oftalmologia_resultado,
  referida_a_servicio_medicina_interna,
  referida_a_servicio_medicina_interna_fecha,
  referida_a_servicio_medicina_interna_resultado,
  referida_a_servicio_reumatologia,
  referida_a_servicio_reumatologia_fecha,
  referida_a_servicio_reumatologia_resultado,
}){
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