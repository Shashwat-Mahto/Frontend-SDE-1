import { useEffect, useState } from "react";
import type { TabDataType } from "../../pages/TabPage";

type tabProps = {
  tabData: TabDataType[];
};
function Tab({ tabData }: tabProps) {

    const [activeTab , setActiveTab] = useState<number>(tabData[0]?.id);
    const handleTabChange = (id:number)=>{
        if(id === activeTab) return;
        setActiveTab(id);
       
        
    }

    const activeTabContent = tabData?.find((curr) => curr?.id === activeTab);

  return (
    <div className="container">
      <div className="tab-container">
        <div className="tabs">
          {tabData?.map((tab) => (
            <button key={tab?.id}
            style={{
                border:"none",
                borderBottom: tab?.id === activeTab ? "2px solid blue" : "none",
                 margin:"6px",
                 background:'transparent'
                 
            }}
            onClick={()=>handleTabChange(tab?.id)}
            >{tab.label}</button>
          ))}
        </div>

        {activeTabContent &&  <div>
            <p>{activeTabContent?.content}</p>
            </div>}
      </div>
    </div>
  );
}

export default Tab;
