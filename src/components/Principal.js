import { TextField, IconButton,  Button, Pagination, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';

export default function Principal(){
    return (
        <div>
            <TextField
        placeholder='Buscar historiales medicos por nombre o cedula de identidad'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
        variant="standard"
      />
            <IconButton aria-label="delete">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <Pagination count={5} hidePrevButton hideNextButton />
        </div>
    )
}