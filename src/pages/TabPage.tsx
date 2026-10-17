import Tab from "../components/tabs/Tab";

export type TabDataType = {
  id:number,
  label:string,
  content: string,
}


const tabsData:TabDataType[] = [
  {
    id:101,
    label: "Profile",
    content: "this is a profile tab component" 
  },

  {
    id:102,
    label: "Settings",
    content: "this is a Setting tab component" 
  },

  {
    id:103,
    label: "Notification",
    content: "this is a notification tab component" 
  },
]
function TabPage() {
  return <Tab tabData={tabsData} />;
}

export default TabPage;
