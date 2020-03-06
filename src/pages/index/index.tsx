import React from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd';

const a: number = 1;

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        type="primary"
        onClick={() => {
          history.push('/list');
        }}
      >
        Primary
      </Button>
      212um2121212i plugin list11122
      <div className="test"> 1111111</div>
      <div className={styles.test}> 111哇哦113311</div>
    </div>
  );
};
