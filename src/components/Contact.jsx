import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Contact({ contact }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={contact.imgContact}
              className={classes.avatar}
            ></Avatar>
          }
          title={contact.nameContact}
        />
        <CardContent>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemText
                  primary={`Edad: ${contact.ageContact}`}
                ></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Email: ${contact.emailContact}`}
                ></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`País: ${contact.countryContact}`}
                ></ListItemText>
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
