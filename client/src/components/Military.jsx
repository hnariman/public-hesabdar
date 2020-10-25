import React, { useState } from 'react';
import {
  Header, Form, Dropdown, Grid, Search,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Military() {
  const options = [
    { key: '1', text: 'option1', value: '1' },
    { key: '2', text: 'option2', value: '2' },
    { key: '3', text: 'option3', value: '3' },
    { key: '4', text: 'option4', value: '4' },
    { key: '5', text: 'option5', value: '5' },
  ];

  // CSS Modules, react-datepicker-cssmodules.css
  // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid padded>
      <Grid.Row columns={2}>
        <Grid.Column children={<Header as="h2" content="Military" />} />
        <Grid.Column children={<Search />} />
      </Grid.Row>
      <Form>
        <Form.Group>
          <Form.Field label="Start" />
          <Form.Field inline>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field label="Name" />
          <Form.Field >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field label="Rank" />
          <Form.Field inline>
            <Dropdown options={options} selection />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field label="Type" />
            <Form.Field inline>
            <Dropdown options={options} selection />
          </Form.Field>
        </Form.Group>
      </Form>
    </Grid>
  );
}

export default Military;
