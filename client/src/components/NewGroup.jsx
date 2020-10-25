import React from 'react';
import {
  Grid,
  Button,
  Header,
  Form,
  Input,
  Dropdown,
} from 'semantic-ui-react';

export default function NewGroup() {
  const options = [
    { key: 'one', text: 'one', value: 'one' },
    { key: 'one', text: 'one', value: 'one' },
    { key: 'one', text: 'one', value: 'one' },
    { key: 'one', text: 'one', value: 'one' },
    { key: 'one', text: 'one', value: 'one' },
  ];
  return (
    <Grid style={{ padding: '2em' }} relaxed rows={6}>
      <Form>
        <Grid.Row height={2}>
          <Header> Emekdaslar </Header>
          <Button attached="left" content="SAVE" color="violet" />
          <Button attached="right" content="Save & Exit" color="blue" />
          <Dropdown
            style={{ marginLeft: '8em' }}
            color="green"
            text="more"
            allowAdditions
            simple
            selection
            deburr
            search
            floating
            options={options}
          />
        </Grid.Row>

        <Grid.Row>
          <Form.Field>
            <p> Code </p>
            <Input placeholder="1234-123412" />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Form.Field>
            <p>Name</p>
            <Input placeholder="1234-123412" />
          </Form.Field>
        </Grid.Row>
        <Grid.Row>
          <Form.Field>
            <p>Parent</p>
            <Input placeholder="1234-123412" />
          </Form.Field>
        </Grid.Row>
      </Form>
    </Grid>
  );
}
