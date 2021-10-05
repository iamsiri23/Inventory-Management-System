import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
//import Warning from "@material-ui/icons/Warning";
//import DateRange from "@material-ui/icons/DateRange";
//import LocalOffer from "@material-ui/icons/LocalOffer";
//import Update from "@material-ui/icons/Update";
import DescriptionIcon from "@material-ui/icons/Description";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
//import AccessTime from "@material-ui/icons/AccessTime";
//import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
//import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { People } from "@material-ui/icons";

const useStyles = makeStyles(styles);
var today = new Date(),

date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                {/* <Icon>content_copy</Icon> */}
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total Requests</p>
              {/* fetch() */}
              <h3 className={classes.cardTitle}> 49</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total nummber of Requests
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Pending Requests</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of pending requests
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                {/* <Icon>info_outline</Icon> */} <People />
              </CardIcon>
              <p className={classes.cardCategory}>Approved Requests</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of approved requests
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>Rejected requests</p>
                {/* fetch() */}
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DescriptionIcon />
                Total number of rejected requests
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
      <GridContainer>
       
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Student Requests</h4>
              <p className={classes.cardCategoryWhite}>
                Requests as of {date}
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Request ID", "Student ID", "Lecturer ID", "Equpiment ID","Reason"]}
                // fetch()
                tableData={[
                  ["1", "Dakota Rice", "abc@gmail.com", "Niger","reason"],
                  ["2", "Minerva Hooper", "abc@gmail.com", "Curaçao","reason"],
                  ["3", "Sage Rodriguez", "abc@gmail.com", "Netherlands","reason"],
                  ["4", "Philip Chaney", "abc@gmail.com", "Korea, South","reason"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
       
      </GridContainer>
    </div>
  );
}
