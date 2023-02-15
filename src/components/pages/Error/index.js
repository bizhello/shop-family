import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

const Error = () => {
    const classes = useStyles();
    return ( 
        <>
        <section className={classes.error}>
            <h2 className={classes.title}>404</h2>
            <p className={classes.text}>Страница не найдена</p>
            <NavLink className={classes.back} to="../">Назад</NavLink>
        </section>

    </>
    );
}
 
export default Error;