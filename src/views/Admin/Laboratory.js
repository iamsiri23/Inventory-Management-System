import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import purple from '@material-ui/core/colors/purple';
import { deepPurple } from "@material-ui/core/colors";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: 200,
    borderRadius:"5px",
    // height: "100px",
    backgroundColor: "white",
    border: '2px solid blue',
    //boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
}));

const styles = {
  // root: {
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  
};



// const useStyles = makeStyles(styles);

export default function TableList() {
  function Entry(props){
  
    return(<div>
            <MenuItem >{props.description}</MenuItem>
      
      </div>);
  }
  function createEntry(Building){
    return <Entry
      key={Building.id}
      description={Building.name}
    />
  }
  const [open,setOpen]=React.useState(false);
  const [building, setBuilding] = React.useState('');

  const handleBuilding = (event) => {
    setBuilding(event.target.value);
  };

  const classes = useStyles();
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const handleEdit=()=>{
    window.location.replace("/lecturer/lecturers/edit/1")
  }
 

  return (
    <div>
    
   
      <Modal  open={open} onClose={onCloseModal}  aria-labelledby="simple-modal-title">  
    <div className={classes.paper}>
        {/* <body backgroundColor={deepPurple}>
        <h2 id="simple-modal-title">Add Laboratory</h2>
        </body> */}
        <h2 style={{color:"blue"}}>Add Laboratory</h2>
      
      <div>
         
       
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
     {/* need to be validated */}
      <div>
        <TextField id="standard-error" label="Lab ID" variant="standard"/>
        <TextField id="standard-error" label="Name" variant="standard"/>
        <TextField id="standard-error" label="Floor" variant="standard"/>
        <div style={{padding:"10px 0px"}}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-simple-select-standard-label">Building</InputLabel>
        <Select
           style={{width: `${220}px`}} 
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={building}
            onChange={handleBuilding}
            label="hib"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            
                <div>
        {Building.map(createEntry)}
        </div>
          
          </Select>
       
        
      </FormControl>
      </div>
        {/* <TextField id="standard-error" label="Building" variant="standard"/> */}

       
      
      </div>
    </Box>
    {/* submit button inside modal need to be implemented */}
        <div style={{padding:"10px"}}>
        <Button variant="contained"  color="light blue" size="small" className={classes.button} startIcon={<SaveIcon />}>
        Submit
      </Button>
      </div>
          </div>
      {/* <SimpleModal /> */}
    </div>
  
          {/* <h2>Add Lecturer</h2> */}
         
        </Modal>
   
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Laboratory Table</h4>
          
          </CardHeader>
          <CardBody>
          <div style={{ height: 450, width: '100%' }}>
                         <DataGrid rows={rows} columns={columns} />
                    </div>
          </CardBody>
        </Card>
      </GridItem>
     
    </GridContainer>
    <div className={classes.root}>
    <Button onClick={onOpenModal}  variant="contained" color="secondary">
        Add Laboratory
      </Button>
      </div>
      
    </div>
  );
}





const columns = [
    
    {
        field: 'ID',
        headerName: 'ID',
        flex: 0.5,
        minwidth:100,
        
      },
      {
        field: 'LabID',
        headerName: 'Lab ID',
         flex: 0.5,
        minWidth: 100,
      },
      {
        field: 'Name',
        headerName: 'Name',
         flex: 0.5,
        minWidth: 100,
      },
      {
        field: 'Building',
        headerName: 'Building',
         flex: 0.5,
        minWidth: 130,
      },
      {
        field: 'Floor',
        headerName: 'Floor',
         flex: 0.3,
        minWidth: 100,
      },
  {
    //edit and delete button need to be implemented
    field: 'action',
    headerName: 'Action',
    minwidth:150,
    flex:0.8,
    renderCell: (params) => (
      <strong>
        
        <IconButton aria-label="edit" >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        
        
      </strong>
    ),
  }
];

// fetch()
const rows = [
  {
    id: 1,
    ID:1,
    LabID:143,
    Name:"CSE Lab",
    Building:"Sumanadasa",
    Floor:4,
  },
  {
    id: 2,
    ID:2,
    LabID:143,
    Name:"CSE Lab",
    Building:"Sumanadasa",
    Floor:4,
  },
  {
    id: 3,
    ID:3,
    LabID:143,
    Name:"CSE Lab",
    Building:"Sumanadasa",
    Floor:4,
  },
];


const Building=[
  {
      id:1,
      name:"cse block"
  },
  {
      id:2,
      name:"civil block"
  },
  {
      id:3,
      name:"entc block"
  }

]