import { useEffect, useRef, useState } from "react";

type CountdownStatus = "idle" | "running" | "done";

interface UseCountdownResult {
  count: number;
  status: CountdownStatus;
  start: () => void;
}

export function useCountdown(
  from: number,
  onComplete: () => void
): UseCountdownResult {
  const [count, setCount] = useState<number>(from);
  const [status, setStatus] = useState<CountdownStatus>("idle");

  // Always call the latest onComplete without restarting the interval
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Tick once per second while running
  useEffect(() => {
    if (status !== "running") return;

    const id = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [status]);

  // Finish when we hit 0
  useEffect(() => {
    if (status === "running" && count <= 0) {
      setStatus("done");
      onCompleteRef.current();
    }
  }, [count, status]);

  const start = () => {
    if (status !== "idle") return;
    setCount(from);
    setStatus("running");
  };

  return { count, status, start };
}