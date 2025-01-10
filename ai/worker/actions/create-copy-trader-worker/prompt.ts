export const COPY_TRADER_WORKER_PROMPT = 
`Create a copy trader worker that will watch a specific address and buy an amount of SOL worth of every token that they buy above a certain threshold.

The worker will sell the token if it after a given percentage gain.

Otherwise, the worker will hold until the address sells the token.

If the user does not provide any of the parameters, use null for the parameter.

If the user just asks for a copy trader, use all nulls.`; 