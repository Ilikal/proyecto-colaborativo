import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleIcon from "@mui/icons-material/People";
import ShowChartIcon from "@mui/icons-material/ShowChart";

import PopUpCrearFromulario from "../PopUpCrearFormulario/PopUpCrearFormulario.jsx";

import PropTypes from "prop-types";
import { useState } from "react";
import { Home, NoteAdd, NoteAlt, PowerSettingsNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Boton } from "../Boton/index.jsx";
import "./estilos.css";

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Plantilla({ children }) {
  Plantilla.propTypes = {
    children: PropTypes.node,
  };

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // -------- VARIABLES para crear MODAL/POPUP -------
  const [openModal1, setOpenModal1] = useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  // -------------------------------------------------

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ ":hover": { color: "var(--A100)" } }} />
          </IconButton>

          {/* Incluir aqui los botones del header */}
          <IconButton aria-label="Pagina Principal">
            <Home sx={{ color: "var(--Blanco)", ":hover": { color: "var(--A100)" } }} />{" "}
          </IconButton>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Boton
              onClick={handleOpenModal1}
              tipo="conRelleno--Blanco"
              ancho="auto"
            >
              <NoteAdd /> CREAR FORMULARIO{" "}
              {/*<-- Lo que se agregue dentro de Boton lo recibe el componente co<PopUpCrearFromulario open={openModal1} onClose={handleCloseModal1} />mo children*/}
            </Boton>
            <Boton onClick={1} tipo="conRelleno--Blanco" ancho="auto">
              <NoteAlt />
              DILIGENCIAR FORMULARIO
            </Boton>
          </Box>
          {/*<Button variant="contained" onClick={handleOpenModal1} sx={{color:"var(--A800)", ml: 2, backgroundColor:"var(--Blanco)", ":hover":{backgroundColor:"var(--A100)", color:"var(--Blanco)"}}} ><NoteAdd />CREAR FORMULARIO</Button>*/}
          <PopUpCrearFromulario open={openModal1} onClose={handleCloseModal1} />

          <Typography sx={{ marginLeft: "auto" }}>Hola USUARIO</Typography>
          <Button
            variant="contained"
            sx={{
              marginLeft: "auto",
              margin: "0 0 0 20px",
              backgroundColor: "var(--A800)",
              ":hover": { backgroundColor: "var(--Alert)", color: "var(--Blanco)" },
            }}
          >
            <PowerSettingsNew sx={{ margin: "0 10px 0 0" }}></PowerSettingsNew>
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ bgcolor: "var(--A800)" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuIcon sx={{ color: "var(--Blanco)" }} />
            ) : (
              <MenuIcon sx={{ color: "var(--Blanco)", ":hover": { color: "var(--A100)" } }} />
            )}
          </IconButton>
        </DrawerHeader>
        
        <List sx={{ background: "var(--A800)", height: "100%" }}>
          {[
            { text: "Compras", icon: <ShoppingCartIcon /> },
            {
              text: "Desarrollo",
              icon: <EngineeringIcon />,
            },
            {
              text: "Dirección",
              icon: <MapsHomeWorkIcon />,
            },
            {
              text: "Finanzas",
              icon: <AttachMoneyIcon />,
            },
            {
              text: "Gestión de proyectos",
              icon: <PendingActionsIcon />,
            },
            {
              text: "Logística y distriubución",
              icon: <LocationOnIcon />,
            },
            {
              text: "Producción",
              icon: <CategoryIcon />,
            },
            {
              text: "Recursos humanos",
              icon: <BookmarksIcon />,
            },
            {
              text: "Servicio al cliente",
              icon: <PeopleIcon />,
            },
            {
              text: "Venta y marketing",
              icon: <ShowChartIcon />,
            },
          ].map((element, key) => (
            <ListItem key={key} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  maxHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  textAlign: "center",
                  px: 2.5,
                  border: "none",
                  ":hover": { backgroundColor: "var(--A100)", color: "var(--Blanco)" },
                  m: "10px",
                  borderRadius: "3px",
                  backgroundColor: "var(--A300)",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                    color: "var(--Blanco)",
                  }}
                >
                  {element.icon}
                </ListItemIcon>
                <ListItemText
                  primary={element.text}
                  primaryTypographyProps={{
                    style: { whiteSpace: "normal" },
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                  sx={{ opacity: open ? 1 : 0, color: "var(--Blanco)" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Box sx={{ p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            top: "auto",
            bottom: 0,
            height: "40px",
            width: "100%vw",
            backgroundColor: "var(--G100)",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "var(--A800)",
              fontWeight: "700",
              mr: "4px",
            }}
          >
            Desarrollado por
          </Typography>
          <Typography
            sx={{
              color: "var(--A300)",
              fontWeight: "700",
            }}
          >
            The best Team
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
