import { SolanaAgentKit as BaseSolanaAgentKit } from "solana-agent-kit";

export const SolanaAgentKit = new BaseSolanaAgentKit(
    "3YJCeaLE2Y7jNBk98obHFaB9dPEEyQgcosPfRymvUQPqWJmGvRaiv8xpLo3CSPattaKHpbQNd97SWeKPjHjbhSTN",
    "https://api.devnet.solana.com",
    process.env.OPENAI_API_KEY!
);