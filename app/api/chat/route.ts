import { CdpAgentkit } from "@/agentkit";
import { NextRequest } from "next/server";
import { tools } from "@/agentkit/ai-sdk/tools";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { Coinbase, Wallet, WalletData } from "@coinbase/coinbase-sdk";
import fs from "fs/promises";
export const POST = async (req: NextRequest) => {

    const { messages } = await req.json();

    let walletData: string | undefined = undefined;

    try {
        const walletDataFile = await fs.readFile("wallet.txt", "utf8");
        walletData = walletDataFile;
    } catch (error) {
        console.log("No stored wallet data found.");
    }

    const agentkit = await CdpAgentkit.configureWithWallet({
        networkId: Coinbase.networks.BaseSepolia,
        cdpWalletData: walletData,
    });

    if(!walletData) {
        const newWalletData = await agentkit.exportWallet();
        await fs.writeFile("wallet.txt", newWalletData);
    }

    const result = streamText({
        model: openai("gpt-4o-mini"),
        tools: tools(agentkit),
        messages,
    })

    return result.toDataStreamResponse();
}