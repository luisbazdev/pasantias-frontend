"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SearchBar() {
  return (
    <div className="flex_col center-item searchbar gap">
            <Paper elevation={0}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 580, backgroundColor: '#f0f0f0', borderRadius: '20px' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar historiales medicos por nombre o cedula de identidad"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon fontSize="small" />
      </IconButton>
    </Paper>

    <div className="fechas flex gap_sm">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Fecha de inicio" 
      sx={{ width: '250px' }}
      slotProps={{
        field: { clearable: true }
      }}/>
      <DatePicker label="Fecha final" 
      sx={{ width: '250px' }}

      slotProps={{
        field: { clearable: true }
      }}/>
    </LocalizationProvider>
    </div>
    </div>

  );
}