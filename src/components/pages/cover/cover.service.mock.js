import { getCoverInfo } from "@/src/_mocks/cover";
import { sleeper } from "@/src/_mocks/utils";

export const getCoverByKey = async (key) => {
  await sleeper(500)();
  return getCoverInfo(key);
};

export const getFees = async () => {
  const FEES = 6.5;
  await sleeper(500)();
  return FEES;
};

export const getMaxValueToPurchase = async () => {
  const MAX_VALUE_TO_PURCHASE = 500000;
  await sleeper(500)();
  return MAX_VALUE_TO_PURCHASE;
};
