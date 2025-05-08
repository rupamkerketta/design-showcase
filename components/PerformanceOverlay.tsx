import { useEffect } from "react";
import { NativeModules } from "react-native";

/**
 * Shows the React‑Native performance monitor (JS FPS + UI FPS box)
 * on every screen while in __DEV__.
 */

export default function PerformanceOverlay() {
  useEffect(() => {
    if (!__DEV__) return; // don't show in production builds

    NativeModules.DevSettings?.togglePerformanceMonitor?.();

    // Hide again when the component unmounts (e.g. fast-refresh)
    return () => NativeModules.DevSettings?.togglePerformanceMonitor?.();
  }, []);

  return null;
}
