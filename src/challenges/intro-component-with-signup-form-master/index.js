import React from 'react'
import Form from './components/Form';
import {
    Body,
    FormSection,
    IntroSection,
    IntroSectionTitle,
    IntroSectionText,
    MainContent,
    FormSectionPricing,
    GlobalStyle
} from './style/style'


function IntroComponentWithSignupForm() {

    return (
        <>
            <GlobalStyle />
            <Body>
                <MainContent>
                    <IntroSection>
                        <IntroSectionTitle>
                            Learn to code by watching others
                        </IntroSectionTitle>
                        <IntroSectionText>
                            See how experienced developers problems in real-time.
                            Watching scripted tutorials is great. but understanding how
                            developers think is invaluable.
                        </IntroSectionText>
                    </IntroSection>

                    <FormSection>
                        <FormSectionPricing>
                            <b>Try it free 7 days</b> then $20/mo. thereafter
                        </FormSectionPricing>
                        <Form />
                    </FormSection>
                </MainContent>
            </Body>
        </>
    );
}

export default IntroComponentWithSignupForm;