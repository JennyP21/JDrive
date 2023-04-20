import { useEffect } from "react";

export interface ItemVisibilityProps {
  itemVisibility: boolean;
  setItemVisibility: (item: boolean) => void;
  containerClassName: string;
  contentClassname: string;
}

const useItemVisibility = ({
  itemVisibility,
  setItemVisibility,
  containerClassName,
  contentClassname
}: ItemVisibilityProps) => {
  return useEffect(() => {
    if (itemVisibility === true) {
      document.addEventListener("click", (event) => {
        let target = event.target as HTMLElement;

        const container = document.querySelector("." + containerClassName);
        const content = document.querySelector("." + contentClassname);

        if (!container?.contains(target) && !content?.contains(target)) {
          setItemVisibility(false);
        }
      });
    }
  }, [itemVisibility]);
};

export default useItemVisibility;
