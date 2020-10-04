import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addPost } from '../api_helpers';
import {makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
	},
	extendedIcon: {
	  marginRight: theme.spacing(1),
	},
  }));


const AddPostsForm = (props) => {
	const classes = useStyles();
	const initialState = { };
	const [ post, setPost ] = useState(initialState)

	const [title, setTitle]= useState("");
	const [content, setContent]= useState("");


	const history = useHistory();

	const handleOnSubmit = e => {
		e.preventDefault()
		try{
			
			if (!title || !content) {
				alert("Invalid Input");
			} else {
				console.log(title);
				console.log(content);
				let res= addPost(title,content)
				setTitle("");
            	setContent("");
				console.log(res);
				setPost((prevState) => {
					const data = [...prevState.data];
					data.push(res.data);
					return {...prevState, data};
				});
				
				history.push('/post')
			}
		}	catch (err) {
			console.log(err);
		}
	}
	return (
		<div className={classes.root}>
		<form
			className={classes.root}
			noValidate autoComplete="off"
			onSubmit={handleOnSubmit}	
		>
			<TextField 
				id="standard-basic" 
				placeholder="Type The Title"
				type="text" 
				name="name" 
				className="form-control" 
				value={title} 
				onChange={e => setTitle(e.target.value)} 
		/>
			<TextField 
				id="standard-basic" 
				placeholder="Type The Content"
				type="text" 
				name="author" 
				value={content} 
				onChange={e => setContent(e.target.value)} 
		/>
			<p>
				<Fab color="primary" aria-label="add" type="submit" size="small">
					<AddIcon />
				</Fab>
			</p>
		</form>
		</div>
	)
}
export default AddPostsForm;


