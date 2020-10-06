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


const AddPostsForm = ({getApiData,setLoading}) => {
	const classes = useStyles();
	const initialState = { };

	const [title, setTitle]= useState("");
	const [content, setContent]= useState("");


	const history = useHistory();

	const handleOnSubmit = async (e) => {
		e.preventDefault()
		try{
			
			if (!title || !content) {
				alert("Invalid Input");
			} else {
				await addPost(title,content);
				console.log("ok");
				setLoading(true);
				
				await getApiData();
				history.push('/post/view');
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