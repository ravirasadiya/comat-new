import { NextRequest, NextResponse } from "next/server";

import { JupiterTokenData } from "@/types";
import { addToken } from "@/db/services/tokens";

export const POST = async (req: NextRequest) => {
    const tokens = await fetch("https://tokens.jup.ag/tokens_with_markets");
    const data: JupiterTokenData[] = await tokens.json();
    for(const token of data) {
        await addToken({
            id: token.address,
            name: token.name,
            symbol: token.symbol,
            decimals: token.decimals,
            tags: token.tags,
            logoURI: token.logoURI,
            freezeAuthority: token.freeze_authority,
            mintAuthority: token.mint_authority,
            permanentDelegate: token.permanent_delegate,
            extensions: token.extensions,
        });
    }
    return NextResponse.json({ message: "Tokens fetched and added to database" });
}