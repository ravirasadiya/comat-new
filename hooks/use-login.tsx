"use client";

import { useEffect } from "react";

import { useConnectWallet, usePrivy } from "@privy-io/react-auth";
import { useFundWallet, useSolanaWallets } from "@privy-io/react-auth/solana";

export const useLogin = () => {
    const { user, ready, connectOrCreateWallet, logout } = usePrivy();

    const { connectWallet } = useConnectWallet();

    const { wallets } = useSolanaWallets();

    const { fundWallet } = useFundWallet();

    useEffect(() => {
        if (wallets.length && !user) {
            wallets[0].loginOrLink();
        }
    }, [wallets]);

    return {
        user,
        ready,
        connectOrCreateWallet,
        connectWallet,
        logout,
        wallets,
        fundWallet
    }
}