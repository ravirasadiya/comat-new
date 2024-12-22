import { z } from "zod";
import { DeployCollectionInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type DeployCollectionSchemaType = typeof DeployCollectionInputSchema;

export type DeployCollectionArgumentsType = z.infer<DeployCollectionSchemaType>;

export type DeployCollectionResultBodyType = {
    collectionAddress: string;
    name: string;
} 

export type DeployCollectionResultType = SolanaActionResult<DeployCollectionResultBodyType>;