import { React } from 'react';
import styled from 'styled-components';

const AccountBalanceGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: var(--royal-blue);
  padding: 1rem;
  display: flex;
`;

const ChartSection = styled.div`
    position: relative;
    height: 3rem;
    width: 3rem;
    display: inline-block;
`;

const FlexColumn = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    & > * {
        margin-bottom: .5rem;
    }

    & > *:last-child {
        margin: 0;
    }

`

const WhiteText = styled.div`
    color: white;
`

const Bold = styled.span`
    font-weight: 500;
`

const CenteredText = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const CallToAction = styled.button`
    color: white;
    border: 0;
    border-radius: 5px;
    background-color: var(--cornflower-blue-high);
    font-size: .8rem;
    padding: .5rem 1rem;
`


export function AccountBalanceGraph(){
    return (
        <AccountBalanceGraphContainer>
            <ChartSection>
                <CenteredText>27%</CenteredText>
            </ChartSection>
            <FlexColumn>
                <WhiteText><Bold>10.8GB</Bold> of 15GB used</WhiteText>
                <CallToAction>Buy Storage</CallToAction>
            </FlexColumn>
        </AccountBalanceGraphContainer>
    )
}