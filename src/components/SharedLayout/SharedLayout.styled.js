import styled from "@emotion/styled";


export const Container = styled.div`
    margin: 0 auto;
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    background-color: #FEF9F9;
    color: #111111;

    @media screen and (min-width: 768px) {
        max-width: 786px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 24px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 20px;
    }


`