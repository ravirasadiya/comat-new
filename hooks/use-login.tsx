"use client";

import { useEffect } from "react";

import { useConnectWallet, usePrivy, useLogin as usePrivyLogin } from "@privy-io/react-auth";
import { useFundWallet, useSolanaWallets } from "@privy-io/react-auth/solana";

export const useLogin = () => {
    const { user, ready, logout } = usePrivy();

    const { wallets, createWallet } = useSolanaWallets();

    const { login } = usePrivyLogin({
        onComplete: async (user, isNewUser, _) => {
            if(isNewUser && !user.wallet) {
                await createWallet();
            }
        }
    });

    const { connectWallet } = useConnectWallet();


    const { fundWallet } = useFundWallet();

    useEffect(() => {
        if (wallets.length && !user) {
            wallets[0].loginOrLink();
        }
    }, [wallets]);

    return {
        user,
        ready,
        login,
        connectWallet,
        logout,
        wallets,
        fundWallet
    }
}