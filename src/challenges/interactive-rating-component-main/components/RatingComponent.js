import React from 'react'

import {
    MainRatingComponent,
    RatingComponentTitle,
    RatingComponentText,
    RatingNumbersContainer,
    RatingNumber,
    RatingSubmitBtn,
    RatingCircleComponent,
    RatingStar,
} from "../style/style";

function RatingComponent({ clikedRatingNbr, clikedRatingNbrChosed, sendRatingNbr }) {

    return (
        <MainRatingComponent>
            < RatingCircleComponent >
                <RatingStar></RatingStar>
            </RatingCircleComponent >
            <RatingComponentTitle>
                How did we do?
            </RatingComponentTitle>
            <RatingComponentText>
                Please let us know how we did with your support request.
                All feedback is appreciate
                to help us improve our offering!
            </RatingComponentText>
            <RatingNumbersContainer>
                {[1, 2, 3, 4, 5].map(
                    value =>
                        <RatingNumber
                            key={value}
                            onClick={
                                () => clikedRatingNbrChosed(value)
                            }
                            clicked={clikedRatingNbr === value ? true : false}
                        >
                            {value}
                        </RatingNumber>
                )}
            </RatingNumbersContainer>
            <RatingSubmitBtn
                onClick={
                    () => {
                        if (clikedRatingNbr !== 0)
                            sendRatingNbr()
                    }
                }>
                SUBMIT
            </RatingSubmitBtn>
        </MainRatingComponent >);
}

export default RatingComponent;