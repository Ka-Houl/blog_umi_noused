import React from 'react';
import { Menu, Layout } from 'antd';
import { history } from 'umi';

const { Header, Footer, Content } = Layout;
export default (props: any) => {
  console.log(props);
  const menu = [
    { key: '/', name: '主页' },
    { key: '/list', name: '列表' },
    { key: '/github', name: 'github' },
  ];
  return (
    <>
      <Layout>
        <Header>
          <Menu
            theme="light"
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            selectedKeys={[props.location.pathname]}
            style={{ lineHeight: '64px' }}
            onClick={item => {
              history.push(item.key);
            }}
          >
            {menu.map(item => (
              <Menu.Item key={item.key}>{item.name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content> {props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
