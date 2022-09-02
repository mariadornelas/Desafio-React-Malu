import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import services from '../../service2.png';
import './Card.css';

export default function CardService2() {
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
            Inteligência artificial
          </Typography>
          <Typography variant="body2" className='description' >
            Desenvolvimento de sistemas automatizados com tecnologia de ponta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}