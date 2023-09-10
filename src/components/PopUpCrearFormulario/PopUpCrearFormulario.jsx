
import { Modal, Box } from "@mui/material";
import React from "react";

import CrearFormulario from "../CrearFormulario/crearFormulario";


const PopUpCrearFromulario = (props) => {

    /* ESTILO DEL MODAL */
    const styleModal = {
        background: "grey.100"
    };

    /* ESTILO DEL POPUP */
    const stylePopUp = {
        position: 'absolute',
        top: '8%',
        left: '7%',
        /*transform: 'translate(-50%, -50%)',*/
        width: '100%',
        maxWidth: '86%',
        bgcolor: 'grey.300',
        border: '0px solid #000',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
      };

    
    return (
        <Modal open={props.open} onClose={props.onClose} style={styleModal}>
            <Box sx={stylePopUp} > 
                <CrearFormulario/>
            </Box>
        </Modal>
    )
};

export default PopUpCrearFromulario;