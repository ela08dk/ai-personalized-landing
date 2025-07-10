import { useState, useEffect } from "react";

export const LOCAL_STORAGE_EVENT = "nm-uid-set";

export function useUserId(key: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key);
  });

  useEffect(() => {
    function handleUserIdSet(e: CustomEvent) {
      if (e.detail.key === key) {
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
  }, [key]);

  return value;
}
