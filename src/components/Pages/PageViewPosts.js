import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
//import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import PostsForm from '../Forms/PostsForm';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
		margin: theme.spacing(2),
		TypographyStyle: {
			primary: teal
		}
	  },
	},
}));
const PageViewPosts = (props) => {  //{}
  const classes = useStyles();
  return (
    	
      <Grid className={classes.root}
        container 
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            align="center"
            color="textPrimary"
            className={classes.TypographyStyle}
            style={{ fontSize: 40  }}
          >
             List Of Posts
          </Typography>
        </Grid>
        <Grid item>
          <Typography	
            align="center"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 30  }}
            >
              <PostsForm {...props} posts={props.posts} editRow={props.editRow} ifDataChanged={props.ifDataChanged} />
          </Typography>
        </Grid>
      </Grid>
    
  )
};
export default PageViewPosts;