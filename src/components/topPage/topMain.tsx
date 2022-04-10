import React, {FC} from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import laptop from "../../assets/images/laptop-3214756.jpg";


const useStyle = makeStyles(() =>
    createStyles({
    
        background: {
            backgroundImage: 'url(${laptop})',
            backgroundSize: 'cover',
            height: '100vh',
        },

        laptop: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '33%',
            width: '45%',
        }
    }),
)

const TopMain: FC = () => {
    const classes = useStyle();
    return(
        <div className={classes.background}>
           <Paper>
            Hello        
           </Paper> 
        </div>
    )
}

export default TopMain;
