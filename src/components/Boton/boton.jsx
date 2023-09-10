import { Button, Container } from "@mui/material";
import { NoteAdd } from '@mui/icons-material';
import React from "react";

const Botón = (props) => {

    return (
        <Container>
            <Button variant="contained" startIcon={<NoteAdd />} onClick={props.onClick} sx={{bgcolor: "purple", ":hover":{ bgcolor: "red"}  }} >Crear Formulario</Button>
            {/*<Button variant="contained" startIcon={<NoteAdd />} onClick={props.onClick}>Diligenciar Formulario</Button>*/}
        </Container>
    );
};

export default Botón;




