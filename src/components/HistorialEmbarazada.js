"use client";
import { useEffect, useState } from "react"
import ExamenPostParto from "./historial_embarazada/ExamenPostParto"
import ExamenesObstetricos from "./historial_embarazada/ExamenesObstetricos"
import Hematologias from "./historial_embarazada/Hematologias"
import Parto from "./historial_embarazada/Parto"
import Pelvimetria from "./historial_embarazada/Pelvimetria"
import PisoPelvico from "./historial_embarazada/PisoPelvico"
import Radiologia from "./historial_embarazada/Radiologia"
import RecienNacido from "./historial_embarazada/RecienNacido"
import ReferidaA from "./historial_embarazada/ReferidaA"

export default function HistorialEmbarazada({
    hematologias,
  examenes_obstetricos,
  pelvimetria_biisquiatico,
  pelvimetria_sagital_anterior,
  pelvimetria_promontorio,
  pelvimetria_muescas_sacrociaticas,
  pelvimetria_espinas_ciaticas,
  pelvimetria_arco_pubico,
  pelvimetria_sacro,
  radiologia,
  parto_fecha,
  parto_hora,
  parto_hospitalizada_en,
  parto_dias_hospitalizada,
  parto_duracion_del_trabajo,
  parto_tipo_de_parto,
  parto_lesion_perineal,
  parto_hemorragia,
  parto_puerperio,
  recien_nacido_peso,
  recien_nacido_sexo,
  recien_nacido_talla,
  recien_nacido_observaciones,
  examen_post_parto_estado_general,
  examen_post_parto_flujo,
  examen_post_parto_genitales_externos,
  examen_post_parto_piso_pelvico_firma,
  examen_post_parto_piso_pelvico_relajado,
  examen_post_parto_piso_pelvico_cistocele,
  examen_post_parto_piso_pelvico_rectocele,
  examen_post_parto_desgarros,
  examen_post_parto_tacto,
  examen_post_parto_especulo,
  examen_post_parto_observaciones,
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
  createdAt,
  updatedAt,
}){
    const [_pelvimetria_biisquiatico, setPelvimetria_biisquiatico] = useState(pelvimetria_biisquiatico);
    const [_pelvimetria_sagital_anterior, setPelvimetria_sagital_anterior] = useState(pelvimetria_sagital_anterior);

    const onPelvimetriaBiisquiaticoChange = (e) => (setPelvimetria_biisquiatico(e.target.value)); 
    const onPelvimetriaSagitalAnteriorChange = (e) => (setPelvimetria_sagital_anterior(e.target.value)); 

    return (
        <div className="flex_col gap_lg padding_lg">
            <Hematologias hematologias={hematologias}/>
            <Pelvimetria
                pelvimetria_biisquiatico={_pelvimetria_biisquiatico}
                pelvimetria_sagital_anterior={_pelvimetria_sagital_anterior}
                pelvimetria_promontorio={pelvimetria_promontorio}
                pelvimetria_muescas_sacrociaticas={pelvimetria_muescas_sacrociaticas}
                pelvimetria_espinas_ciaticas={pelvimetria_espinas_ciaticas}
                pelvimetria_arco_pubico={pelvimetria_arco_pubico}
                pelvimetria_sacro={pelvimetria_sacro}
                onPelvimetriaBiisquiaticoChange={onPelvimetriaBiisquiaticoChange}
                onPelvimetriaSagitalAnteriorChange={onPelvimetriaSagitalAnteriorChange}
            />
            <Radiologia radiologia={radiologia}/>
            <Parto
                parto_fecha={parto_fecha}
                parto_hora={parto_hora}
                parto_hospitalizada_en={parto_hospitalizada_en}
                parto_dias_hospitalizada={parto_dias_hospitalizada}
                parto_duracion_del_trabajo={parto_duracion_del_trabajo}
                parto_tipo_de_parto={parto_tipo_de_parto}
                parto_lesion_perineal={parto_lesion_perineal}
                parto_hemorragia={parto_hemorragia}
                parto_puerperio={parto_puerperio}
            />
            <RecienNacido
                    recien_nacido_peso={recien_nacido_peso}
                    recien_nacido_sexo={recien_nacido_sexo}
                    recien_nacido_talla={recien_nacido_talla}
                    recien_nacido_observaciones={recien_nacido_observaciones}
            />
            <ExamenPostParto
              examen_post_parto_estado_general={examen_post_parto_estado_general}
              examen_post_parto_flujo={examen_post_parto_flujo}
              examen_post_parto_genitales_externos={examen_post_parto_genitales_externos}
            />
            <PisoPelvico
            examen_post_parto_piso_pelvico_firma={examen_post_parto_piso_pelvico_firma}
            examen_post_parto_piso_pelvico_relajado={examen_post_parto_piso_pelvico_relajado}
            examen_post_parto_piso_pelvico_cistocele={examen_post_parto_piso_pelvico_cistocele}
            examen_post_parto_piso_pelvico_rectocele={examen_post_parto_piso_pelvico_rectocele}
            examen_post_parto_desgarros={examen_post_parto_desgarros}
            examen_post_parto_tacto={examen_post_parto_tacto}
            examen_post_parto_especulo={examen_post_parto_especulo}
            examen_post_parto_observaciones={examen_post_parto_observaciones}
            />
            <ExamenesObstetricos examenes_obstetricos={examenes_obstetricos}/>
            <ReferidaA
            referida_a_servicio_social={referida_a_servicio_social}
            referida_a_servicio_social_fecha={referida_a_servicio_social_fecha}
            referida_a_servicio_social_resultado={referida_a_servicio_social_resultado}
            referida_a_servicio_cardiologia={referida_a_servicio_cardiologia}
            referida_a_servicio_cardiologia_fecha={referida_a_servicio_cardiologia_fecha}
            referida_a_servicio_cardiologia_resultado={referida_a_servicio_cardiologia_resultado}
            referida_a_servicio_odontologia={referida_a_servicio_odontologia}
            referida_a_servicio_odontologia_fecha={referida_a_servicio_odontologia_fecha}
            referida_a_servicio_odontologia_resultado={referida_a_servicio_odontologia_resultado}
            referida_a_servicio_oftalmologia={referida_a_servicio_oftalmologia}
            referida_a_servicio_oftalmologia_fecha={referida_a_servicio_oftalmologia_fecha}
            referida_a_servicio_oftalmologia_resultado={referida_a_servicio_oftalmologia_resultado}
            referida_a_servicio_medicina_interna={referida_a_servicio_medicina_interna}
            referida_a_servicio_medicina_interna_fecha={referida_a_servicio_medicina_interna_fecha}
            referida_a_servicio_medicina_interna_resultado={referida_a_servicio_medicina_interna_resultado}
            referida_a_servicio_reumatologia={referida_a_servicio_reumatologia}
            referida_a_servicio_reumatologia_fecha={referida_a_servicio_reumatologia_fecha}
            referida_a_servicio_reumatologia_resultado={referida_a_servicio_reumatologia_resultado}
            />
        </div>
    )
}