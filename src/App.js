import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Header,
  Container,
  Menu
} from "semantic-ui-react";
import TabBarContainer from './features/tabs/TabBarContainer';
import UnitInfo from './features/tabs/unitInfo';
import Pilots from './features/tabs/pilots';
import Mechs from './features/tabs/mechs';
import UnitOrganization from './features/tabs/unitOrganization';

import './App.css';







class App extends Component {
    render() {
      const tabs = [
        {name : "unitInfo", label : "Unit Info"},
        {name : "pilots", label : "Pilots"},
        {name : "mechs", label : "Mechs"},
        {name : "unitOrganization", label : "Unit Organization"}
    ];

        return (
            <div className="App">
                <div className="App-header">

                    <Header inverted as="h1">Project Mini-Mek</Header>

                </div>
            
                <Container>
                <TabBarContainer tabs={tabs} size="massive"/>
             </Container>

            </div>
        );
    }
}

export default App;