import React, { useState } from "react";

import "./styles.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        const now= index===0? 0:100
        setLeft(now);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left:left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;