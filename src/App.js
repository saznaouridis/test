import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Dashboard from "./components/Pages/sidebar/dashboard";
import Title from "./components/Pages/sidebar/title";
import ListItems from './components/Pages/sidebar/listItems';
import './App.css';
//components 
import PageAddPosts from './components/Pages/PageAddPosts';
import PageHome from './components/Pages/PageHome';
import PageViewPosts from './components/Pages/PageViewPosts';
//import { useHistory } from "react-router-dom";
//import MyContainer from './components/Pages/sidebar/MyContainer';

const App = () => {

	//const history = useHistory();
	// Data
	const [postsData,setPostsData] = useState([]);	
	const initialState = { id: null, title: '', author: '' }
	// Setting state
	//const [posts, setPosts] = useState([]);
    const [ posts, setPosts ] = useState(postsData)
    const [ curPost, setCurPost ] = useState(initialState)
    const [ edit, setEdit ] = useState(false)

	const getApiData = async () =>{
    
		const res = await fetch('http://wpchamber.knowledge.gr/wp-json/wp/v2/posts');
	   
		if(!res.ok)
		{
		   // oups! something went wrong
		   return;
	   }
	  
	   const posts = await res.json();
	   console.log(posts);
	   //setPosts(posts);
	   setPostsData(posts);
	  setPosts(posts);
	  }
	
		useEffect(()=>{
		let posts = getApiData();
		console.log(posts)
		setPostsData(posts);
		setPosts(posts);
	  },[])
	
		const editRow = async (post) => {
			setEdit(true);
		setCurPost(post);
	  }
	
	  const ifDataChanged = () => {
	     getApiData();
		
	  }
	return (
	//Router history = {history} 
	<Router>
    <Dashboard />
	
    <Title />
	<Switch>
		
			<Route exact path="/add" render={
				(props) => (<PageAddPosts {...props} curPost={curPost} edit={edit} setEdit={setEdit} ifDataChanged={ifDataChanged} />)} 
				
			/>
			
			<Route exact path="/post" render={
				(props) => (<PageViewPosts {...props} posts={posts} editRow={editRow} ifDataChanged={ifDataChanged}  />)}
		  />
			<Route  path="/" exact component={PageHome} />
		</Switch>
	</Router>
	)
}
export default App;
