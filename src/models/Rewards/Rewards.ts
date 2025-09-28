import { RewardResponse } from './RewardsResponse';

export interface Reward {
  name: string;
  id: string;
  description: string;
  amount: number;
}

export const decodeRewards = (rewards: RewardResponse[]): Reward[] => {
  return rewards.map(decodeReward);
};

export const decodeReward = (reward: RewardResponse): Reward => {
  const { id, activation_description: description, amount, name } = reward;
  return {
    id,
    name,
    description,
    amount
  };
};

export interface RewardsPayloadType {
  limit?: number;
  page?: number;
}
