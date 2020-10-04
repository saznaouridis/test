import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import PostsForm from '../../Forms/PostsForm';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PagesIcon from '@material-ui/icons/Pages';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CategoryIcon from '@material-ui/icons/Category';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import BackupIcon from '@material-ui/icons/Backup';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { useHistory } from "react-router-dom";
//import history from '../../history';
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory({forceRefresh:true});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  }
}));
 const ListItems = (props) => {

const classes = useStyles();
const history = useHistory({forceRefresh:true});
//const history = createBrowserHistory();
  const [openOrg1, setOrg1] = React.useState(false);
  const [openOrg2, setOrg2] = React.useState(false);
  const [openOrg3, setOrg3] = React.useState(false);
  const [openOrg4, setOrg4] = React.useState(false);
  const [openOrg5, setOrg5] = React.useState(false);
  const [openOrg6, setOrg6] = React.useState(false);
  const [openOrg7, setOrg7] = React.useState(false);
  const [openOrg8, setOrg8] = React.useState(false);
  const handleOrg1Click = () => {
  setOrg1(!openOrg1);
  };
  const handleOrg2Click = () => {
  setOrg2(!openOrg2);
  };
  const handleOrg3Click = () => {
  setOrg3(!openOrg3);
  };
  const handleOrg4Click = () => {
  setOrg4(!openOrg4);
  };
  const handleOrg5Click = () => {
  setOrg5(!openOrg5);
  };
  const handleOrg6Click = () => {
  setOrg6(!openOrg6);
  };
  const handleOrg7Click = () => {
    setOrg7(!openOrg7);
  };
  const handleOrg8Click = () => {
      setOrg8(!openOrg8);
  };
  return(
  <div>
<ListItem button
  onClick={handleOrg1Click}
>
      <ListItemIcon>
             <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Πίνακας" />
            {openOrg1 ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={openOrg1} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
             <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <ListItem button onClick={() => history.push("/")}>
                        <HomeIcon />
                   </ListItem>
                </ListItemIcon>
               <ListItem button onClick={() => history.push("/")}>
                <ListItemText primary="Αρχική" />
                </ListItem>
             </ListItem>
         </List>
  </Collapse>
<ListItem button
  onClick={handleOrg2Click}
>
        <ListItemIcon>
            <MenuBookIcon />
        </ListItemIcon>
    <ListItemText primary="Μενού" />
    {openOrg2 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg2} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                   <ListItem button onClick={() => history.push("/post")}>
                     <TrendingFlatIcon />
                   </ListItem>
                </ListItemIcon>
               <ListItem button onClick={() => history.push("/post")}>
                <ListItemText primary="Σύνολο Μενού" />
                </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ListItem button onClick={() => history.push("/add")}>
                      <AddIcon  />
                  </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/add")}>
                        <ListItemText primary="Προσθήκη Μενού" />
                 </ListItem>
           </ListItem>
      </List>
  </Collapse> 
<ListItem button
  onClick={handleOrg3Click}
>
        <ListItemIcon>
            <PagesIcon />
        </ListItemIcon>
    <ListItemText primary="Σελίδες" />
    {openOrg3 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg3} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                      <ListItem button onClick={() => history.push("/post")}> 
                           <TrendingFlatIcon />
                     </ListItem>
                </ListItemIcon>
                   <ListItem button onClick={() => history.push("/post")}>
                            <ListItemText primary="Σύνολο Σελίδων" />
                   </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/add")}>
                         <AddIcon />
                     </ListItem>
                </ListItemIcon>
                  <ListItem button onClick={() => history.push("/add")}>
                           <ListItemText primary="Προσθήκη Σελίδας" />
                 </ListItem>
           </ListItem>
      </List>
  </Collapse>
<ListItem button
  onClick={handleOrg4Click}
>
        <ListItemIcon>
            <PostAddIcon />
        </ListItemIcon>
    <ListItemText primary="Δημοσιεύσεις" />
    {openOrg4 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg4} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/post")}>
                         <TrendingFlatIcon />
                     </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/post")}>
                        <ListItemText primary="Σύνολο Δημοσιέυσεων" />
                </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <ListItem button onClick={() => history.push("/add")}>
                         <AddIcon />
                    </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/add")}>
                       <ListItemText primary="Προσθήκη Δημοσίευσης" />
               </ListItem>
           </ListItem>
      </List>
  </Collapse>
<ListItem button
  onClick={handleOrg5Click}
>
        <ListItemIcon>
            <CategoryIcon />
        </ListItemIcon>
    <ListItemText primary="Κατηγορίες" />
    {openOrg5 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg5} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/post")}> 
                           <TrendingFlatIcon />
                     </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/post")}>
                       <ListItemText primary="Σύνολο Κατηγοριών" />
                </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/add")}>
                          <AddIcon />
                     </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/add")}>
                       <ListItemText primary="Προσθήκη Κατηγορίας" />
               </ListItem>
           </ListItem>
      </List>
  </Collapse>
<ListItem button
  onClick={handleOrg6Click}
>
        <ListItemIcon>
            <DescriptionIcon />
        </ListItemIcon>
    <ListItemText primary="Eγγραφα" />
    {openOrg6 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg6} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/post")}> 
                          <TrendingFlatIcon />
                     </ListItem>           
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/post")}>
                       <ListItemText primary="Σύνολο Εγγράφων" />
                </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/add")}>
                          <AddIcon />
                     </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/add")}>
                       <ListItemText primary="Προσθήκη Εγγράφων" />
                </ListItem>
           </ListItem>
      </List>
  </Collapse>
<ListItem button
  onClick={handleOrg7Click}
>
        <ListItemIcon>
            <ImageIcon />
        </ListItemIcon>
    <ListItemText primary="Εικόνες" />
    {openOrg7 ? <ExpandLess /> : <ExpandMore />}
</ListItem>
  <Collapse in={openOrg7} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <TrendingFlatIcon />
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/post")}>
                       <ListItemText primary="Σύνολο Εικόνων" />
                </ListItem>
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <ListItem button onClick={() => history.push("/add")}>
                         <AddIcon />
                     </ListItem>
                </ListItemIcon>
                <ListItem button onClick={() => history.push("/add")}>
                       <ListItemText primary="Προσθήκη Εικόνας" />
                </ListItem>
           </ListItem>
      </List>
  </Collapse>
<ListItem button
  onClick={handleOrg8Click}
>
        <ListItemIcon>
            <BackupIcon />
        </ListItemIcon>
    <ListItemText primary="Αρχεία" />
    {openOrg8 ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={openOrg8} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                      <ListItem button onClick={() => history.push("/post")}>
                           <TrendingFlatIcon />
                     </ListItem>          
                </ListItemIcon>
                     <ListItem button onClick={() => history.push("/post")}>
                           <ListItemText primary="Σύνολο Αρχείων" />
                     </ListItem>        
           </ListItem>
           <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                      <ListItemText primary="Φόρτωση Αρχείων" />
           </ListItem>
          
      </List>
  </Collapse>
</div>
);
  }
export default ListItems;     
   