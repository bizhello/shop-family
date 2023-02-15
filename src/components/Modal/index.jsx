import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, TextField, ButtonGroup, Button } from '@material-ui/core';

import { popupToggleAction } from '../../store/popupReducer'
import { urlAction, titleAction, clearAction, countAction } from '../../store/modalCardReducer'
import { addCardAction, changeCardAction } from '../../store/cardReducer'
import MultiPicker from '../MultiPicker'
import useStyles from './style'

const MainModal = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const popup = useSelector(state => state.popup.popup)
    const modalCard = useSelector(state => state.modalCard)

    const handleClose = () => {
        dispatch(popupToggleAction());
        dispatch(clearAction())
    };

    const handelSave = () => {
        if(modalCard.id) {
            dispatch(changeCardAction(modalCard))
        } else {
            dispatch(addCardAction(modalCard))
        }

        dispatch(popupToggleAction());
        dispatch(clearAction())
    }

    return (
        <Modal
            open={popup}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Ссылка на картинку" value={modalCard.url} onChange={(e)=> dispatch(urlAction(e.target.value))}/>
                    <TextField id="standard-basic" label="Название пива" value={modalCard.title} onChange={(e)=> dispatch(titleAction(e.target.value))}/>
                    <MultiPicker modal={true}/>
                    <TextField id="standard-basic" label="Кол-во бутылок" value={modalCard.count} onChange={(e)=> dispatch(countAction(e.target.value))}/>
                    <ButtonGroup variant="contained" color="primary" className={classes.ButtonGroup}>
                        <Button onClick={()=> handelSave()}>Сохранить</Button>
                        <Button onClick={()=> handleClose()}>Закрыть</Button>
                    </ButtonGroup>
                </form>
            </div>
        </Modal>
    );
}

export default MainModal;
