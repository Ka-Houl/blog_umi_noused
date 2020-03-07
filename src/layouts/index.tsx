import React from 'react';
import { Menu, Layout, Row, Col, Card, Avatar } from 'antd';
import { history } from 'umi';
import avatarImg from '@/assets/images/avatar.jpg';
import styles from './index.less';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

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
          <Row justify={'center'}>
            <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 10 }}>
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
            </Col>
          </Row>
        </Header>
        <Content>
          <Row justify={'center'}>
            <Col
              // span={22}
              xs={{ span: 22, offset: 2 }}
              md={{ span: 16, offset: 2 }}
              lg={{ span: 12, offset: 2 }}
            >
              {props.children}
            </Col>
            <Col
              //  span={2}
              xs={{ span: 0, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
            >
              <div className={styles.img_box}>
                <img src={avatarImg} alt="" />
                <h3>Ka_houl</h3>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
