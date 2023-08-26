import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Comp1 from '../pages/display-page2';

export const Left = ({fn})=> {
  return (

  <Tabs aria-label="Basic tabs" defaultValue={0}>
  <TabList>
    <Tab>ALl</Tab>
    <Tab>Men</Tab>
    <Tab>Women</Tab>
  </TabList>
  <TabPanel value={0}>
  <Comp1 gender={'Any'} fn={fn}/>
  </TabPanel>
  <TabPanel value={1}>
  <Comp1 gender={'Men'} fn={fn}/>
  </TabPanel>
  <TabPanel value={2}>
  <Comp1 gender={'Women'} fn={fn}/>
  </TabPanel>
</Tabs>
  )
}