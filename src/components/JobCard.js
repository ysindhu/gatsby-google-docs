import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
	root: {
		width: '330px',
		height: '308px',
		margin: "20px 30px 20px 60px",
		'&:hover':{
			borderColor:'#0365f2',
		}
	},
	root2: {
		maxWidth: '690px',
		maxHeight: '138px',
        padding : '1.5%',
        borderRadius : '10px'
	},
	logoPadding: {
		//padding: "5% 3% 3% 5%",
		paddingLeft:'7%',
		paddingTop:'7%',
		paddingRight:'3%',
		paddingBottom:'3%'
	},
	header: {
		 display: "flex",
		 justifyContent: "space-between",
		 alignItems: "center",
		 objectFit:'contain',
	},
	spacing: {
		// display: "flex",
        // width : '65px',
		// paddingRight: "5%",
		// justifyContent: "space-around",
		color:'#5f7381',
		width: '52px',
		flexGrow: '0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-spacearound',
		paddingRight:"7%",
		alignItems: 'center',
		gap: '10px',
		padding: '0',
		paddingBottom:'50px'
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
    iconGrp : {
        display : 'inline-flex',
        flexDirection : 'row',
		justifyContent: 'flexStart',
  		alignItems: 'center',
		paddingTop:'3%',
        // gap : '8px'
    },
    roleTypoHeader : {
        fontSize : '18px',
        fontWeight : '600',
        color : '#324552',
        lineHeight : 1.33,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.2px'
    },
    companyLocationTypoHeader : {
        fontSize : '16px',
        fontWeight : 'normal',
        color : '#5f7381',
        lineHeight : 1.57,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.1px',
        paddingTop : '2%'
    },

    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '20px'
    },
	moreIconPadding :{
		color : '#5f7381',
	}

});

export default function JobCard({
	logo,
	roleName,
	companyName,
	location,

}) {
	const classes = useStyles();
		return (
			<div>
			
				<Card className={classes.root} variant="outlined">
					
						<div className={classes.header}>
							<img
								className={classes.logoPadding}
								alt={logo}
								src={logo}
								width="80px"
								height="80px"
							/>
						
						</div>
						<CardContent>
							<Typography gutterBottom variant="h3">
							{roleName}
							</Typography>

							<Typography variant="h6">
								{companyName}
							</Typography>
							<Typography variant="h6">
								{location}
							</Typography>

						
						
						</CardContent>
				
				</Card>
			
			</div>
		);
		}