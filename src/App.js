import './index.css';
import { styled } from 'styled-components'
import { Menu } from './components/menu'
import { HomePage } from './pages/HomePage'

const AppWindow = styled.div`
  width: 17rem;
  height: 80%;
  border-radius: 1rem;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: calc(100% - 3.5rem) 3.5rem;

  overflow: hidden;

  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`
const MenuContainer = styled.div`
  width: 100%;
`

export function App() {
  return (
    <AppWindow>
      <HomePage>

      </HomePage>
      <MenuContainer>
        <Menu></Menu>
      </MenuContainer>
    </AppWindow>
  );
}