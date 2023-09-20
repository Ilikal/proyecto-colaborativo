import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const Login = () => {
  /*const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);*/

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    console.log(e)
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={420}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
          <Typography variant="h4" padding={3} textAlign={"center"}>
            Bienvenido
          </Typography>
          <TextField
            /*value={usuario}
            onChange={(e) => setUsuario(e.target.value)}*/
            name="usuario"
            margin="normal"
            type="text"
            variant="outlined"
            placeholder="Usuario"
            {...register("usuario", {required: {value : true}, minLength: {value: 3, message: "Usuario o contraseña incorrectos" }})}
          />
          <TextField
            /*value={password}
            onChange={(e) => setPassword(e.target.value)}*/
            name="contraseña"
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Contraseña"
            {...register("password", {required: {value : true}, minLength: {value: 8, message: "Usuario o contraseña incorrectos" }})}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Iniciar
          </Button>
          <Link to="/forgotPassword">
          <Typography padding={3} textAlign={"center"}>
            Olvidaste tu contraseña
          </Typography>
          </Link>
          <Typography color="secondary">
            {errors.usuario && <span>{errors.usuario.message}</span>}
            {errors.password && <span>{errors.password.message}</span>}
          </Typography>
        </Box>
      </form>
    </div>
  );
};


/*if (usuario === validarUsuario || password === validarPassword) {
    setError(true);
    return;
  }
  setError(false);
};

return (
  <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={420}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
      >
        <Typography variant="h4" padding={3} textAlign={"center"}>
          Bienvenido
        </Typography>
        <TextField
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          name="usuario"
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Usuario"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="contraseña"
          margin="normal"
          type="password"
          variant="outlined"
          placeholder="Contraseña"
        />
        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Iniciar
        </Button>
        <Typography padding={3} textAlign={"center"}>
          Olvidaste tu contraseña
        </Typography>
        {error && "Usuario o contraseña inválidos"}
      </Box>
    </form>
  </div>
);
};*/

export default Login;
