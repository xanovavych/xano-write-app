import { useEffect, useState } from "react";

export default function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  /*Without this, "Hydration Error" Occurs.. Ref: https://nextjs.org/docs/messages/react-hydration-error*/
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}