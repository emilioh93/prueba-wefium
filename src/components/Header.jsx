import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "60px 0px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Prueba WeFium</h1>
      <span>
        Consultar repositorio de <strong>base de datos</strong>{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/emilioh93/wefiumbackend">
          aquí.
        </a>
      </span>
      <br />
      <span>
        Consultar repositorio <strong>frontend</strong>{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/emilioh93/prueba-wefium">
          aquí.
        </a>
      </span>
    </div>
  );
};

export default Header;
