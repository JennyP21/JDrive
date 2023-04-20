import { useEffect } from "react";

export interface ItemVisibilityProps {
  itemVisibility: boolean;
  setItemVisibility: (item: boolean) => void;
  targetClassName: string;
}

const useItemVisibility = ({
  itemVisibility,
  setItemVisibility,
  targetClassName,
}: ItemVisibilityProps) => {
  return useEffect(() => {
    if (itemVisibility === true) {
      document.addEventListener("click", (event) => {
        let target = event.target as HTMLElement;

        // Special condition for SVG items
        if (target.tagName === "path")
          target = target.parentNode as HTMLElement;

        // Special condition for folder dropdowns
        if (
          target.classList.contains("dashboard-title") ||
          target.classList.contains("dashboard-arrow")
        )
          target = target.parentNode as HTMLElement;

        if (!target?.classList.contains(targetClassName))
          setItemVisibility(false);
      });
    }
  }, [itemVisibility]);
};

export default useItemVisibility;
