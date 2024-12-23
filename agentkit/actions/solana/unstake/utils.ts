import { VersionedTransaction } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";

/**
 * Stake SOL with Jup validator
 * @param agent SolanaAgentKit instance
 * @param amount Amount of SOL to stake
 * @returns Transaction signature
 */
export async function unstakeWithJup(
  agent: SolanaAgentKit,
  amount: number,
): Promise<string> {
  try {
    const res = await fetch(
      `https://worker.jup.ag/blinks/swap/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v/So11111111111111111111111111111111111111112/${amount}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account: agent.wallet.publicKey.toBase58(),
        }),
      },
    );

    const data = await res.json();

    const txn = VersionedTransaction.deserialize(
      Buffer.from(data.transaction, "base64"),
    );

    const { blockhash } = await agent.connection.getLatestBlockhash();
    txn.message.recentBlockhash = blockhash;

    // Sign and send transaction
    txn.sign([agent.wallet]);
    const signature = await agent.connection.sendTransaction(txn, {
      preflightCommitment: "confirmed",
      maxRetries: 10,
    });

    const latestBlockhash = await agent.connection.getLatestBlockhash();
    await agent.connection.confirmTransaction({
      signature,
      blockhash: latestBlockhash.blockhash,
      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    });

    return signature;
  } catch (error: any) {
    throw new Error(`jupSOL staking failed: ${error.message}`);
  }
}
