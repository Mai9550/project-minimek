import React from "react";
import {Menu} from "semantic-ui-react";
import ToggleDisplay from 'react-toggle-display';


import Tab from "./Tab";

const TabBar = (props) => {
    const {tabs, currentTab, onTabClick, ...otherProps} = props;

    const tabItems = tabs.map(tabInfo => {
        const {name, label} = tabInfo;
    })
            
            const tabPanels = tabs.map(tabInfo => {
                     const {name, component : TabComponent} = tabInfo;
                
                     return (
                         <ToggleDisplay show={name === currentTab} key={name}>
                               <TabComponent />
                         </ToggleDisplay>
                       )
                  });
                
        
    

    return (
        <div>
            <Menu tabular attached="top" {...otherProps}>
                {tabItems}
            </Menu>
            {tabPanels}
        </div>
    )
}

export default TabBar;
