export { GameStage } from "./gameStage";
export type { GameConfig } from "./gameConfig";
export { validateGameConfig } from "./validateGameConfig";

import type { GameConfig } from "./gameConfig";
import gameConfigJson from "./gameConfig.json";
export const gameConfig: GameConfig = gameConfigJson;
