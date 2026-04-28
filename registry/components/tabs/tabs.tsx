'use client';
import { useState } from 'react';

interface ITabs {
  label: string;
  id: string;
}

export default function Tabs({
  tabsConfig,
  selectedTab,
  setSelectedTab,
}: {
  tabsConfig?: ITabs[];
  selectedTab?: string;
  setSelectedTab?: (id: string) => void;
}) {
  const defaultTabs: ITabs[] = [
    { label: 'Tab 1', id: 'tab1' },
    { label: 'Tab 2', id: 'tab2' },
    { label: 'Tab 3', id: 'tab3' },
  ];
  const safeTabsConfig = tabsConfig?.length ? tabsConfig : defaultTabs;
  const [internalSelectedTab, setInternalSelectedTab] = useState<string>(
    safeTabsConfig[0]?.id ?? 'tab1'
  );
  const activeSelectedTab = selectedTab ?? internalSelectedTab;
  const onTabChange = setSelectedTab ?? setInternalSelectedTab;

  const selectedIndex = Math.max(
    0,
    safeTabsConfig.findIndex((section) => section.id === activeSelectedTab)
  );
  const sliderWidth = 100 / safeTabsConfig.length;

  const handleTabChange = (sectionId: string) => {
    onTabChange(sectionId);
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto p-2">
      <div className="relative flex bg-gray-200 dark:bg-gray-900 rounded-full p-1 shadow-inner dark:shadow-gray-950">
        <div className="relative flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner dark:shadow-gray-900 min-w-[200px] w-full">
          <div
            className="absolute top-1 h-[calc(100%-8px)] bg-white dark:bg-gray-700 rounded-full shadow-md dark:shadow-black/30 transition-all duration-300 ease-in-out z-10"
            style={{
              width: `calc(${sliderWidth}% - 8px)`,
              left: `calc(${selectedIndex * sliderWidth}% + 4px)`,
            }}
          />
          {safeTabsConfig.map((tab) => (
            <button
              key={tab.id}
              className={`relative z-20 flex-1 bg-transparent border-none font-medium rounded-full transition-all duration-300 py-2 px-4 ${activeSelectedTab === tab.id
                ? 'text-black dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              onClick={() => handleTabChange(tab.id)}
              disabled={activeSelectedTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}