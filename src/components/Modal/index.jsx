import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, TextField, ButtonGroup, Button } from '@material-ui/core';

import { popupToggleAction } from '../../store/popupReducer'

import MultiPicker from '../MultiPicker'
import useStyles from './style'

const MainModal = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const popup = useSelector(state => state.popup.popup)

    const handleClose = () => {
        dispatch(popupToggleAction());
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
                    <TextField id="standard-basic" label="Ссылка на картинку" />
                    <TextField id="standard-basic" label="Название пива" />
                    <MultiPicker status={false}/>
                    <TextField id="standard-basic" label="Кол-во бутылок" />
                    <ButtonGroup variant="contained" color="primary" className={classes.ButtonGroup}>
                        <Button>Сохранить</Button>
                        <Button onClick={()=> handleClose()}>Закрыть</Button>
                    </ButtonGroup>
                </form>
            </div>
        </Modal>
    );
}

export default MainModal;
