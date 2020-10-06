import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Dashboard from "./components/Pages/sidebar/dashboard";
import './App.css';
import PageAddPosts from './components/Pages/PageAddPosts';
import PageHome from './components/Pages/PageHome';
import PageViewPosts from './components/Pages/PageViewPosts';

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
	const [loading, setLoading] = useState(true);
	const getApiData = async () =>{
		const res = await fetch('http://wpchamber.knowledge.gr/wp-json/wp/v2/posts');
	   
		if(!res.ok)
		{
		   // oups! something went wrong
		   return;
	   }
	   const posts11 = await res.json();
	   //setPosts(posts);
	   setPostsData(posts11);
	  setPosts(posts11);
	  setLoading(false);
	  return;
	}
	
		useEffect(()=>{
			getApiData();
	  },[])
	
		const editRow = async (post) => {
			setEdit(true);
		setCurPost(post);
	  }
	
	  const ifDataChanged = () => {
	     getApiData();
		
	  }
	return (
	
	<Router>
    <Dashboard>
	<Switch>
		
			<Route exact path="/post/add" render={
				(props) => (<PageAddPosts {...props} curPost={curPost} posts={posts} setLoading={setLoading} edit={edit} setEdit={setEdit} getApiData={getApiData} />)} 
				
			/>
			<Route exact path="/post/view" render={
				(props) => (loading)?<div>Loading</div>:<PageViewPosts posts={posts} editRow={editRow} ifDataChanged={ifDataChanged}  />}
		  />
			<Route  path="/" exact component={PageHome} />
		</Switch>
	
	</Dashboard>
	</Router>
	)
}
export default App;