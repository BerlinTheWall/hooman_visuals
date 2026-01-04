import { useCallback } from "react";

/**
 * Hook that returns event handlers to prevent image context menu and drag actions
 * @returns Object with stopContext and stopDrag handlers
 */
export function usePreventImageActions() {
  const stopContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);
  const stopDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  return { stopContext, stopDrag };
}
