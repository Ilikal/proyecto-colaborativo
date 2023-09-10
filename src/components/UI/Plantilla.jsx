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

import PropTypes from "prop-types";
import { useState } from "react";
import { Home, NoteAdd, NoteAlt, PowerSettingsNew } from "@mui/icons-material";
import { Button } from "@mui/material";

const drawerWidth = 260;

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
        width: `calc(${theme.spacing(10)} + 1px)`,
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
                        <MenuIcon />
                    </IconButton>
                    {/* Incluir aqui los botones del header */}
                    <IconButton aria-label="Pagina Principal"><Home sx={{color:"white"}} /></IconButton>
                    <Button variant="contained"   sx={{color:"#003D75", ml: 2, backgroundColor:"white", ":hover":{backgroundColor:"#95D3F6", color:"white"}}} ><NoteAdd />CREAR FORMULARIO</Button>
                    <Button variant="contained" sx={{margin:"0 0 0 20px", color:"#003D75", backgroundColor:"white", ":hover":{backgroundColor:"#95D3F6", color:"white"}}} ><NoteAlt />DILIGENCIAR FORMULARIO</Button>
                    <Typography sx={{marginLeft: "auto"}}>Hola USUARIO</Typography>              
                    <Button variant="contained" sx={{marginLeft: "auto", margin:"0 0 0 20px", backgroundColor:"#003D75"}} color="error"><PowerSettingsNew sx={{margin: "0 10px 0 0"}}></PowerSettingsNew>Salir</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{ bgcolor: "#003D75" }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <MenuIcon sx={{ color: "#ffffff" }} />
                        ) : (
                            <MenuIcon sx={{ color: "#ffffff" }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{background: "#003D75"}}>
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
                        <ListItem
                            key={key}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton 
                            
                                sx={{
                                    minHeight: 40,
                                    justifyContent: open ? "initial" : "center",
                                    textAlign: "center",
                                    px: 2.5,
                                    border:"1px solid #000",
                                    m: "10px",
                                    borderRadius: "8px",
                                    backgroundColor: "#03A0F8",
                                    
                                }}
                            > 
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 1 : "auto",
                                        justifyContent: "center",
                                        color:"white",
                                    }}
                                >
                                    {element.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={element.text}
                                    primaryTypographyProps={{fontSize:'13px', fontWeight:600}}
                                    sx={{ opacity: open ? 1 : 0, color:"white", }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
