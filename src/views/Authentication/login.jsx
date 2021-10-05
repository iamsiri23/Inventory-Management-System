import React,{useState} from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper,link,Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './style';
//added newly
import PropTypes from 'prop-types';
import useToken from "../../useToken";
import loginImage from "../../assets/img/loginImg.jpg";
import { WindowSharp } from '@mui/icons-material';
// import {useFormik} from "formik";
// import * as Yup from "yup";

// const validationSchema=Yup.object({
//   email:Yup.string().required("Required"),
//   password:Yup.string().required("Required")

// });

//uncommented newly
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }




//email and password need to be validated
export default function Login() {
  // function validate(values){
  //   const errors={};
  //   if(!values.email){
  //     errors.email="Required";
  //   }
  //   if(!values.password){
  //     errors.password="Required";
  //   }
  //   return errors;
  // }
  // const {handleSubmit,handleChange,values,errors}=useFormik({
  //   initialValues:{
  //     email:"",
  //     password:""
  //   },
  //   validationSchema,
  //   onSubmit(values){
  //     console.log(values);
  //   }
  // });

  const classes = useStyles();
  const [userType, setUserType] = React.useState('');
  const { token, setToken } = useToken();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const[isRegistered,setRegister]=useState(false);
  // const[errormessage,setErrorMessage]=useState('');
  
  // function handleError(){
  //   if(username!==fetchedvalue || password!==fetchedvalue){
  //     setErrorMessage("check ur username and password")
  //     console.log(errormessage)
  //   }
 
    
  // }
console.log(userType)
  const handleSubmit = async e => {
    e.preventDefault();
    //newly commented
    console.log("hi")
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    if(userType=="admin"){
     window.location.replace("/admin/dashboard")
    
    }
    if(userType=="lecturer"){
      window.location.replace("/lecturer/dashboard")
     
    }
    if(userType=="tech"){
      window.location.replace("/tech/dashboard")
     
    }
    if(userType=="student"){
      window.location.replace("/student/dashboard")
     
    }
  }

  const handleChange = (event) => {
    setUserType(event.target.value);
    console.log(userType)
  };

  const handleEdit=()=>{
    
  }

  function handleRegister(){
    console.log("there")
    setRegister(true);
  }
  function handleNonRegister(){
    console.log("thereis")
    setRegister(false);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">User Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userType}
                onChange={handleChange}
                label="UserType"
                margin="normal"
                required fullWidth
              >
                <MenuItem value={"admin"}onClick={handleNonRegister}>Admin</MenuItem>
                <MenuItem value={"lecturer"}onClick={handleNonRegister}>Lecturer</MenuItem>
                <MenuItem value={"tech"}onClick={handleNonRegister}>Technical Officer</MenuItem>
                {/* newly added */}
                <MenuItem value={"student"} onClick={handleRegister}>Student</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              required onChange={e => setUserName(e.target.value)}
              // values={values.email}
            />
            {/* {errors.email? errors.email:null} */}

            <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required onChange={e => setPassword(e.target.value)}
              // values={values.password}
            />
             {/* {errors.password? errors.password:null} */}


            <Button
              onSubmit={handleSubmit}
              // onClick={handleError}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
               disabled={!username || !password}
            >
              Sign In
            </Button>
           {/* {errormessage} */}
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2" onClick={()=>window.location.replace('/forgotPassword')}>
                {/* forgot password need to be implemented */}
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                  {isRegistered && 
                  <Link href="/signup"onvariant="body2" onClick={()=>window.location.replace('/signup')}>
                    { "Register"}
                  </Link>}
                  {/* <button onClick={()=>{window.location.replace('/signup')}} >
                    Register
                  </button> */}
                </Grid>

            </Grid>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}

//added newly
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}