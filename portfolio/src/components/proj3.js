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
        <DiRuby /><DiJavascript1 /><DiReact /><DiFirebase /><DiHtml5 /><DiCss3 />
    </div>
    <p>A simulator game to save the environment by planting trees to increase Oxygen’s level and decrease</p>
    <p>Ruby on Rails RESTful Api & Postgresql for database. <br />React implemented for Frontend user interface & state management.
</p>

</div>
let pic = 'https://media.giphy.com/media/ZZqgVsXhnqf4xyE9z8/giphy.gif'

export default function Proj3(props) {
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
                        Air Patrol
                    </Typography>
                    <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://travelfrog.herokuapp.com' target="_blank" >Demo</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            Github:
                    </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://github.com/Joemokhtarali/Mod4-project-FrontEnd' target="_blank"> FrontEnd</a>
                        </Typography>

                        <Typography gutterBottom variant="p" component="p" className='proj-link'>
                            <a className='proj-a' href='https://github.com/Joemokhtarali/Mod4-project-BackEnd' target="_blank"> BackEnd</a>
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
