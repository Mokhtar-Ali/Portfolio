import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
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
        <DiJavascript1 /><DiReact /><DiHtml5 /><DiCss3 />
    </div>
    <p>A Travel Blog for four of my favorite Countires I have traveled to, Ecuador, Egypt, Colombia and Thailand.</p>
    <p>I write about the country, its culture, food, traditions, weather and all the tips you need to know before visiting.</p>
    <p>App created using React, HTML, Custom CSS for styling and Material-ui.</p>

</div>
let pic = 'https://media.giphy.com/media/YOSYLdGBySzOJAfAeO/giphy.gif'

export default function Proj4(props) {
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
                        PassportsHub
                    </Typography>
                    <div className='header-div' style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://passportshub.website/' target="_blank" >Website</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            Github:
                    </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://github.com/Joemokhtarali/travelblog' target="_blank"> FrontEnd</a>
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
