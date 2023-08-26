import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Buttons from './buttons';


const Card2=({id,name,quantity,price,url,fn})=>{
    console.log('Card 2 called');
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
        <Typography gutterBottom variant="p" component="div">
        Quantity : {quantity}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        Price : {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Buttons name={'+'} pizza_id={id} fn={fn} val="+"/>
        <Buttons name={'-'} pizza_id={id} fn={fn} val="-"/>
      </CardActions>
    </Card>
    </div>
    );
}
export default Card2;