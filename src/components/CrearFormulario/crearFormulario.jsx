import { CancelPresentation } from "@mui/icons-material";
import { Container, FormControl, Box, Typography, Divider, TextField, IconButton, Button, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";

const CrearFormulario = (props) => {

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
          
    /* ESTILO DE CREAR FORMULARIO */
    const styleFormulario = {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        };

    const imprimir = () =>{ console.log("Cerrar con botón")};

    // -------- VARIABLES para crear MODAL/POPUP -------
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
                        sx={{textAlign:"center", color:"#003D75", fontWeight:"Medium", flexGrow:2}}
                        > 
                        CREAR FORMULARIO 
                    </Typography>
                    <IconButton aria-label="Cerrar Formulario"sx={{color:"#03A0F8"}} size="large" onClick={imprimir}> 
                        <CancelPresentation variant="rounded" fontSize="large" />
                    </IconButton>
                </Box>

                <Divider/>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem"}}>
                    <TextField id="outlined-basic" label="Área" variant="outlined" value="Gestión y Control de Calidad" flexGrow="1" fullWidth/>
                    <TextField id="outlined-basic" label="Nombre del Proceso o Formulario" variant="outlined" defaultValue="Proceso" multiline flexGrow="1" fullWidth /> 
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "stretch", gap: "3rem"}}>
                    <TextField id="outlined-basic" label="Indicador" variant="outlined" value="Verificación de Materia Prima" fullWidth/>
                    <Button variant="outlined" onClick={handleOpenModal} > Agregar </Button>
                    <Modal open={openModal} onClose={handleCloseModal} style={props.style}>
                        <Box sx={props.sx} > 
                            <TextField> sfdsadsadsasad </TextField>
                        </Box>
                    </Modal>
                </Box>

                <br/>
                <Typography sx={{ mt: 2 /* mt = marginTop*/ }}> Se logró el modal, Yeah!! </Typography>
            </FormControl>
        </Container>
    );
};

export default CrearFormulario;