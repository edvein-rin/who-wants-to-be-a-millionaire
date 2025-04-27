import { useEffect, useRef } from "react";

import { GameConfig, validateGameConfig } from ".";
import gameConfig from "./gameConfig.json";

export const useGameConfig = (): GameConfig => {
  const isFirstRenderReference = useRef(true);

  useEffect(() => {
    if (isFirstRenderReference) {
      validateGameConfig(gameConfig);
      isFirstRenderReference.current = false;
    }
  }, []);

  return gameConfig;
};
