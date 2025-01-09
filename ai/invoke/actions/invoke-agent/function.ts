import type { InvokeAgentArgumentsType, InvokeAgentResultType } from "./types";

export const invokeAgentFunction = async (args: InvokeAgentArgumentsType): Promise<InvokeAgentResultType> => {
    console.log('Invoke Agent Function called with args:', args);
    const result = {
        message: `Invoking agent ${args.agent}`,
        body: {
            message: args.message,
        },
    };
    console.log('Invoke Agent Function returning:', result);
    return result;
};