import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Showbook() {
  const classes = useStyles();
  const [bookList, showbookList] = useState([]);

  const deletebook = (id)=>{
    axios.delete(`http://localhost:5000/deplibrary/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/deplibrary").then((allbooks) => {
      showbookList(allbooks.data);
    });
  }, []);

  return (
    <>
      <h3 style={{padding:"5%",color:"#004272"}}>BOOKS</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center" fontWeight="bold">
               
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Book ID
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Book Name
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Category
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Section
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Author
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Count
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookList.map((book, key) => (
              <TableRow key={book.key}>
                
                <TableCell align="center"><img width={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujOLDD7CsC_vF9aOlhpUgzmAss0fQKUKuXw&usqp=CAU"/></TableCell>
                <TableCell align="center" component="th" scope="row">
                  {book.regId}
                </TableCell>
                <TableCell align="center">{book.name}</TableCell>
                <TableCell align="center">{book.course}</TableCell>
                <TableCell align="center">{book.section}</TableCell>
                <TableCell align="center">{book.author}</TableCell>
                <TableCell align="center">{book.count}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" onClick={()=> deletebook(book._id)}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
