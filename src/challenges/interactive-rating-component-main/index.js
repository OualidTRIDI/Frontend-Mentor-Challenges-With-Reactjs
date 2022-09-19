import React, { useState } from "react";

import {
    Body,
} from "./style/style";
import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";

function InteractiveRatingComponent({ challenge }) {

    document.title = `Frontend Mentor | ${challenge.name}`;

    const [clikedRatingNbr, setClikedRatingNbr] = useState(0);
    const [ratingComponent, setRatingComponent] = useState(true);

    const clikedRatingNbrChosed = (ratingNbrChosed) => {
        setClikedRatingNbr(ratingNbrChosed);
    }

    const sendRatingNbr = () => {
        setRatingComponent(false);
    }

    return (
        <Body>
            {ratingComponent ?
                <RatingComponent
                    clikedRatingNbr={clikedRatingNbr}
                    clikedRatingNbrChosed={clikedRatingNbrChosed}
                    sendRatingNbr={sendRatingNbr}
                />
                :
                <ThankYouComponent
                    clikedRatingNbr={clikedRatingNbr}
                />
            }
        </Body >
    );

}

export default InteractiveRatingComponent;