import { Button } from "@mui/material";


export function Boton(props) {

    const {tipo, onClick, children, ancho} = props

    switch (tipo) {
        case "sinRelleno":
            return (

                <Button variant="outlined"
                    onClick={onClick}
                    sx={{
                        width:{ancho}, height:"70px",
                        border: "3px solid var(--A300)", color: "var(--A300)", backgroundColor: "none",
                        ":hover": { border: "3px solid var(--A300)", backgroundColor: "var(--A100)", color: "var(--A300)" },
                        ":active": { border: "3px solid var(--A300)", backgroundColor: "var(--Blanco)", color: "var(--A300)" }
                    }}
                > {children}</Button>
            );

        case "conRelleno--A300":
            return (

                <Button variant="contained" onClick={onClick}
                    sx={{
                        width:{ancho}, height:"70px",
                        backgroundColor: "var(--A300)", color: "var(--Blanco)",
                        ":hover": { backgroundColor: "var(--A100)", color: "var(--Blanco)" },
                        ":active": { backgroundColor: "var(--Blanco)", color: "var(--A300)" }
                    }}
                > {children} </Button>
            );
        
        case "conRelleno--Blanco": 
            return (

            <Button variant="contained"
                onClick={onClick}
                sx={{
                    width:{ancho}, height:"50px",
                    color: "var(--A800)", ml: 2, backgroundColor: "var(--Blanco)",
                    ":hover": { backgroundColor: "var(--A100)", color: "var(--Blanco)" },
                    ":active": { backgroundColor: "var(--A800)", color: "var(--Blanco)" }
                }} > {children} </Button>
            );


        case "conRelleno--A300--small":
            return (

                <Button variant="contained" onClick={onClick}
                    sx={{
                        width:{ancho}, height:"40px",
                        backgroundColor: "var(--A300)", color: "var(--Blanco)",
                        ":hover": { backgroundColor: "var(--A100)", color: "var(--Blanco)" },
                        ":active": { backgroundColor: "var(--Blanco)", color: "var(--A300)" }
                    }}
                > {children} </Button>
            );


        case "conRelleno--A800":
            return (

                <Button variant="contained" onClick={onClick}
                    sx={{
                        width:{ancho}, height:"40px",
                        backgroundColor: "var(--A800)", color: "var(--Blanco)",
                        ":hover": { backgroundColor: "var(--A500)", color: "var(--Blanco)" },
                        ":active": { backgroundColor: "var(--Blanco)", color: "var(--A300)" }
                    }}
                > {children} </Button>
            );
    };

};


