import Tab from "../components/tabs/Tab";

export type TabDataType = {
  id:number | string,
  label:string,
  content: string | any[],
  disabled: boolean
}

export type TabDataTypeV2 = {
  content :string,
}


const tabsData:TabDataType[] =[
  {
    id: "overview",
    label: "Overview",
    disabled: true,
    content: "View your account overview and recent activity.",
  },
  {
    id: "transactions",
    label: "Transactions",
    disabled: false,
    content: [
      { id: 1, title: "Online payment", amount: 1200 },
      { id: 2, title: "Grocery shopping", amount: 850 },
      { id: 3, title: "Subscription", amount: 499 },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    disabled: false,
    content: "Manage your account settings.",
  },
  {
    id: "security",
    label: "Security",
    disabled: false,
    content: "Manage your password and security preferences.",
  },
];
function TabPage() {
  return <Tab tabData={tabsData} />;
}

export default TabPage;
