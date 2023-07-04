import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const isOnline = () => {
      setIsOnline(true);
    };

    const isOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", isOnline);
    window.addEventListener("offline", isOffline);

    return () => {
      window.removeEventListener("online", isOnline);
      window.removeEventListener("offline", isOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
