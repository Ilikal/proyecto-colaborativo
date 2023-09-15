import { CancelPresentation } from "@mui/icons-material";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton, Button, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import AgregarCausas from "../AgregarCausas/agregarCausas.jsx";

const CrearFormulario = (props) => {

    /* ESTILO DEL MODAL */
    const styleModal = {
        background: "var(--G500)"
    };

    /* ESTILO DEL POPUP */
    const stylePopUp = {
        position: 'absolute',
        top: '16%',
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
          
    /* ESTILO DE CREAR FORMULARIO */
    const styleFormulario = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        };

    // ---------- Variables POPUP AgregarCausas---------
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    // -------------------------------------------------

    return (
        <Container>
            <FormControl style={styleFormulario}>
                <Box sx={{  display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                             }} >
                    <Typography 
                        variant="h4" 
                        sx={{textAlign:"center", color:"var(--A800)", fontWeight:"Medium", flexGrow:2}}
                        > 
                        CREAR FORMULARIO 
                    </Typography>
                    <IconButton aria-label="Cerrar Formulario"sx={{color:"var(--A300)"}} size="large" onClick={props.onClose}> 
                        <CancelPresentation variant="rounded" fontSize="large" />
                    </IconButton>
                </Box>

                <Divider/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem"}}>
                    <TextField id="standard-basic" label="Área a la que perteneces" variant="outlined" value="Gestión y Control de Calidad" fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} />
                    <TextField id="standard-basic" label="Agrega el nombre del Proceso o Formulario" variant="filled" defaultValue="" multiline fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} /> 
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem", }}>
                    <TextField id="standard-basic" label="Indicador" variant="standard" defaultValue="" fullWidth
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }}/>
                    <Button variant="outlined" 
                            onClick={handleOpenModal} 
                            sx={{border:"3px solid var(--A300)", color:"var(--A300)", backgroundColor:"var(--G100)", 
                                ":hover":{border:"3px solid var(--A300)", backgroundColor:"var(--A100)", color:"var(--A300)"}, 
                                ":active":{border:"3px solid var(--A300)", backgroundColor:"var(--Blanco)", color:"var(--A300)"}}} 
                    > Agregar </Button>
                    
                    <React.Fragment>
                    <Modal open={openModal} style={styleModal}>
                        <Box sx={stylePopUp} >
                            <AgregarCausas onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                    </React.Fragment>
                </Box>

                <Container sx={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems: "stretch", gap: "2rem", height:"70px"}}>
                    <Button variant="contained" onClick={1} 
                            sx={{color:"var(--Blanco)", backgroundColor:"var(--A300)", 
                                ":hover":{backgroundColor:"var(--A100)", color:"var(--Blanco)"}, 
                                ":active":{backgroundColor:"var(--Blanco)", color:"var(--A300)"}}} 
                    > Generar Formulario </Button>
                    <Button variant="contained" onClick={2} 
                            sx={{color:"var(--Blanco)", backgroundColor:"var(--A300)", 
                                ":hover":{backgroundColor:"var(--A100)", color:"var(--Blanco)"}, 
                                ":active":{backgroundColor:"var(--Blanco)", color:"var(--A300)"}}} 
                    > Generar Formulario y agregar al STATUS PANEL </Button>
                </Container>

            </FormControl>
        </Container>
    );
};

export default CrearFormulario;