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
      <span>Consultar repositorio de base de datos en </span>
    </div>
  );
};

export default Header;
