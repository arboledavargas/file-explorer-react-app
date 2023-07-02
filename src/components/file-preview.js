import { React } from 'react';
import styled from 'styled-components';

const FilePreviewContainer = styled.div`
  height: 100%;
  margin-left: 1rem;
  border-radius: 1rem;
  display: inline-block;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  max-width: 100%;
  height: 100%;
`;

const FileDetails = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(2px);
  border-radius: 0 0 1rem 1rem;
`;

const SmallTitle = styled.span`
  color: white;
  font-size: .7rem;
  margin-bottom: .5rem;
`

const SmallSubTitle = styled.span`
  color: var(--ghost-white);
  font-size: .5rem;
`;

export function FilePreview() {
  return (
    <FilePreviewContainer>
      <BackgroundImage src="https://picsum.photos/300/200" alt="file preview"></BackgroundImage>
      <FileDetails>
        <SmallTitle>Town in jakarta.jpg</SmallTitle>
        <SmallSubTitle>Added yestarday 11 am</SmallSubTitle>
      </FileDetails>
    </FilePreviewContainer>
  )
}