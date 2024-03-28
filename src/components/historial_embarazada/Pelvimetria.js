import { TextField, Divider } from '@mui/material';

export default function Pelvimetria({
    pelvimetria_biisquiatico,
  pelvimetria_sagital_anterior,
  pelvimetria_promontorio,
  pelvimetria_muescas_sacrociaticas,
  pelvimetria_espinas_ciaticas,
  pelvimetria_arco_pubico,
  pelvimetria_sacro,
  onPelvimetriaBiisquiaticoChange,
  onPelvimetriaSagitalAnteriorChange
}){
    return (
        <div className="flex_col pelvimetria gap_sm">
            <h2>Pelvimetria (estrecho inferior)</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="Bi-isquiatico" value={pelvimetria_biisquiatico} onChange={onPelvimetriaBiisquiaticoChange} variant="filled"/>
                <TextField fullWidth label="Sagital anterior" value={pelvimetria_sagital_anterior} onChange={onPelvimetriaSagitalAnteriorChange} variant="filled"/>
                <TextField fullWidth label="Promontorio" value={pelvimetria_promontorio} variant="filled"/>
                <TextField fullWidth label="Muescas sacrociaticas" value={pelvimetria_muescas_sacrociaticas} variant="filled"/>
                <TextField fullWidth label="Espinas ciaticas" value={pelvimetria_espinas_ciaticas} variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Arco pubico" value={pelvimetria_arco_pubico} variant="filled"/>
                <TextField fullWidth label="Sacro" value={pelvimetria_sacro} variant="filled"/>
            </div>
        </div>
    )
}