import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  ButtonGroup,
  Typography,
  Tooltip,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { Add, Minimize } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import Settings from "@material-ui/icons/Settings";
import { popupToggleAction } from "../../store/popupReducer";
import { changeAction } from "../../store/modalCardReducer";
import MultiPicker from "../MultiPicker";
import useStyles from "./style";
import {
  increment,
  decrement,
  deleteCard,
} from "../../store/asyncActions/cards";

const BeerCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const changeCard = () => {
    dispatch(changeAction(data));
    dispatch(popupToggleAction());
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.REACT_APP_API_URL}/static/images/${data.id}/image.webp`}
        // image="http://localhost:8000/static/images/64199671c3d804b5b764e521/image.jpg"
        title="Contemplative Reptile"
      />
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.title}
      >
        {data.title}
      </Typography>
      <MultiPicker data={data} modal={false} />
      <Typography
        gutterBottom
        variant="h6"
        component="h6"
        className={classes.count}
      >
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
          <IconButton
            aria-label="plus"
            size="medium"
            onClick={() => dispatch(increment(data.id))}
          >
            <Add />
          </IconButton>
        </Tooltip>
        <Tooltip title="Minus">
          <IconButton
            aria-label="minimize"
            size="medium"
            onClick={() => dispatch(decrement(data.id))}
          >
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
        className={classes.ButtonGroup}
      >
        <Tooltip title="Change">
          <IconButton
            aria-label="change"
            size="medium"
            onClick={() => changeCard()}
          >
            <Settings />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            size="medium"
            onClick={() => dispatch(deleteCard(data.id))}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </Card>
  );
};

export default BeerCard;
