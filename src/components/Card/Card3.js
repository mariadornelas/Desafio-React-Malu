import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import services from '../../service3.png';
import './Card.css';

export default function CardService3() {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={services}
          alt="green iguana"
        />
        <CardContent className='content-card' >
          <Typography gutterBottom variant="h5" component="div" className='title' >
            Consultoria
          </Typography>
          <Typography variant="body2" className='description' >
            Palestras e Workshops voltados para a área aeroespacial.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}