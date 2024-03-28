import Historial from "./principal/Historial";

export default function Create(){
    // props here and send props down to components
    return (
        <div>
            <button>back</button>
            <Historial/>
            <HistorialEmbarazada/>
            <button>create</button>
        </div>
    )
}