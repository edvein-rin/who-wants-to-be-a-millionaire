import { Reward } from "./reward";

const _formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
  maximumFractionDigits: 0,
});

export const formatReward = (reward: Reward): string => {
  return _formatter.format(reward);
};
