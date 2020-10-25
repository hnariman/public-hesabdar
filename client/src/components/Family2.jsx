import React from 'react';
import {
  Space, Button, Dropdown, Input, Table, Row,
} from 'antd';

const { Search } = Input;

const Family2 = () => (
  <section>
    <Space> Abbasov Intizam Islam </Space>
    <Row>
      <Space> files </Space>
      <Space>faliyyeti</Space>
      <Space>herbi</Space>
      <Space>icra veregesi</Space>
      <Space>more1</Space>
      <Dropdown />
    </Row>
    <Row> Aile Uzvleri </Row>
    <Space>
      <Button>plus </Button>
      <Button>plus </Button>
      <Search />
      <Dropdown />
      <Dropdown />
    </Space>
    <Table />
  </section>
);

export default Family2;
