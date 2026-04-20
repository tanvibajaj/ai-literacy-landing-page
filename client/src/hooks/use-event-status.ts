import { useEffect, useState } from "react";

export type EventStatus = {
  deadline: string;
  closed: boolean;
};

export function useEventStatus() {
  const [status, setStatus] = useState<EventStatus | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch("/api/event/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data) setStatus(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return status;
}
