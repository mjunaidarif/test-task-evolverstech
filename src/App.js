import './App.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { userAction } from './state/actions/userAction';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    width: 900,
    marginTop: 20,
    margin: "auto"
  },
});


function App() {

  const {users} = useSelector((state) => state.user);
  const dispatch = useDispatch();

   console.log("users",users)


  const handleLoadUsers = () => {
    dispatch(userAction()).then((res)=>{
    });
  }
      
    const classes = useStyles();
  
  return (
    <div className="App">
      <h1>Test Task Evolvers Tech</h1>
      <Button variant='contained' color='secondary' onClick={handleLoadUsers} >Load Users</Button>
      {users?.data && <TableContainer className={classes.table} component={Paper}>
      <Table stickyHeader size="small" aria-label="a dense table">
        <TableHead>
          {/* {Object.keys(users ?users[0] :{}).map(title => <TableCell>{title}</TableCell>)} */}
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>phone</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users?.data?.map(({id,name,username,email,phone}, index)=><TableRow  key={index}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phone}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>}
    {users?.loading && <CircularProgress />}
    </div>
  );
}

export default App;

