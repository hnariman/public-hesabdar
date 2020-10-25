import React from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import {
  Select,
  Input,
  Button,
  Grid,
  Dropdown,
  Checkbox,
} from 'semantic-ui-react';

const One = () => {
  const options = [
    { key: 'one', value: 'one', text: 'one' },
    { key: 'one', value: 'one', text: 'one' },
    { key: 'one', value: 'one', text: 'one' },
    { key: 'one', value: 'one', text: 'one' },
    { key: 'one', value: 'one', text: 'one' },
    { key: 'one', value: 'one', text: 'one' },
  ];
  return (
    <section>
      <Grid columns="2" padded>
        <Grid.Row>
          <h3> Herbi Qulluq </h3>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="Save & Close" color="blue" />
            <Button content="Save" color="blue" />
          </Grid.Column>
          <Grid.Column width={5} stretched>
            <Button.Group color="blue">
              <Button> More... </Button>
              <Dropdown
                floating
                options={options}
                className="button icon"
                trigger={<></>}
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Checkbox label="Herbi xidmete yararl" />
          </Grid.Column>
          <Grid.Column>
            <Checkbox label="Ofitser zapasa" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column children={<label> Start </label>} />
          <Grid.Column children={<DateInput />} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column children={<label> End </label>} />
          <Grid.Column children={<DateInput />} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column children={<label>Qosulun Novu</label>} />
          <Grid.Column>
            <Input type="text" placeholder="Search..." action>
              <input />
              <Select compact options={options} defaultValue="articles" />
              <Button type="submit" color="blue">
                Other
              </Button>
            </Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column children={<label>Rutbe</label>} />
          <Grid.Column>
            <Input type="text" placeholder="Search..." action>
              <input />
              <Select compact options={options} defaultValue="articles" />
              <Button type="submit" color="blue">
                Other
              </Button>
            </Input>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default One;
