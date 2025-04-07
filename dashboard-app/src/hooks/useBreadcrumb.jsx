// hooks/useBreadcrumb.js
import { useOutletContext } from "react-router-dom";

export function useBreadcrumb() {
  return useOutletContext();
}
