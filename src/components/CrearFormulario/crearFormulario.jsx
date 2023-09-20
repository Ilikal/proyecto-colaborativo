import { CancelPresentation } from "@mui/icons-material";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton, Button, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import AgregarCausas from "../AgregarCausas/agregarCausas.jsx";
import { Boton } from "../Boton/index.jsx";

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
                    <TextField id="filled-basic" label="Área a la que perteneces" variant="filled" value="Gestión y Control de Calidad" fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} />
                    <TextField id="filled-basic" label="Agrega el nombre del Proceso o Formulario" variant="filled" defaultValue="" multiline fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} /> 
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem", }}>
                    <TextField id="filled-basic" label="Agregue un indicador para evaluar el proceso" variant="filled" defaultValue="" fullWidth
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }}/>
                    <Boton onClick={handleOpenModal} tipo="sinRelleno" ancho="auto">
                        Agregar Indicador
                    </Boton>

                    
                    <React.Fragment>
                    <Modal open={openModal} style={styleModal}>
                        <Box sx={stylePopUp} >
                            <AgregarCausas onClose={handleCloseModal} />
                        </Box>
                    </Modal>
                    </React.Fragment>
                </Box>

                <Container sx={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems: "stretch", gap: "2rem", height:"70px"}}>
                    <Boton onClick={() => alert("Ha guardado un NUEVO formulario")} tipo="conRelleno--A300" ancho="auto" >
                        Generar Formulario
                    </Boton>

                    <Boton onClick={() => alert("Ha guardado un NUEVO formulario y será redirigido al STATUS PANEL")} tipo="conRelleno--A300" ancho="auto" >
                        Generar Formulario y agregar al STATUS PANEL
                    </Boton>
                </Container>

            </FormControl>
        </Container>
    );
};

export default CrearFormulario;