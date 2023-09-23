import { Modal, Box, Typography } from "@mui/material";
import React from "react";
import { Boton } from "../Boton";

const SalirPopUp = (props) => {

    /* ESTILO DEL MODAL */
    const styleModal = {
        background: "var(--G500)"
    };

    /* ESTILO DEL POPUP */
    const stylePopUp = {
        position: 'absolute',
        top: '25%',
        left: '15%',
        width: '100%',
        maxWidth: '70%',
        bgcolor: 'var(--G100)',
        border: '0px solid var(--Negro)',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
        minHeight:"487px",
        display: "flex",
        flexDirection:"column",
        gap: "3rem"
        };

    return (
        <Modal open={props.open}  style={styleModal}>
            <Box sx={stylePopUp} >
                <Box sx={{display:"flex", justifyContent: "flex-end"}}>
                    <Boton tipo="close" onClick={props.onClose} />
                </Box> 

                <Typography sx={{textAlign: "center", color: "var(--A300)", fontSize:"40px", fontWeight:600}} > Gracias por usar nuestra aplicación </Typography>

                <Box>
                    <Typography sx={{textAlign: "center", color: "var(--A800)", fontSize:"25px", fontWeight:600}} > No olvides visitar nuestra página WEB </Typography>
                    <Typography sx={{textAlign: "center", color: "var(--A800)", fontSize:"25px", fontWeight:600}} > www.sitio.com </Typography>
                </Box>
            </Box>
        </Modal>

    );
};

export default SalirPopUp;