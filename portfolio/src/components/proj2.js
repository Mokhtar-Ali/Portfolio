import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import Pic from './pic.jpg'
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiCss3, DiFirebase, DiHtml5, DiJavascript1, DiReact, DiRuby } from "react-icons/di";
import '../style/proj.css'

const useStyles = makeStyles({
    root: {
        width: '500px',
        padding: '10px',
        margin: '20px',
        marginTop: '20px',
    },
    media: {
        height: 300,
    },
});

let about = <div>
    <div style={{ textAlign: 'center' }} >
        <DiRuby /><DiJavascript1 /><DiReact /><DiFirebase /><DiHtml5 /><DiCss3 /><BsFillBootstrapFill />
    </div>
    <p>A Social Media App that enables users to create or find Activities in their City or abroad and be able to chat with others who are interested in the same activities to help to make new adventures and friends.</p>
    <p>Implemented Ruby on Rails RESTful API to create & manipulate 7 models using Postgresql. 
Implemented React-Redux to manage the application’s state, Action creators to keep DR.
Utilized Google Maps API for location & Web Sockets to enable chat & Material Ui for styling.
</p></div>
let pic = 'https://media.giphy.com/media/eJvpHNO69GNwKQFoZE/giphy.gif'

export default function Proj2(props) {
    let history = useHistory();
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/* <img src={pic} /> */}
                <CardMedia
                    className={classes.media}
                    image={pic}
                    title="Contemplative Reptile"
                // onClick={() => history.push(`/activities/${id}`)}
                />

                <CardContent>
                    <Typography gutterBottom variant="p" component="p" className='proj-name' >
                        MyActivities
                    </Typography>
                    <div className='header-div' style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
                        <Typography gutterBottom variant="p" component="p" className='proj-link' >
                            <a className='proj-a' href='https://youtu.be/UHQR2-ej7ow' target="_blank">Demo</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            Github:
                    </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link' >
                            <a className='proj-a' href='https://github.com/Joemokhtarali/Mod-5-project-frontend' target="_blank">FrontEnd</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link' >
                            <a className='proj-a' href='https://github.com/Joemokhtarali/my-activities-backend' target="_blank">BackEnd</a>
                        </Typography>
                    </div>
                    <br />
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {about}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
