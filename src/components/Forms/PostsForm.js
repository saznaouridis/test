import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost } from '../api_helpers';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Typography } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.default,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 16,
  },
 
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'content', label: 'Content', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'update',
    label: 'Update',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
const PostsForm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const regex = /(<([^>]+)>)/ig;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
  <TableContainer component={Paper}>
  <Table className={classes.table} aria-label="customized table">
  <TableHead> 
    <TableRow>
      
    <StyledTableCell>Title</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Content</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Date</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Update</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Delete</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {props.posts.length > 0 ? ( 
    
    props.posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => 
    <Fragment>
       <StyledTableRow key={post.id}>
       <StyledTableCell component="th" scope="row">{post.title.rendered.replace(regex, '')}</StyledTableCell>
       <StyledTableCell align="left">{ post.content.rendered.replace(regex, '')}</StyledTableCell>
       <StyledTableCell align="center">{post.date.replace(regex, '')}</StyledTableCell>
       <StyledTableCell align="center"> 
       <Fab 
            color="default" 
            aria-label="edit"
            ssName={classes.margin} 
            type= "submit"
            size="small"
            className="button muted-button"
            onClick ={() => {
              props.editRow(post)
              
              history.push('/add')
            }
          }   
         >
           <EditIcon fontSize="small"/>
        </Fab>
        </StyledTableCell>
        <StyledTableCell align="right">
        <IconButton 
        color="default" 
        aria-label="delete"
        ssName={classes.margin} 
        size="large"
        type= "submit"
        onClick={() => {
          deletePost(post.id);
          props.ifDataChanged();
        }}
          className="button muted-button"
        >
         <DeleteIcon />
      </IconButton >   
      </StyledTableCell>
      </StyledTableRow>
      
    </Fragment>)
    ) : (
       <Typography  colSpan={6}>
          There are no Posts.Please insert a Post
      </Typography>
    )} 
    </TableBody>  
    </Table>
    <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={props.posts.length }
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
  </TableContainer>
  
  );
}
export default PostsForm;