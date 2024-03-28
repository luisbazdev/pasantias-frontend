import Historial from "@/components/Historial";
import HistorialEmbarazada from "@/components/HistorialEmbarazada";

export default function CreatePage() {
  return <div>
    <Historial numero_de_historia="numero de historia" fecha="mi fecha" historia_medica_pasada_otro="just a test :D"/>
    <HistorialEmbarazada pelvimetria_biisquiatico="Un simple dato"/>
  </div>;
}
