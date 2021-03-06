import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import AddPostsForm from '../../Forms/AddPostsForm';


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
    
  }));

  const MyContainer = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return(
<main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        
          <Grid container spacing={3}>
            {}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              <AddPostsForm />
      
              </Paper>
            </Grid>
            {}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
            {}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main> 
);  
}

export default MyContainer ;