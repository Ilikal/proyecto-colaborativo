import React from "react";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton } from "@mui/material";
import { CancelPresentation } from "@mui/icons-material";
import { Boton } from "../Boton";

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
                    <IconButton aria-label="Cerrar Formulario"sx={{color:"var(--A300)"}} size="large" onClick={props.onClose}> 
                        <CancelPresentation variant="rounded" fontSize="large" />
                    </IconButton>
                </Box>

                <Divider/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem"}}>
                    <TextField id="filled-basic" label="Área a la que perteneces" variant="filled" value="Gestión y Control de Calidad" fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} />
                    <TextField id="filled-basic" label="Nombre del Proceso o Formulario" variant="filled" value="Verificación de Materia Prima que ingresa al almacén" multiline fullWidth 
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px", /*boxShadow:"-2px 2px var(--G300)"*/  }} /> 
                </Box>
                
                <TextField id="filled-basic" label="Indicador" variant="filled" value="Indicador 1" fullWidth
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px"  }}/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem", }} >
                    <TextField id="filled-basic" label="Agregue una causa de incumplimiento del indicador" variant="filled" defaultValue="" fullWidth
                                sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px"  }}/>
                    <Boton onClick={() => alert("Ha agregado una nueva CAUSA para el indicador")} tipo="sinRelleno" ancho="auto">
                        Agregar Causa
                    </Boton>
                </Box>


            </FormControl>
        </Container>

    );
};

export default AgregarCausas;