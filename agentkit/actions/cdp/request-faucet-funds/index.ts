import { CdpAction } from "@/agentkit";
import { REQUEST_FAUCET_FUNDS_NAME } from "./name";
import { REQUEST_FAUCET_FUNDS_PROMPT } from "./prompt";
import { RequestFaucetFundsInputSchema } from "./input-schema";
import { requestFaucetFunds } from "./function";
import { RequestFaucetFundsSchemaType, RequestFaucetFundsResultBodyType } from "./types";

export class RequestFaucetFundsAction implements CdpAction<RequestFaucetFundsSchemaType, RequestFaucetFundsResultBodyType> {
  public name = REQUEST_FAUCET_FUNDS_NAME;
  public description = REQUEST_FAUCET_FUNDS_PROMPT;
  public argsSchema = RequestFaucetFundsInputSchema;
  public func = requestFaucetFunds;
} 