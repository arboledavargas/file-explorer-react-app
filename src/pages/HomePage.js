import { React } from 'react';
import { styled } from 'styled-components';
import { Header } from '../components/header'
import { AccountBalanceGraph } from '../components/account-balance-graph'
import { FilePreview } from '../components/file-preview'
import { FileCategory } from "../components/file-category";

const HomePageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 3.5rem 1fr;
    grid-template-areas: 
        'header'
        'content';
`
const HeaderContainer = styled.div`
    grid-area: header;
`

const Graph = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`

const Title = styled.h4`
  margin: 1rem;
`;

const HorizontalScroll = styled.div`
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    height: 8rem;
    text-wrap: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

`;

const Content = styled.div`
  
`;

export function HomePage() {
    return (
        <HomePageContainer>
            <HeaderContainer>
                <Header></Header>
            </HeaderContainer>
            <Content>
                <Graph>
                    <AccountBalanceGraph></AccountBalanceGraph>
                </Graph>
                <Title>
                    Recent Files
                </Title>
                <HorizontalScroll>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                    <FilePreview></FilePreview>
                </HorizontalScroll>
                <Title>
                    Categories
                </Title>
                <HorizontalScroll>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                    <FileCategory></FileCategory>
                </HorizontalScroll>
            </Content>
        </HomePageContainer>
    )
}