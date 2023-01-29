import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

import Header from './Header';
import MainInput from './Input'
import InputWithButton from './SelectWithButton'
import MainModal from './Modal'
import CardList from './CardList'

import './App.css';
import { useSelector } from 'react-redux';

const UseStyles = makeStyles((theme) => ({
    mainContent: {
        color: theme.palette.common.white,
        position: 'relative',
        padding: theme.spacing(6),
    },
}))

function App() {
    const classes = UseStyles()
    const popup = useSelector(state => state.popup)
    return (
        <>
            <Header />
            <Container className={classes.mainContent}>
                <MainInput />    
                <InputWithButton />
                <CardList />
            </Container>
            {popup && <MainModal />}
        </>
  );
}

export default App;
