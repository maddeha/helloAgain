import { Reward } from '@models/Rewards/Rewards';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '@store/store';

export interface UserState {
  rewards: Reward[];
}
const initialState: UserState = {
  rewards: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addReward: (state, action: PayloadAction<Reward>) => {
      state.rewards.push(action.payload);
    }
  }
});

export const { addReward } = userSlice.actions;

export const selectUser = (state: RootState): UserState => state.user;

export default userSlice;
