import React, {useState} from 'react';
import Metric from "./Components/Metric";
import Imperial from "./Components/Imperial";
import './App.css';
import {Tabs, TabList, TabPanel} from 'react-tabs';
import {Tab} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-tabs/style/react-tabs.css';

export default class App extends React.Component{
 
  render(){
    return(
      <div>
      <h1>BMI Calculator</h1>
      <Tabs>
        <TabList>
          <Tab>Metric</Tab>
          <Tab>Imperial</Tab>
        </TabList>

        <TabPanel>
          <h2>Metric System</h2>
          <Metric  />
        </TabPanel>
        <TabPanel>
          <h2>Imperial System</h2>
          <Imperial  />
        </TabPanel>
      </Tabs>
      <footer className="footer">Made by Vibhor Khanna in 2020</footer>
  </div>
    );
}
}