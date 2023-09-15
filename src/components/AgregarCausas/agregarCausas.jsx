import React from "react";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton, Button, Modal } from "@mui/material";
import { CancelPresentation } from "@mui/icons-material";

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

                <TextField id="outlined-basic" label="Indicador" variant="outlined" value="Indicador 1" fullWidth
                            sx={{flexGrow:"1", background:"var(--Blanco)", color:"var(--A100)", border:"1px solid var(--Blanco)", borderRadius:"10px"  }}/>

            </FormControl>
        </Container>

    );
};

export default AgregarCausas;