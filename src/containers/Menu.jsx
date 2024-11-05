import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const MenuApp = () => {
  const navigate = useNavigate();
  const onclick = () => {
    navigate('/chat');
  };
  return (
    <Menu
      onClick={onclick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        height: '100%',
        borderRight: 0,
      }}
      mode='inline'
      items={items2}
    />
  );
};
export default MenuApp;
