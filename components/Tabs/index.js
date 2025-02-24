import { useState } from "react";
import styles from "./Tabs.module.css";

const TabGroup = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div>
      <div className={styles.tabHeaders}>
        {tabs.map(({ key, title }) => (
          <button
            key={key}
            className={`${styles.tabButton} ${activeTab === key ? styles.active : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {title}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {tabs.map(({ key, content }) => (
          activeTab === key && <div key={key}>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default TabGroup;
