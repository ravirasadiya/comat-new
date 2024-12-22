import { z } from "zod";
import { GetWalletAddressInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type GetWalletAddressSchemaType = typeof GetWalletAddressInputSchema;

export type GetWalletAddressArgumentsType = z.infer<GetWalletAddressSchemaType>;

export type GetWalletAddressResultBodyType = {
    address: string;
} 

export type GetWalletAddressResultType = SolanaActionResult<GetWalletAddressResultBodyType>;