import React from 'react';
import EditPostsForm from '../Forms/EditPostsForm';
import AddPostsForm from '../Forms/AddPostsForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
//TEST
//import Box from '@material-ui/core/Box';
//import Container from '@material-ui/core/Container';
//import Paper from '@material-ui/core/Paper';
//import Link from '@material-ui/core/Link';
/*function Copyright() {
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
} */

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
      display: 'flex',
		margin: theme.spacing(2),
		TypographyStyle: {
			color:"blue"
    }
  
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 1500,
    },
	},
}));


const PageAddPosts = (props) => {
   const classes = useStyles();
   
  return (
    <div className={classes.root}>
     <Grid
        container 
        direction="column"
        justify="center"
        alignItems="center"
      >
        {props.edit ? (
          <Grid item>
            <Typography
            align="left"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 25  }}
          >
            Edit
            </Typography>
            <EditPostsForm
              setEdit={props.setEdit}
              curPost={props.curPost}
            />
          </Grid>
        ) : (
          <Grid item>
          <Typography
            align="center"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 25  }}
          >
          Add a Post
          </Typography>
          <AddPostsForm ifDataChanged={props.ifDataChanged} />
          </Grid>
        )}
        </Grid>
      </div>
  )
}
export default PageAddPosts;