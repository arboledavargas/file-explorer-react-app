import React from 'react';
import styled from 'styled-components';

const FileCategoryContainer = styled.div`
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 7rem;
  width: 6rem;
  background-color: var(--ghost-white);
  margin-left: 1rem;
`;

const CategoryIcon = styled.i`
  font-size: 2rem;
`;

const Title = styled.span`
  font-size: .7rem;
  color: var(--primary-text);
  `;

const SubTitle = styled.span`
  font-size: .6rem;
  color: var(--secondary-text);
  
`;
export function FileCategory(){
    return (
        <FileCategoryContainer>
            <CategoryIcon>

            <i class="las la-image"></i>
            </CategoryIcon>
            <Title>Images</Title>
            <SubTitle>200 Files</SubTitle>
        </FileCategoryContainer>
    )
}