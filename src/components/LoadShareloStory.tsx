/** @format */

import { useEffect, useRef } from "react";

interface Props {
  storyId: string;
}

const LoadShareloStory = ({ storyId }: Props) => {
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const LoadSharelo = () => {
      if ((window as unknown as any).ShareloSDK) {
        (window as unknown as any).ShareloSDK.initFloatingWidget({
          storyId,
          size: "regular",
          view: "auto",
          toggleType: "rect",
          toggleSize: "small",
          toggleView: "auto",
          toggleMessage: "Hi there✋",
          togglePosition: "left",
        });
      }
    };

    if ((window as unknown as any).ShareloSDK) {
      LoadSharelo();
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(LoadSharelo, 100);
    }
  }, [storyId]);

  return null;
};

export default LoadShareloStory;
