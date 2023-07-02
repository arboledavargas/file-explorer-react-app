import { React } from 'react';
import { styled } from 'styled-components'

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;

    background-color: white;
`
const MenuItem = styled.div`
    font-size: 1.2rem;
`

export function Menu(){
    return(
    <FlexContainer>
        <MenuItem>
            <i class="las la-home"></i>
        </MenuItem>
        <MenuItem>
            <i class="lar la-folder-open"></i>
        </MenuItem>
        <MenuItem>
            <i class="lar la-clock"></i>
        </MenuItem>
        <MenuItem>
            <i class="las la-trash"></i>
        </MenuItem>
    </FlexContainer>
    )
}