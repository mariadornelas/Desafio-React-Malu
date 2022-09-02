import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import member10 from '../../member10.jpg';
import './MemberCard.css';

export default function Members10() {
  return (
    <Card className='card1' sx={{ maxWidth: 310 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="200"
          height="280"
          image={member10}
          alt="green iguana"
        />
        <CardContent className='content-card1' >
          <Typography gutterBottom variant="h5" component="div" className='title1' >
            Leonardo
          </Typography>
          <Typography variant="body2" className='description1' >
            Email: barbara@astro.com
            Aniversário: 28/08/1999
            Departamento: Projetos
            Cargo: Diretor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}