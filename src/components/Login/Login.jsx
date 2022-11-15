import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { TextField } from "@mui/material";

const MySwal = withReactContent(Swal);

export const Login = () => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //Las barras \ me tiraban un warning de eslint, por eso las deshabilite en esa linea, aunque borrarlas tambien funcionaba
    // const validarEmail =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const validarEmail =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      MySwal.fire(
        <>
          <h3>Upps...</h3>
          <p>Los campos no pueden estar vacios</p>
        </>
      );
      return;
    }

    if (email !== "" && !validarEmail.test(email)) {
      MySwal.fire(
        <>
          <h3>Upps...</h3>
          <p>Debes escribir una direccion de email valida</p>
        </>
      );
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire(
        <>
          <h3>Upps...</h3>
          <p>Credenciales invalidas</p>
        </>
      );
      return;
    }

    axios
      .post("https://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const token = res.data.token;
        //*setItem tiene dos parametros,
        //*1:nombre de clave, 2: valor
        //*para tomar algun valor del local, uso getItem(clave)
        //localStorage.clear() vacio el local
        sessionStorage.setItem("token", token);
        MySwal.fire(
          <>
            <h3>Genial!</h3>
            <p>Has ingresado correctamente</p>
          </>
        );

        navigate("/listado");
      });
  };

  return (
    <>
      {token ? (
        <Navigate to="/listado" />
      ) : (
        <form className="formulario" onSubmit={submitHandler}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h2>Iniciar sesión</h2>
            <div className="grupo-label-input">
              {/* <label>Correo electrónico:</label> */}
              {/* <input name="email" type="text" placeholder="nombre@email.com" /> */}
              <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder="Ingresa tu e-mail..."
                name="email"
              />
            </div>
            <div className="grupo-label-input">
              {/* <label>Contraseña:</label> */}
              {/* <input type="password" name="password" /> */}
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
              />
            </div>
            <Button type="submit" variant="contained">
              Buscar
            </Button>
          </Grid>
        </form>
      )}
    </>
  );
};
