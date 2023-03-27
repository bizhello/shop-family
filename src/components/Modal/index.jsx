import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImagePickerEditor, {
  ImagePickerConf,
} from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

import { Modal, TextField, ButtonGroup, Button } from "@material-ui/core";

import { popupToggleAction } from "../../store/popupReducer";
import cardService from "../../services/CardService";
import {
  urlAction,
  titleAction,
  clearAction,
  countAction,
} from "../../store/modalCardReducer";
import { addCardAction } from "../../store/cardReducer";
import { changeCard } from "../../store/asyncActions/cards";
import MultiPicker from "../MultiPicker";
import useStyles from "./style";
import ImageService from "../../services/ImageService";

const MainModal = () => {
  const config2 = {
    borderRadius: "8px",
    language: "en",
    width: "330px",
    height: "210px",
    objectFit: "contain",
    compressInitial: null,
  };

  const dispatch = useDispatch();
  const classes = useStyles();

  const popup = useSelector((state) => state.popup.popup);
  const modalCard = useSelector((state) => state.modalCard);

  const handleClose = () => {
    dispatch(popupToggleAction());
    dispatch(clearAction());
  };

  const handelSave = async () => {
    if (modalCard.id) {
      const { id, url, title, dateFrom, dateTo, count } = modalCard;
      try {
        dispatch(changeCard(id, { title, dateFrom, dateTo, count: +count }));
        await ImageService.createImageById(id, url);
      } catch (error) {
        console.log("ОШИБКА изменения товара");
      }
    } else {
      const card = {
        title: modalCard.title,
        dateFrom: modalCard.dateFrom,
        dateTo: modalCard.dateTo,
        count: +modalCard.count,
      };
      try {
        // // modalCard.url - это base64
        // const formData = new FormData();
        // // const blob = new Blob([modalCard.url], { type: "image/png" });
        // const fileOfBlob = new File([modalCard.url], "image.png", {
        //   type: "image/png",
        // });
        // formData.append("image", fileOfBlob);

        const formData = new FormData();
        // const file = new File([modalCard.url], "image.png", {
        //   type: "image/png",
        // });
        formData.append("image", modalCard.url, 'картинка');
        console.log('asdasdasd')
        const newCard = await cardService.createCard(card);
        await ImageService.createImageById(newCard.data.id, formData);
        dispatch(addCardAction(newCard.data));
      } catch (e) {
        console.log("Ошибка добавления товара");
      }
    }

    dispatch(popupToggleAction());
    dispatch(clearAction());
  };

  return (
    <Modal
      open={popup}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          {/* <TextField
            id="standard-basic"
            label="Ссылка на картинку"
            value={modalCard.url}
            onChange={(e) => dispatch(urlAction(e.target.value))}
          /> */}
          <div>
            <ReactImagePickerEditor
              config={config2}
              imageSrcProp={modalCard.url}
              imageChanged={(newDataUri) => {
                dispatch(urlAction(newDataUri));
              }}
            />
          </div>
          <TextField
            id="standard-basic"
            label="Название товара"
            value={modalCard.title}
            onChange={(e) => dispatch(titleAction(e.target.value))}
          />
          <MultiPicker modal={true} />
          <TextField
            id="standard-basic"
            label="Кол-во товара"
            value={modalCard.count}
            onChange={(e) => dispatch(countAction(e.target.value))}
          />
          <ButtonGroup
            variant="contained"
            color="primary"
            className={classes.ButtonGroup}
          >
            <Button onClick={() => handelSave()}>Сохранить</Button>
            <Button onClick={() => handleClose()}>Закрыть</Button>
          </ButtonGroup>
        </form>
      </div>
    </Modal>
  );
};

export default MainModal;
