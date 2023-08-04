import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./DateTabs.css"
const DateTabs = () => {
  return (
    <div>
      <Tabs className="Tabs">
        <TabList className="flex flex-row justify-around h-[40px] border-2 rounded-[12px]">
          <Tab
            selectedClassName=" text-neutral"
            disabledClassName="text-gray"
            className="font-[400] text-[13px] leading-4 flex items-center justify-center"
          >
            Exact Date
          </Tab>
          <Tab
            selectedClassName=" text-neutral"
            disabledClassName="text-gray"
            className="font-[400] text-[13px] leading-4 flex items-center justify-center"
          >
            Date Range
          </Tab>
        </TabList>
        <TabPanel>
          <p>Tab 1 works!</p>
        </TabPanel>
        <TabPanel>
          <p>Tab 2 works!</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DateTabs;
