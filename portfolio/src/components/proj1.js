import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom"; 
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiCss3, DiFirebase, DiHtml5, DiRuby } from "react-icons/di";
import '../style/proj.css'

const useStyles = makeStyles({
    root: {
        width: '60%',
        height: '100%',
        margin: '20px',
        marginTop: '20px',
        marginLeft: '15%'
    },
    media: {
        height: 500,
    },
});


let about = <div>
    <div style={{ textAlign: 'center' }}> <DiRuby /> <DiFirebase /><DiHtml5 /> <DiCss3 /> <BsFillBootstrapFill /></div>
    <p>Travel social media website that allows users to connect based on specific destinations. Each city page contained useful traveller information such as current weather, flight prices, currency and city summary.</p>
    <p>Used Multiple APIs to dynamically display current information based on each user and destination.
        <br />Used BootStrap for styling</p>
</div>

let pic = 'https://media.giphy.com/media/jorCdFGEIMwBOApJiN/giphy.gif'

export default function Proj1(props) {
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

                    <Typography gutterBottom variant="p" component="p" className='proj-name'>
                        TravelFrog
                    </Typography>
                    <div className='header-div' style={{ display: 'flex',flexDirection: 'column', 'justify-content': 'space-evenly' }}>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://travelfrog.herokuapp.com' target="_blank">Demo</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://github.com/Joemokhtarali/Travel-Frog-' target="_blank">Github</a>
                        </Typography>
                    </div>
                    <br />
                    <Typography variant="body2" color="textSecondary" component="p"  >
                        {about}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
