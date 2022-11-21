import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    
    },
  },
}));

export default function Addbook() {
  const classes = useStyles();
  const [book, setbook] = useState({
    regId: 0,
    name: "",
    course: "",
    section: "",
    author:"",
  });
  const createbook = () => {
    axios.post("http://localhost:5000/deplibrary", book).then(()=>{
      window.location.reload(false);
    })
  };
  return (
    <>
      <h3 style={{padding:"5%",color:"#004272"}}>ADD BOOK</h3>
      <form style={{padding:"0 50px"}}className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Book ID"
          value={book.regId}
          onChange={(event) => {
            setbook({ ...book, regId: event.target.value });
          }}
        /><br/>
        <TextField
          id="standard-basic"
          label="Book Name"
          value={book.name}
          onChange={(event) => {
            setbook({ ...book, name: event.target.value });
          }}
        /><br/>
        <TextField
          id="standard-basic"
          label="Category"
          value={book.course}
          onChange={(event) => {
            setbook({ ...book, course: event.target.value });
          }}
        /><br/>
        <TextField
          id="standard-basic"
          label="Section"
          value={book.section}
          onChange={(event) => {
            setbook({ ...book, section: event.target.value });
          }}
        /><br/>
        <TextField
          id="standard-basic"
          label="author"
          value={book.author}
          onChange={(event) => {
            setbook({ ...book, author: event.target.value });
          }}
        /><br/>
        <TextField
          id="standard-basic"
          label="count"
          value={book.count}
          onChange={(event) => {
            setbook({ ...book,count: event.target.value });
          }}
        /><br/>
        <Button variant="contained" color="primary" onClick={createbook}>
          Add
        </Button>
      </form>
    </>
  );
}
