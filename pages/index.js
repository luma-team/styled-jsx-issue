import classNames from "classnames";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <div className={"tab-bar"}>
        <button onClick={() => setTab(1)}>Green</button>
        <button onClick={() => setTab(2)}>Blue</button>
      </div>

      <div className="animated">
        {tab === 1 && <TabOne />}

        {tab === 2 && <TabTwo />}
      </div>

      <style jsx>{`
        .tab-bar {
          margin-bottom: 20px;
          padding: 1rem;
          display: flex;

          button {
            margin-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

const TabOne = () => {
  return (
    <div>
      <div className={classNames("tab-one animated", { bigger: true })} />

      <style jsx global>{`
        .tab-one {
          width: 100px;
          height: 100px;
          opacity: 0.5;
          background-color: green;

          &.bigger {
            width: 1000px;
          }
        }
      `}</style>
    </div>
  );
};

const TabTwo = () => {
  return (
    <div>
      <div className="tab-two" />

      <style jsx global>{`
        .tab-two {
          width: 200px;
          height: 200px;
          opacity: 0.5;
          background-color: blue;
        }
      `}</style>
    </div>
  );
};
