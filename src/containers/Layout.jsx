import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import MenuApp from './Menu';
// const { Content, Sider } = Layout;
const LayoutApp = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <div className='app-root'>
      <MenuApp></MenuApp>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};
export default LayoutApp;
