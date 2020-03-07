import React, { Component } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import { connect } from 'dva';
// @connect(({ global }) => ({
//   global,
// }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        <div className={styles.test}> index</div>
      </div>
    );
  }
}

export default Index;
