import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "60px 0px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>&copy; Prueba para WeFium - Emilio E. Hurtado</span>
    </div>
  );
};

export default Footer;
