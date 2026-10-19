import { useEffect, useState } from "react";
import type { TabDataType } from "../../pages/TabPage";

type tabProps = {
  tabData: TabDataType[];
};

const RenderTabContent = ({
  activeTabData,
}: {
  activeTabData: TabDataType;
}) => {
  return Array.isArray(activeTabData?.content) ? (
    <div style={{
      display:"flex",
      flexDirection:"column",
    }}>
      {activeTabData?.content?.map((curr: any) => (
        <span key={curr?.id}>
          {curr?.title}-{curr?.amount}
        </span>
      ))}
    </div>
  ) : (
    <div>
      <span>{activeTabData?.content}</span>
    </div>
  );
};

const getFirstNonDisabledActiveTab = (tabData:any[]) =>{
  return tabData?.find((curr:TabDataType)=> curr?.disabled === false)?.id;
}
function Tab({ tabData }: tabProps) {
  const [activeTab, setActiveTab] = useState<number | string | undefined>(()=>getFirstNonDisabledActiveTab(tabData));
  const handleTabChange = (id: number | string) => {
    if (id === activeTab) return;
    setActiveTab(id);
  };


  useEffect(()=>{
    const activeTabExists = tabData?.some((tab) => (
      tab?.id === activeTab && !(tab?.disabled)
    ))

    if(!activeTabExists) setActiveTab(getFirstNonDisabledActiveTab(tabData))


  } , [tabData , activeTab])

  const activeTabData = tabData?.find((tab) => tab.id === activeTab && !(tab.disabled));
  return (
    <div className="container">
      <div className="tab-container">
        <div className="tabs">
          {tabData?.map((tab) => (
            <button
              key={tab?.id}
              style={{
                border: "none",
                borderBottom: tab?.id === activeTab ? "2px solid blue" : "none",
                margin: "6px",
                background: "transparent",
                color: tab?.disabled ? "grey" : "black"
              }}
              onClick={() => handleTabChange(tab?.id)}
              disabled={tab?.disabled}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTabData && <RenderTabContent activeTabData={activeTabData} />}
      </div>
    </div>
  );
}

export default Tab;
