import { useCallback, useState } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast({ message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  return { toast, showToast };
}
