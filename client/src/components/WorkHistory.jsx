import React from 'react';
import { Space, Button, Dropdown } from 'antd';

const WorkHistory = () => (
  <Space>
    <h3> Is Tarixcesi </h3>
    <Space>
      <Space>
        <Button>Cap</Button>
        <Button>DT</Button>
        <Button>icon</Button>
        <Button>Save</Button>
        <Button>OK</Button>
        <Button>Provesti</Button>
        <Button>Close</Button>
        <Space>
          <Dropdown>more</Dropdown>
        </Space>
      </Space>
    </Space>
  </Space>
);
export default WorkHistory;
