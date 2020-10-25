import React from 'react';
import {
  Input, Row, Col, Button, Form, DatePicker, Space,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';

const FamilyForm = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  return (
    <section>
      <Space style={{ marginBottom: '2em' }}>
        <StarOutlined twoToneColor="#eb2f96" />
        <h3>Family Members</h3>
      </Space>
      <Row>
        <Col span={18}>
          <Space>
            <Button type="primary">Save & close</Button>
            <Button type="primary">Save</Button>
          </Space>
        </Col>
        <Col>
          <Button type="primary">More</Button>
        </Col>
      </Row>
      <Form {...layout}>
        <Form.Item label="Emekdas">
          <Input />
        </Form.Item>
        <Form.Item label="Aile uzvu">
          <Input />
        </Form.Item>
        <Form.Item label="SAA">
          <Input />
        </Form.Item>
        <Form.Item label="Anadan olma tarixi">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Is yeri">
          <Input />
        </Form.Item>
        <Form.Item label="Elaqe melumati">
          <Input />
        </Form.Item>
      </Form>
    </section>
  );
};

export default FamilyForm;
