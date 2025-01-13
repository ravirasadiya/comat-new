import { StreamflowSolana } from "@streamflow/stream";

const streamflowClient = new StreamflowSolana.SolanaStreamClient(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);

export default streamflowClient;
