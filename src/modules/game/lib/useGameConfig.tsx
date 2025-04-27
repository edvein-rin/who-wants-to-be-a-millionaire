import { GameConfig, gameConfigSchema } from ".";
import gameConfig from "./gameConfig.json";

export const useGameConfig = (): GameConfig =>
  gameConfigSchema.parse(gameConfig);
