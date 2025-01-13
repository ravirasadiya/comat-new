'use client'

import React, { useState } from 'react'

import { Button, Input } from '@/components/ui'

import { ApiV3PoolInfoStandardItem, Percent, TokenAmount, toToken, TxVersion } from '@raydium-io/raydium-sdk-v2'
import { raydiumTransactionClient } from '@/services/raydium'
import { ConnectedSolanaWallet } from '@privy-io/react-auth'
import Decimal from 'decimal.js'
import { useSendTransaction } from '@/hooks'
import { useChat } from '@/app/(app)/chat/_contexts/chat'

interface Props {
    pool: ApiV3PoolInfoStandardItem,
    wallet: ConnectedSolanaWallet,
    toolCallId: string
}

const StandardPool: React.FC<Props> = ({ pool, wallet, toolCallId }) => {

    const { addToolResult } = useChat();

    const [amountA, setAmountA] = useState<string>("");
    const [amountB, setAmountB] = useState<string>("");
    const [baseIn, setBaseIn] = useState<boolean>(true);
    const [otherAmountMin, setOtherAmountMin] = useState<string>("");
    const [isDepositing, setIsDepositing] = useState<boolean>(false);

    const { sendTransaction } = useSendTransaction();

    const handleAmountAChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAmountA(value);
        const raydium = await raydiumTransactionClient(wallet.address);
        const { anotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: value,
            slippage: new Percent(10, 100),
            baseIn: true,
        });
        setAmountB(anotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(true);
    }

    const handleAmountBChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountB(e.target.value);
        const raydium = await raydiumTransactionClient(wallet.address);
        const { anotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: e.target.value,
            slippage: new Percent(1, 100),
            baseIn: false,
        });
        setAmountA(anotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(false);
    }

    const onSubmit = async () => {
        setIsDepositing(true);
        const raydium = await raydiumTransactionClient(wallet.address);
        const { transaction } = await raydium.liquidity.addLiquidity({
            poolInfo: pool,
            amountInA: new TokenAmount(
                toToken(pool.mintA),
                new Decimal(amountA).mul(10 ** pool.mintA.decimals).toFixed(0)
            ),
            amountInB: new TokenAmount(
                toToken(pool.mintB),
                new Decimal(amountB).mul(10 ** pool.mintB.decimals).toFixed(0)
            ),
            otherAmountMin: new TokenAmount(
                toToken(pool.mintB),
                new Decimal(otherAmountMin).mul(10 ** pool.mintB.decimals).toFixed(0)
            ),
            fixedSide: baseIn ? "a" : "b",
            txVersion: TxVersion.V0
        });
        try {
            const tx = await sendTransaction(transaction);
            addToolResult(toolCallId, {
                message: "Deposit liquidity successful",
                body: {
                    tx,
                }
            });
        } catch (error) {
            
        }
        setIsDepositing(false);
    }


    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <img src={pool.mintA.logoURI} alt={pool.mintA.symbol} className="w-6 h-6 rounded-full" />
                        <p className="text-sm">{pool.mintA.name} ({pool.mintA.symbol})</p>
                    </div>
                    <Input 
                        placeholder="Amount" 
                        value={amountA}
                        onChange={handleAmountAChange}
                        type="number"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <img src={pool.mintB.logoURI} alt={pool.mintB.symbol} className="w-6 h-6 rounded-full" />
                        <p className="text-sm">{pool.mintB.name} ({pool.mintB.symbol})</p>
                    </div>
                    <Input 
                        placeholder="Amount" 
                        value={amountB}
                        onChange={handleAmountBChange}
                        type="number"
                    />
                </div>
                <Button
                    variant="brand"
                    className="w-full"
                    disabled={!amountA || !amountB || !otherAmountMin || isDepositing}
                    onClick={onSubmit}
                >
                    {isDepositing ? "Depositing..." : "Deposit"}
                </Button>
            </div>
            
        </div>
    )
}

export default StandardPool