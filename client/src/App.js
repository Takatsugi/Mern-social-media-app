import React, {useEffect} from "react";
import Auth from "./components/Auth/Auth";
import Home from './components/Home/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import useStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import socialmeee from './images/socialmeee.jpg'
import Posts from "./components/Posts/Posts";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";



const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
  <Navbar/>      

        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/auth" exact element={<Auth/>} />
        </Routes>


    </Container>
  </BrowserRouter>
  )}

export default App;