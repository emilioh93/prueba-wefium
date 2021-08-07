import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Contact from "./Contact";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ContactList({ contacts }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {contacts &&
          contacts.map((contact) => (
            <Contact key={contact._id} contact={contact}></Contact>
          ))}
      </Grid>
    </Container>
  );
}
