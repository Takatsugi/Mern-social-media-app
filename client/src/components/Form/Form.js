import React, {useState} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper, form } from '@material-ui/core';
import Filebase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
const Form = () => {
    const [postData, setPostData] = useState({
        title: '', message:'', tags:'', selectedFile:''
    });
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({...postData, name: user?.result?.name}));
    };
    const clear = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a post</Typography>
            <TextField name='title' variant='outlined' label='title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
            <TextField name='message' variant='outlined' label='message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
            <TextField name='tags' variant='outlined' label='tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
            <div className={classes.fileInput}>
                <Filebase type='file' multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile: base64})} />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type='submit' fullWidth>Submit</Button>
            <Button variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
            

        </Paper>
    );
};

export default Form;