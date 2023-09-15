
import { Modal, Box } from "@mui/material";
import React from "react";

import CrearFormulario from "../CrearFormulario/crearFormulario";


const PopUpCrearFromulario = (props) => {

    /* ESTILO DEL MODAL */
    const styleModal = {
        background: "var(--G500)"
    };

    /* ESTILO DEL POPUP */
    const stylePopUp = {
        position: 'absolute',
        top: '8%',
        left: '7%',
        /*transform: 'translate(-50%, -50%)',*/
        width: '100%',
        maxWidth: '86%',
        bgcolor: 'var(--G100)',
        border: '0px solid var(--Negro)',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
      };

    
    return (
        <Modal open={props.open}  style={styleModal}>
            <Box sx={stylePopUp} > 
                <CrearFormulario onClose={props.onClose}/>
            </Box>
        </Modal>
    )
};

export default PopUpCrearFromulario;