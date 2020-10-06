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
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://wpchamber.knowledge.gr/wp-admin/index.php/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4), 
    height: '100vh'
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
   

  },
  fixedHeight: {
    height: 1200,
  },
  
  
}));

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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const greekMonths = ['Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (

<main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
      
        <Grid container spacing={3}>
          {}
          <Grid item xs={12}   >
            <Paper className={fixedHeightPaper}>
              
            <TableContainer component={Paper}>
  <Table className={classes.table} aria-label="customized table">
  <TableHead> 
    <TableRow>
      
    <StyledTableCell>Τίτλος</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Περιεχόμενο</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Ημερομηνία</StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Επεξεργασία  </StyledTableCell>
    <StyledTableCell align="center" fontWeight="fontWeightBold" m={1} >Διαγραφή</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {props.posts.length > 0 ? ( 
    
    props.posts.map((post) => 
    <Fragment>
       <StyledTableRow key={post.id}>
       <StyledTableCell component="th" scope="row">{post.title.rendered.replace(regex, '')}</StyledTableCell>
       <StyledTableCell align="left">{ post.content.rendered.replace(regex, '')}</StyledTableCell>
       <StyledTableCell align="center">{post.date}</StyledTableCell>
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
              
              history.push('/post/add')
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
    {/* <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={props.posts.length }
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
  </TableContainer>
            </Paper>
          </Grid>
          {}

        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main> 
    
);  
}
export default PostsForm;