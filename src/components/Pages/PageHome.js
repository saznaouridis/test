import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
//import MyContainer from './sidebar/MyContainer';
const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
      margin: theme.spacing(2),
      TypographyStyle: {
        color:"blue"
      }
	  },
	},
}));
const HomeIcon = (props) => {
	return (
	  <SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
	  </SvgIcon>
	);
}
const PageHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid 
      container 
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "200px"}}
      >
        <Grid item xs={3} style={{ textAlign: "center"}}> 
          <HomeIcon color="primary" style={{ fontSize: 50  }} />
        </Grid>
        <Grid item style={{ textAlign: "center"}}>
          <Typography
            align="center"
            color="primary"
            className={classes.TypographyStyle}
            style={{ fontSize: 30  }}
            >
            
               Welcome to Home Page 
          </Typography>
          
        </Grid>
        
      </Grid>
      
    </div>
  );
}
export default PageHome;