import React from 'react';
import {
  Header,
  Grid,
  Dropdown,
  Button,
  Search,
  Table,
  Icon,
} from 'semantic-ui-react';

const Family = ({
  name = 'Intizam',
  surname = 'Abbasov',
  fathersname = 'Islam',
  mockData = [
    {
      name: 'some data',
      member: 'some data',
      saa: 'some data',
      dob: 'some data',
      workplace: 'some data',
      contact: 'some data',
    },
    {
      name: 'some data',
      member: 'some data',
      saa: 'some data',
      dob: 'some data',
      workplace: 'some data',
      contact: 'some data',
    },
    {
      name: 'some data',
      member: 'some data',
      saa: 'some data',
      dob: 'some data',
      workplace: 'some data',
      contact: 'some data',
    },
  ],
}) => {
  const categories = [
    'files',
    'faliyyeti',
    'herbi',
    'icra veregesi ',
    'more1',
    'more2',
    'more3',
    'more4',
    'more5',
    'more6',
  ];
  const options = categories
    .filter((x, i) => i >= 5)
    .map((option, index) => ({
      key: option[index],
      text: option,
      value: option[index],
    }));
  const buttonOptions = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ];
  return (
      <Grid padded>
        <Grid.Row container>
          <Header as="h2"> {`${surname} ${name} ${fathersname}`}</Header>
        </Grid.Row>
        <Grid.Row columns={7}>
          {categories
            .filter((x, i) => i < 5)
            .map((x) => (
              <Grid.Column key={x} width={2.5} children={x} />
            ))}
          <Grid.Column width={4}>
            <Button.Group color="blue">
              <Dropdown
                fluid
                placeholder="select me"
                button
                options={options}
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Header as="h3">Aile Uzvleri</Header>
        </Grid.Row>
        <Grid.Row columns={5} >
          <Grid.Column width={2}>
            <Button animated compact primary icon="add square" >
              <Button.Content visible > <Icon name="add square"/> </Button.Content>
              <Button.Content content="why not?" hidden />
            </Button>
          </Grid.Column>

          <Grid.Column width={2}>
            <Button animated compact primary >
              <Button.Content visible > <Icon name="add square"/> </Button.Content>
              <Button.Content content="why not?" hidden />
            </Button>
          </Grid.Column>
          <Grid.Column children={<Search />} width={5} />
          <Grid.Column width={3}>
            <Button.Group color="blue">
              <Dropdown text="text" options={buttonOptions} item button />
            </Button.Group>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button.Group color="blue">
              <Dropdown text="text" options={buttonOptions} item button />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Table celled compact striped>
            <Table.Header>
              <Table.HeaderCell> name </Table.HeaderCell>
              <Table.HeaderCell> member </Table.HeaderCell>
              <Table.HeaderCell> saa </Table.HeaderCell>
              <Table.HeaderCell> dob </Table.HeaderCell>
              <Table.HeaderCell> workplace </Table.HeaderCell>
              <Table.HeaderCell>contact</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              {mockData.map((relative) => (
                <Table.Row key={relative.name}>
                  <Table.Cell singleLine>{relative.name}</Table.Cell>
                  <Table.Cell singleLine>{relative.member}</Table.Cell>
                  <Table.Cell singleLine>{relative.saa}</Table.Cell>
                  <Table.Cell singleLine>{relative.dob}</Table.Cell>
                  <Table.Cell singleLine>{relative.workplace}</Table.Cell>
                  <Table.Cell singleLine>{relative.contact}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
  );
};

export default Family;
