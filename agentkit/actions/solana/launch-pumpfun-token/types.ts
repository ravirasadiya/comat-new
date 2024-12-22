import { z } from "zod";
import { LaunchPumpfunTokenInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type LaunchPumpfunTokenSchemaType = typeof LaunchPumpfunTokenInputSchema;

export type LaunchPumpfunTokenArgumentsType = z.infer<LaunchPumpfunTokenSchemaType>;

export type LaunchPumpfunTokenResultBodyType = {
    tokenName: string;
    tokenTicker: string;
    description: string;
    imageUrl: string;
    socials: {
        twitter?: string;
        telegram?: string;
        website?: string;
    };
    initialLiquiditySOL?: number;
} 

export type LaunchPumpfunTokenResultType = SolanaActionResult<LaunchPumpfunTokenResultBodyType>;