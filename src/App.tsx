import { useEffect, useState } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  const [count, setCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState<boolean | null>(null);

  useEffect(() => {
    if (WebApp && isExpanded === null) {
      WebApp.expand();
      setIsExpanded(true);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (WebApp) {
      WebApp.setBackgroundColor("#FF00FF");
      WebApp.setHeaderColor("#FFFF00");
    }
  }, []);

  return (
    <div className="gap-x-6 flex justify-center items-center">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-3 py-2 border-gray-100 border-2 rounded-xl"
      >
        count is {count}
      </button>

      <button
        onClick={() =>
          WebApp.showAlert(`Hello World! Current count is ${count}`)
        }
        className="px-3 py-2 border-gray-100 border-2 rounded-xl"
      >
        Show Alert
      </button>
    </div>
  );
}

export default App;
