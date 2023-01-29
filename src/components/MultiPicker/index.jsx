import { CardContent } from '@material-ui/core';
import DatePickers from '../DatePicker'
import useStyles from './style'

const MultiPicker = ({ data, status }) => {
    const classes = useStyles();
    return ( 
        <CardContent className={classes.date}>
            <DatePickers label={status ? 'FROM' : 'NEW_FROM'} data={data}/>
            <DatePickers label={status ? 'TO' : 'NEW_TO'} data={data}/>
        </CardContent>
     );
}

export default MultiPicker;