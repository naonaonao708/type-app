import React, {FC} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


const TopHeader: FC = () => {
    return(
        <AppBar position="static">
            <TopHeader>
                <h2>タイトル</h2>
            </TopHeader>
        </AppBar>
    )
}

export default TopHeader;