import { SolanaAgentKit as BaseSolanaAgentKit } from "solana-agent-kit";

export const SolanaAgentKit = new BaseSolanaAgentKit(
    process.env.AGENT_WALLET_KEY!,
    undefined,
    ""
);