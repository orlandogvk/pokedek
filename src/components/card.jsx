import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function Cardp(props){
    const classes = useStyles();

    return (        
        <div className="card">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Pokemon"
                    height="130"
                    image={props.image}
                    title={props.nameEng}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nameEng}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nameJap}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div style={{width:"100%"}}>
                            <div style={{padding:"1em"}}>
                                <h6 style={{margin:"5px 0px"}}>HP</h6>
                                <LinearProgress variant="determinate" value={props.hp}/>
                                <h6 style={{margin:"5px 0px"}}>{props.hp}</h6>
                            </div>
                            <div style={{padding:"1em"}}>
                                <h6 style={{margin:"5px 0px"}}>Ataque</h6>
                                <LinearProgress variant="determinate" value={props.attack}/>
                                <h6 style={{margin:"5px 0px"}}>{props.attack}</h6>
                            </div>
                            <div style={{padding:"1em"}}>
                                <h6 style={{margin:"5px 0px"}}>Defensa</h6>
                                <LinearProgress variant="determinate" value={props.defense}/>
                                <h6 style={{margin:"5px 0px"}}>{props.defense}</h6>
                            </div>
                            <div style={{padding:"1em"}}>
                                <h6 style={{margin:"5px 0px"}}>Velocidad</h6>
                                <LinearProgress variant="determinate" value={props.speed}/>
                                <h6 style={{margin:"5px 0px"}}>{props.speed}</h6>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                    {props.types.map((type,index)=>{
                        switch(type){
                            case "Grass":
                                return <span key={index} className={`types grass ${type.class}`}>{type}</span>
                            case "Poison":
                                return <span key={index} className={`types poison ${type.class}`}>{type}</span>
                            case "Fire":
                                return <span key={index} className={`types fire ${type.class}`}>{type}</span>
                            case "Water":
                                return <span key={index} className={`types water ${type.class}`}>{type}</span>
                            case "Flying":
                                return <span key={index} className={`types flying ${type.class}`}>{type}</span>
                            case "Bug":
                                return <span key={index} className={`types bug ${type.class}`}>{type}</span>
                            case "Normal":
                                return <span key={index} className={`types normal ${type.class}`}>{type}</span>
                            default:
                                return null
                        }
                    })    
                    }
                </CardActions>
            </Card>
           
        </div>  
        
    )
}