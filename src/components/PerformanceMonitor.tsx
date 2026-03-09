import { useEffect, useRef } from "react";

interface PerformanceMetrics {
  tabSwitchTime: number;
  videoLoadTime: number;
  totalTime: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

export function PerformanceMonitor({
  onMetricsUpdate,
  enabled = process.env.NODE_ENV === "development",
}: PerformanceMonitorProps) {
  const metricsRef = useRef<PerformanceMetrics>({
    tabSwitchTime: 0,
    videoLoadTime: 0,
    totalTime: 0,
  });

  useEffect(() => {
    if (!enabled) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        if (entry.name.includes("tab-switch")) {
          metricsRef.current.tabSwitchTime = entry.duration;
        } else if (entry.name.includes("video-load")) {
          metricsRef.current.videoLoadTime = entry.duration;
        }
      });

      metricsRef.current.totalTime =
        metricsRef.current.tabSwitchTime + metricsRef.current.videoLoadTime;

      if (onMetricsUpdate) {
        onMetricsUpdate(metricsRef.current);
      }

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log("Performance Metrics:", {
          tabSwitchTime: `${metricsRef.current.tabSwitchTime.toFixed(2)}ms`,
          videoLoadTime: `${metricsRef.current.videoLoadTime.toFixed(2)}ms`,
          totalTime: `${metricsRef.current.totalTime.toFixed(2)}ms`,
        });
      }
    });

    observer.observe({ entryTypes: ["measure"] });

    return () => {
      observer.disconnect();
    };
  }, [enabled, onMetricsUpdate]);

  return null;
}

// Hook to measure performance
export function usePerformanceMeasure() {
  const startMeasure = (name: string) => {
    performance.mark(`${name}-start`);
  };

  const endMeasure = (name: string) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  };

  return { startMeasure, endMeasure };
}
