import classNames from "classnames";
import {createContext, useEffect, useState} from "react";

const SomeContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData(1)

    }, 250)
  }, [])

  if (!data) {
    return "hello";
  }

  return <SomeContext.Provider value={data}>{children}</SomeContext.Provider>;
};

export default function Home() {
  return (
    <ContextProvider>
      <Content />
    </ContextProvider>
  );
}

const Content = () => {
  const [tab, setTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div className="tab-bar">
        {tabs.map((t) => (
          <button
            key={t}
            className={classNames("btn btn-tab btn-sm animated", {
              selected: t === tab,
            })}
            onClick={() => setTab(t)}
          >
            hello
          </button>
        ))}

        <input className="form-control" placeholder="YOYOYO" autoFocus />
      </div>

      <style jsx>{`
        .tab-bar {
          margin-bottom: 20px;
          padding: 1rem;
          display: flex;
        }
        
        .btn-tab {
          color: gray;
          border-radius: 100px;
          margin-bottom: 0.5rem;
          margin-right: 0.25rem;
          font-size: 1rem;
          font-weight: bold;
        }

        .btn-tab:hover {
          color: black;
          background-color: #0001;
        }

        .btn-tab.selected {
          color: red;
          background-color: #f003;
        }

        .title {
          color: inherit;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
};
