import React from "react";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton } from "@mui/material";
import { CancelPresentation, RemoveCircle } from "@mui/icons-material";

import { Boton } from "../Boton";
import InputMod from "../Input/input.jsx";


const AgregarCausas = (props) => {

    /* ESTILO DE AGREGAR CAUSAS */
    const styleFormulario = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    };

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
                        AGREGAR CAUSAS
                    </Typography>
                    <Boton tipo="close" onClick={props.onClose} />
                </Box>

                <Divider/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem"}}>
                    <InputMod label="Área a la que perteneces" valor="Gestión y Control de Calidad" alto="50px" />
                    <InputMod label="Nombre del Proceso o Formulario" valor="Verificación de Materia Prima que ingresa al almacén" alto="50px" />
                </Box>
                
                <Box sx={{border: "1px solid var(--A300)", borderRadius:"20px", p:"1rem", display:"flex", flexDirection:"column", gap:"1rem"}}>
                    <InputMod label="Indicador" valor="Indicador 1" alto="60px" />

                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3rem", }} >
                        <InputMod label="Agregue una causa de incumplimiento del indicador" defaultValue="" alto="45px" />
                        <Boton onClick={() => alert("Ha agregado una nueva CAUSA para el indicador")} tipo="conRelleno--A800" ancho="auto">
                            Agregar Causa
                        </Boton>
                    </Box>

                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem", }}>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Causa 1" alto="45px"/>
                            <Boton tipo="delete" onClick={() => alert("Eliminó la CAUSA")} />
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Causa 2" alto="45px" />
                            <Boton tipo="delete" onClick={() => alert("Eliminó la CAUSA")} />
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <InputMod label="Agregue un indicador para evaluar el proceso" valor="Causa 3" alto="45px" />
                            <Boton tipo="delete" onClick={() => alert("Eliminó la CAUSA")} />
                        </Box>
                    </Box>
                </Box>

                <Container sx={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems: "stretch", gap: "2rem", height:"70px"}}>
                    <Boton onClick={() => alert("Ha guardado una NUEVO causa")} tipo="conRelleno--A300" ancho="auto" >
                        Guardar Causas
                    </Boton>
                </Container>

            </FormControl>
        </Container>

    );
};

export default AgregarCausas;