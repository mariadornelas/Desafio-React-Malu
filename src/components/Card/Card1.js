import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import services from '../../services.png';
import './Card.css';

export default function CardService1() {
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
            Modelagem
          </Typography>
          <Typography variant="body2" className='description' >
            Projetos de modelagem 2D e 3D de peças para diversas estruturas.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}