import { Container, FormControl, Box, Typography, Divider, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";

import AgregarCausas from "./agregarCausas.jsx";
import { Boton } from "../Boton/index.jsx";
import InputMod from "../Input/input.jsx";

const CrearFormulario = (props) => {

    /* ESTILO DEL MODAL_causas */
    const styleModal = {
        background: "var(--G500)"
    };

    /* ESTILO DEL POPUP_causas */
    const stylePopUp = {
        position: 'absolute',
        top: '16%',
        left: '7%',
        width: '100%',
        maxWidth: '86%',
        bgcolor: 'var(--G100)',
        border: '0px solid var(--Negro)',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
        minHeight:"700px",
        };
          
    /* ESTILO DE FORMULARIO de causas */
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
                    <Boton tipo="close" onClick={props.onClose} />
                </Box>

                <Divider/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem", mb:"1rem"}}>
                    <InputMod label="Área a la que perteneces" valor="Gestión y Control de Calidad" alto="80px" />
                    <InputMod label="Agrega el nombre del Proceso o Formulario" defaultValue="" alto="80px" />
                </Box>

                <Box sx={{border: "1px solid var(--A300)", borderRadius:"20px", p:"1rem", display:"flex", flexDirection:"column", gap:"3rem"}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem", }}>
                        <InputMod label="Agregue un indicador para evaluar el proceso" defaultValue="" alto="70px" />
                    
                        <Boton onClick={handleOpenModal} tipo="sinRelleno" ancho="auto">
                            Agregar
                        </Boton>
                        <React.Fragment>
                        <Modal open={openModal} style={styleModal}>
                            <Box sx={stylePopUp} >
                                <AgregarCausas onClose={handleCloseModal} />
                            </Box>
                        </Modal>
                        </React.Fragment>
                        
                    </Box>

                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "0.5rem", }}>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Indicador 1" alto="78px"/>
                            <Boton tipo="delete" onClick={() => alert("Eliminó el Indicador")} />
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Indicador 2" alto="78px" />
                            <Boton tipo="delete" onClick={() => alert("Eliminó el Indicador")} />
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Indicador 3" alto="78px" />
                            <Boton tipo="delete" onClick={() => alert("Eliminó el Indicador")} />
                        </Box>

                    </Box>
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