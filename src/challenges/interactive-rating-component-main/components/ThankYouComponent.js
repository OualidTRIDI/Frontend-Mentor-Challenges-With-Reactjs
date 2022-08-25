import {
    RatingComponentTitle,
    MainThankYouComponent,
    SelectedRatingNbr,
    ThankYouImage,
    ThankYouText
} from "../style/style";

function ThankYouComponent({ clikedRatingNbr }) {

    return (
        <MainThankYouComponent>
            <ThankYouImage></ThankYouImage>
            <SelectedRatingNbr>
                You selected {clikedRatingNbr} out of 5
            </SelectedRatingNbr>
            <RatingComponentTitle>Thank you!</RatingComponentTitle>
            <ThankYouText>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </ThankYouText>
        </MainThankYouComponent>
    );

}

export default ThankYouComponent;