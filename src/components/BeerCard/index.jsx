import React  from 'react';
import { useDispatch } from 'react-redux';
import { Card, ButtonGroup, Typography, Tooltip, CardMedia, IconButton } from '@material-ui/core';
import { Add, Minimize } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings';
import { addCountAction, minusCountAction, deleteCardAction } from '../../store/cardReducer'
import MultiPicker from '../MultiPicker'
import useStyles from './style'

const BeerCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image='https://tsiran.am/images/products/007422/798db4b3e83ff47b5238ac7231f52a12/764x600.jpg'
          title="Contemplative Reptile"
        />
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <MultiPicker data={data} status={true}/>
      <Typography gutterBottom variant="h6" component="h6" className={classes.count}>
        Кол-во {data.count}
      </Typography>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
        size="large"
        className={classes.ButtonGroup}
      >
        <Tooltip title="Plus">
            <IconButton aria-label="plus" size='medium' onClick={() => dispatch(addCountAction(data.id))}>
                <Add />
            </IconButton>
        </Tooltip>
        <Tooltip title="Minus">
          <IconButton aria-label="minimize" size='medium' onClick={()=> dispatch(minusCountAction(data.id))}>
            <Minimize />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
        size="large"
        className={classes.ButtonGroup}>
        <Tooltip title="Change">
          <IconButton aria-label="change" size='medium' onClick={()=> console.log(data.id)}>
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="delete" size='medium' onClick={()=> dispatch(deleteCardAction(data.id))}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      
    </Card>
  );
}

export default BeerCard;
