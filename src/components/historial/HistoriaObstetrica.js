"use client";
import { TextField, Switch, Divider, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function HistoriaObstetrica({
    handleChange,
    edit,
    numero_de_historia,
    fecha,
    revisada,
    clasificada,
    archivada,
    centro_asistencial,
    tipo,
    codigo_de_origen,
    ubicacion_geografica,
    nombre,
    cedula_de_identidad,
    edad,
    fecha_de_nacimiento,
    lugar_de_nacimiento,
    estado_civil,
    profesion,
    ocupacion,
    direccion_de_habitacion,
    telefono,
    nombre_conyugue,
    direccion_conyugue,
}){
    return (
        <div className="historia_obstetrica flex_col gap_sm">
            <h2>Historia obstetrica</h2>
            <Divider/>
            <div className="grid gap_xs">
                <TextField fullWidth label="N de historia" value={numero_de_historia} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Fecha" value={fecha} variant="filled" disabled={!edit}/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Revisada" value={revisada} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Clasificada" value={clasificada} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Archivada" value={archivada} variant="filled" disabled={!edit}/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Centro asistencial" value={centro_asistencial} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Tipo" value={tipo} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Codigo de origen" value={codigo_de_origen} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Ubicacion geografica" value={ubicacion_geografica} variant="filled" disabled={!edit}/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Apellidos y nombres de la paciente" value={nombre} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Cedula de identidad" value={cedula_de_identidad} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Edad" value={edad} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Fecha de nacimiento" value={fecha_de_nacimiento} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Lugar de nacimiento" value={lugar_de_nacimiento} variant="filled" disabled={!edit}/>
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
                <TextField fullWidth label="Profesion" value={profesion} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Ocupacion u oficio" value={ocupacion} variant="filled" disabled={!edit}/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Direccion de habitacion" value={direccion_de_habitacion} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Telefono" value={telefono} variant="filled" disabled={!edit}/>
            </div>
            <div className="grid gap_xs">
                <TextField fullWidth label="Apellidos y nombres del conyugue" value={nombre_conyugue} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Direccion del conyugue" value={direccion_conyugue} variant="filled" disabled={!edit}/>
                <TextField fullWidth label="Telefono del conyugue" variant="filled" disabled={!edit}/>
            </div>
        </div>

    )
}