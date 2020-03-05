import React from 'react'
import {Menu,Layout } from 'antd'
import { history } from 'umi';

const { Header, Footer, Content } = Layout;
export default (props:any) =>{
  console.log(props)  
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
              onClick={(item,) =>{
                history.push(item.key);
              }}
            >
              <Menu.Item key="/">主页</Menu.Item>
              <Menu.Item key="/list">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content> { props.children }</Content>
          <Footer>Footer</Footer>
        </Layout>
      </>
    );
  }