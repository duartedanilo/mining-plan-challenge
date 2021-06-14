import { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import TabPanel from '../../components/TabPanel';
import Table from '../../components/Table';

const data = [
    { name: "ore1", value: 10, timeToMine: 5 },
    { name: "ore2", value: 12, timeToMine: 3 },
    { name: "ore3", value: 14, timeToMine: 2 },
    { name: "ore4", value: 16, timeToMine: 8 },
    { name: "ore5", value: 18, timeToMine: 4 },
    { name: "ore6", value: 20, timeToMine: 6 },
  ];

function Home() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabsChange = (evt, newTab) => {
      setSelectedTab(newTab);
    };

    return (
        <div className="app">
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabsChange}>
            <Tab
                id="tab-0"
                label="Table" 
                aria-controls="simple-tabpanel-0"
            />
            <Tab id="tabCard" label="Timeline" />
          </Tabs>
        </AppBar>
        <TabPanel value={selectedTab} index={0}>
            <Table data={data} />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>Item Two</TabPanel>
    </div>
    );
}

export default Home;