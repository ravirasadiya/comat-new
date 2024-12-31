'use client'

import React from 'react'

import { 
    AlertDialog,
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    Button
} from '@/components/ui';

import { useChat } from '../_contexts/chat';

import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import Logo from '@/components/ui/logo';

const PrivateKeyDialog: React.FC = () => {

    const { solanaPrivateKey, setSolanaPrivateKey } = useChat();

    return (
        <AlertDialog open={solanaPrivateKey === null}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex items-center gap-2">
                        <Logo className="w-6 h-6" />
                        <AlertDialogTitle>
                            Initialize your Hive
                        </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                        Your agent needs a Solana wallet to perform transactions.
                        <br />
                        Your key is stored locally in your browser.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button onClick={() => {
                        const keypair = Keypair.generate();
                        setSolanaPrivateKey(bs58.encode(keypair.secretKey));
                    }}>
                        Generate Key
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PrivateKeyDialog;