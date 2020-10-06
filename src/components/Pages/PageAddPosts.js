import React, { useEffect } from 'react';
import EditPostsForm from '../Forms/EditPostsForm';
import AddPostsForm from '../Forms/AddPostsForm';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


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
   useEffect(()=>{
    props.getApiData();
   },[])
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
            Επεξεργασία Δημοσίευσης
            </Typography>
            <EditPostsForm
              setEdit={props.setEdit}
              posts={props.posts}
              curPost={props.curPost}
              onUpdate={props.getApiData}
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
          Προθέστε Δημοσίευση
          </Typography>
          <AddPostsForm setLoading={props.setLoading} getApiData={props.getApiData} />
          </Grid>
        )}
        </Grid>
      </div>
  )
}
export default PageAddPosts;