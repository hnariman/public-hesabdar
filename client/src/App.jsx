import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { paste } from 'react-icons-kit/fa/paste';
import { lightbulbO } from 'react-icons-kit/fa/lightbulbO';
import { briefcase } from 'react-icons-kit/fa/briefcase';
import { ic_access_time as accessTime } from 'react-icons-kit/md/ic_access_time';
import { ic_account_box as accountBox } from 'react-icons-kit/md/ic_account_box';
import { swap } from 'react-icons-kit/entypo/swap';

import { Tab, Search } from 'semantic-ui-react';
import Family from './components/Family.jsx';
import Military from './components/Military.jsx';
import NewGroup from './components/NewGroup.jsx';
import FamilyForm from './components/FamilyForm.jsx';
import One from './components/One';

const panes = [
  {
    menuItem: '1',
    render: () => (
      <Tab.Pane>
        <One />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Military',
    render: () => (
      <Tab.Pane>
        <Military />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'FamilyForm',
    render: () => (
      <Tab.Pane>
        <FamilyForm />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Test',
    render: () => (
      <Tab.Pane>
        <p>test</p>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Family',
    render: () => (
      <Tab.Pane>
        <Family />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'NewGroup',
    render: () => (
      <Tab.Pane>
        <NewGroup />
      </Tab.Pane>
    ),
  },
];

const App = () => (
  <AppContainer>
    <Header />
    <Menu />
    <Content component="hello" />
  </AppContainer>
);

const Option = ({ icon, text }) => (
  <Item>
    <Icon icon={icon} size={48} />
    <p>{text}</p>
  </Item>
);
Option.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Menu = () => (
  <MenuContainer>
    <Option text="Account" icon={accountBox} />
    <Option text="Schedule" icon={accessTime} />
    <Option text="Documents" icon={paste} />
    <Option text="Ideas" icon={lightbulbO} />
    <Option text="Corporate" icon={briefcase} />
  </MenuContainer>
);

const Header = () => (
  <HeaderContainer>
    <div style={{ color: '#000066', marginLeft: '2em' }}>
      <Icon icon={swap} size={42} />
    </div>
    <Search />
  </HeaderContainer>
);

const Content = () => (
  <ContentContainer>
    <Tab
      menu={{ color: '#000066', secondary: true, pointing: true }}
      panes={panes}
    />
  </ContentContainer>
);

const HeaderContainer = styled.section`
  box-shadow: 0 2px 2px #00000045;
  grid-area: header;
  background: #fff;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 5px 15px;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
  }
  div {
    padding: "1em";
    background: "#fff";
    color: "#000066";
  }
`;

const AppContainer = styled.section`
  display: grid;
  background: #f2f2f2;
  height: 100vh;
  grid-template-areas:
    "header header header header"
    "menu content content content"
    "menu content content content"
    "menu content content content"
    "menu content content content"
    "menu content content content";
  grid-template-rows: 85px repeat(5, 1fr);
  grid-template-columns: min-content repeat(3, 1fr);
`;

const ContentContainer = styled.div`
  margin: 0.8em;
  border-radius: 10px;
  padding: 2em;
  grid-area: content;
  background: #fff;
  box-shadow: 0 4px 4px #00000045;
`;

const MenuContainer = styled.ul`
  grid-area: menu;
  margin: 0.7em 0;
  border-radius: 0 10px 10px 0;
  background: #000066;
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 1em;
  box-shadow: 0 4px 4px #00000045;
`;

const Item = styled.li`
  text-align: center;
  margin: 0 auto;
  list-style-type: none;
  margin: 0;
  padding: 0;
  :hover {
    opacity: 0.5;
  }
`;

export default App;
