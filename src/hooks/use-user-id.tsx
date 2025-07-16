import { useState, useEffect } from "react";

export const LOCAL_STORAGE_EVENT = "nm-uid-set";
export const LOCAL_STORAGE_KEY = "nm-uid";

export function useUserId() {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  });

  useEffect(() => {
    function handleUserIdSet(e: CustomEvent) {
      if (e.detail.key === LOCAL_STORAGE_KEY) {
        setValue(e.detail.value);
      }
    }

    window.addEventListener(
      LOCAL_STORAGE_EVENT,
      handleUserIdSet as EventListener
    );

    return () => {
      window.removeEventListener(
        LOCAL_STORAGE_EVENT,
        handleUserIdSet as EventListener
      );
    };
  }, []);

  return value;
}
