import { z } from "zod";
import { TransferInputSchema } from "./input-schema";

export type TransferSchemaType = typeof TransferInputSchema;

export type TransferArgumentsType = z.infer<TransferSchemaType>;

export type TransferResultBodyType = {
    amount: number;
    recipient: string;
    token: string;
    transaction: string;
};