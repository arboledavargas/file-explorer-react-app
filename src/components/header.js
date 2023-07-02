import { React } from 'react';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding-inline: 1rem;
`

const HeaderIcon = styled.i`
    padding-left: 2rem;
    font-size: 1.2rem;
`

export function Header(){
    return (
        <HeaderContainer>
            <HeaderIcon><i class="las la-search"></i></HeaderIcon>
            <HeaderIcon><i class="las la-sliders-h"></i></HeaderIcon>
            <HeaderIcon><i class="las la-user-circle"></i></HeaderIcon>
        </HeaderContainer>
    )
}