import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { updatePost } from '../api_helpers';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
    margin: theme.spacing(2),
    textAlign: 'center',
		TypographyStyle: {
			color:"blue"
		}
	  },
	},
}));
const EditPostsForm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [ post, setPost ] = useState(props.curPost)
  
  const [title, setTitle]= useState("");
	const [content, setContent]= useState("");

  const regex = /(<([^>]+)>)/ig;

  useEffect(()=>{
    setTitle(props.curPost.title.rendered)
    setContent(props.curPost.content.rendered.replace(regex, ''))
  },[])
  
  return (
    <form
        className={classes.root} 
        noValidate autoComplete="off"
        onSubmit={e => {
        e.preventDefault()
        try{
          
          if (!title || !content) {
            alert("Invalid Input");
          } 
          else {
        props.setEdit(false)
        updatePost(post.id, title, content)
        //window.location = "/country"
      } 
      
        history.push('/post/view')
        
      }catch (err) {
      console.log(err);
      }
      }}>
      <TextField    
       id="filled-basic"
       label="Filled" 
       variant="filled" 
       placeholder='Update Title'
       type="text"
       name="name" 
       value={title} 
       onChange={e => {
        e.preventDefault()
        setTitle(e.target.value)}
      }
       />
      <TextField   
       id="filled-basic"
       label="Filled" 
       variant="filled" 
       placeholder="Update Content"
       type="text" 
       name="author" 
       value={content}
       onChange={e => {
        e.preventDefault()
        setContent(e.target.value)}
      }
       />
       
      <p>
        <div className={classes.root}>
        <Grid container spacing={10}>
        <Grid item xs={8}>
        <Button 
        type="submit" 
        size="small" 
        variant="contained"
         color="primary"
         >
        Update Post
        </Button> 
        </Grid>
        <Grid item xs={4}>
        <Button 
        type="submit" 
        size="small" 
        variant="contained" 
        color="primary"
        onClick={() => {
          props.onUpdate()
          props.setEdit(false)}
      } 
        className="button muted-button"
        >
        Cancel
        </Button>
        </Grid>
        </Grid>
        </div>
      </p>
    </form>
  )
}
export default EditPostsForm