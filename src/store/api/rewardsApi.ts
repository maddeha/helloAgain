import { BASE_URL } from '@config/env';
import {
  Reward,
  RewardsPayloadType,
  decodeRewards
} from '@models/Rewards/Rewards';
import { RewardResponse } from '@models/Rewards/RewardsResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoints } from '@utils/endpoints';
import { HttpMethod } from '@utils/enums';
import { decodePaginatedResponse } from '@utils/helpers';
import { PaginatedApplication, PaginatedResponse } from '@utils/types';

export const rewardsApi = createApi({
  reducerPath: 'rewardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    rewards: builder.query<PaginatedApplication<Reward>, RewardsPayloadType>({
      query: (data) => ({
        url: endpoints.GET_REWARDS,
        method: HttpMethod.Get,
        params: data
      }),
      transformResponse: (response: PaginatedResponse<RewardResponse>) =>
        decodePaginatedResponse(response, decodeRewards)
    })
  })
});
export const { useLazyRewardsQuery } = rewardsApi;
