import { useCallback, useState } from "react";

type Toast = {
  message: string;
};

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = useCallback(({ message }: Toast): void => {
    setToast({ message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  return { toast, showToast };
}
