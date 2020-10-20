import React, { useState } from "react";
import {
  Header,
  Form,
  Label,
  Card,
  Dropdown,
  Input,
  Container,
  Grid,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Military() {
  const options = [
    { key: "1", text: "option1", value: "1" },
    { key: "2", text: "option2", value: "2" },
    { key: "3", text: "option3", value: "3" },
    { key: "4", text: "option4", value: "4" },
    { key: "5", text: "option5", value: "5" },
  ];

  // CSS Modules, react-datepicker-cssmodules.css
  // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Card  style={{padding: '2em'}}>
        <Card.Header> <Header content="Military"/> </Card.Header>
        <Input size="small" icon="search" placeholder="Search..." />
        <Form>
          <Form.Field inline>
            <label>Start</label>{" "}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Field>
          <Form.Field inline>
            <label> End </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Field>
          <Form.Field inline>
            <label>Rank</label> <Dropdown options={options} selection />
          </Form.Field>
          <Form.Field inline>
            <label>Type</label> <Dropdown options={options} selection />
          </Form.Field>
        </Form>
      </Card>
    </div>
  );
}

export default Military;
