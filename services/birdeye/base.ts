import { BaseResponse } from './types';

export const queryBirdeye = async <T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> => {
  const url = new URL(`https://public-api.birdeye.so/${endpoint}`);
  console.log(url);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  console.log(process.env.BIRDEYE_API_KEY);
  const response = await fetch(url.toString(), {
    headers: {
      'X-API-KEY': process.env.BIRDEYE_API_KEY || '',
      accept: 'application/json',
      'x-chain': 'solana',
    },
  });

  console.log(response);
  if (!response.ok) {
    throw new Error(`Birdeye API error: ${response.status}`);
  }

  const data: BaseResponse<T> = await response.json();

  if (!data.success) {
    throw new Error(`Birdeye API error`);
  }

  return data.data;
};
