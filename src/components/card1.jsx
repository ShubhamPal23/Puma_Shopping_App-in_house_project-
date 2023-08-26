import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Buttons from './buttons';


const Card1=({id,name, desc,url,fn})=>{
    return (
        <div style={{margin: '4%'}} >
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="170"
        image={url}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Buttons name={"Add To Cart"} pizza_id={id} fn={fn} val="+"/>
      </CardActions>
    </Card>
    </div>
    );
}
export default Card1;