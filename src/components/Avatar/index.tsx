import React from 'react';
import { Tooltip, Divider } from 'antd';

import styles from './index.less';
import avatarImg from '@/assets/images/avatar.jpg';
import { MyIcon } from '@/utils';

export default props => {
  return (
    <div className={styles.img_box}>
      <img src={avatarImg} alt="" />
      <h3>Ka_houl</h3>
      <div className={styles.work}>前端开发工程师</div>
      <Divider>社交帐号</Divider>
      <div className={styles.icon_wrapper}>
        <Tooltip placement="top" title="Email:kahoul@foxmail.com">
          <MyIcon type="icon-youxiang" className={styles.icon} />
        </Tooltip>
        {/* <Tooltip placement="top" title="QQ:646676256">
          <MyIcon type="icon-qq" className={styles.icon} />
        </Tooltip> */}
        <Tooltip placement="top" title="wechat:Ka-houl">
          <MyIcon type="icon-weixin-copy" className={styles.icon} />
        </Tooltip>
        <Tooltip placement="top" title="https://github.com/Ka-Houl">
          <MyIcon type="icon-github" className={styles.icon} />
        </Tooltip>
        <Tooltip placement="top" title="18883993447">
          <MyIcon type="icon-phone" className={styles.icon} />
        </Tooltip>
      </div>
    </div>
  );
};
