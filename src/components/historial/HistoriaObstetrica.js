import { TextField, Switch, Divider, FormControlLabel } from '@mui/material';

export default function HistoriaObstetrica(){
    return (
        <div className="historia_obstetrica flex_col gap_sm">
            <h2>Historia obstetrica</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="N de historia" variant="filled"/>
                <TextField fullWidth label="Fecha" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Revisada" variant="filled"/>
                <TextField fullWidth label="Clasificada" variant="filled"/>
                <TextField fullWidth label="Archivada" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Centro asistencial" variant="filled"/>
                <TextField fullWidth label="Tipo" variant="filled"/>
                <TextField fullWidth label="Codigo de origen" variant="filled"/>
                <TextField fullWidth label="Ubicacion geografica" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Apellidos y nombres de la paciente" variant="filled"/>
                <TextField fullWidth label="Cedula de identidad" variant="filled"/>
                <TextField fullWidth label="Edad" variant="filled"/>
                <TextField fullWidth label="Fecha de nacimiento" variant="filled"/>
                <TextField fullWidth label="Lugar de nacimiento" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <div>
                    <h4>Estado Civil</h4>
                    <div className="flex">
                        <FormControlLabel control={<Switch />} label="Soltera" />
                        <FormControlLabel control={<Switch />} label="Casada" />
                        <FormControlLabel control={<Switch />} label="Viuda" />
                        <FormControlLabel control={<Switch />} label="Divorciada" />
                    </div>
                </div>
                <TextField fullWidth label="Profesion" variant="filled"/>
                <TextField fullWidth label="Ocupacion u oficio" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Direccion de habitacion" variant="filled"/>
                <TextField fullWidth label="Telefono" variant="filled"/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Apellidos y nombres del conyugue" variant="filled"/>
                <TextField fullWidth label="Direccion del conyugue" variant="filled"/>
                <TextField fullWidth label="Telefono del conyugue" variant="filled"/>
            </div>
        </div>

    )
}