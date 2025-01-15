'use client'

import React, { useState } from 'react'

import { ApiV3PoolInfoStandardItem, Percent, TokenAmount, toToken, TxVersion } from '@raydium-io/raydium-sdk-v2'

import Decimal from 'decimal.js'

import { Button, Separator } from '@/components/ui'

import LogInButton from '@/app/(app)/_components/log-in-button'

import TokenInput from '../../../../utils/swap/token-input'

import { useSendTransaction, useTokenBalance, useTokenDataByAddress } from '@/hooks'

import { useChat } from '@/app/(app)/chat/_contexts/chat'

import { raydiumApiClient, raydiumTransactionClient } from '@/services/raydium'


interface Props {
    pool: ApiV3PoolInfoStandardItem,
    toolCallId: string
}

const StandardPool: React.FC<Props> = ({ pool, toolCallId }) => {

    const { addToolResult } = useChat();

    const [amountA, setAmountA] = useState<string>("");
    const [amountB, setAmountB] = useState<string>("");
    const [amountsLoading, setAmountsLoading] = useState<boolean>(false);

    const [baseIn, setBaseIn] = useState<boolean>(true);

    const [otherAmountMin, setOtherAmountMin] = useState<string>("");
    const [isDepositing, setIsDepositing] = useState<boolean>(false);

    const { sendTransaction, wallet } = useSendTransaction();

    const { data: mintA } = useTokenDataByAddress(pool.mintA.address);
    const { data: mintB } = useTokenDataByAddress(pool.mintB.address);

    const { balance: balanceA, isLoading: isBalanceALoading } = useTokenBalance(pool.mintA.address, wallet?.address ?? "");
    const { balance: balanceB, isLoading: isBalanceBLoading } = useTokenBalance(pool.mintB.address, wallet?.address ?? "");

    const handleAmountAChange = async (amount: string) => {
        setAmountA(amount);
        setAmountsLoading(true);
        const raydium = await raydiumApiClient;
        const { anotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: amount,
            slippage: new Percent(5, 100),
            baseIn: true,
        });
        setAmountB(anotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(true);
        setAmountsLoading(false);
    }

    const handleAmountBChange = async (amount: string) => {
        setAmountB(amount);
        setAmountsLoading(true);
        const raydium = await raydiumApiClient;
        const { anotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: amount,
            slippage: new Percent(5, 100),
            baseIn: false,
        });
        setAmountA(anotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(false);
        setAmountsLoading(false);
    }

    const onSubmit = async () => {
        if(!wallet || !wallet.address) return;
        setIsDepositing(true);
        const raydium = await raydiumTransactionClient(wallet.address);
        console.log(amountA, amountB, otherAmountMin, baseIn);
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
                toToken(baseIn ? pool.mintA : pool.mintB),
                new Decimal(otherAmountMin).mul(10 ** (baseIn ? pool.mintA.decimals : pool.mintB.decimals)).toFixed(0)
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
            console.error(error);
        }
        setIsDepositing(false);
    }

    const onCancel = () => {
        addToolResult(toolCallId, {
            message: "Deposit liquidity cancelled",
        });
    }


    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                    {pool.mintA.symbol}/{pool.mintB.symbol}
                </p>
                <div className="flex flex-col items-center">
                    <p className="text-xs opacity-50">
                        7d APR
                    </p>
                    <p className="text-sm">
                        {pool.week.apr}%
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <TokenInput
                        token={mintA}
                        label={"Token A"}
                        amount={amountA}
                        onChange={handleAmountAChange}
                        address={wallet?.address ?? ""}
                    />
                    <TokenInput
                        token={mintB}
                        label={"Token B"}
                        amount={amountB}
                        onChange={handleAmountBChange}
                        address={wallet?.address ?? ""}
                    />
                </div>
            </div>
            <Separator />
            {
                wallet ? (
                    <div className="flex flex-col gap-2">
                        <Button
                            variant="brand"
                            className="w-full"
                            disabled={!amountA || !amountB || !otherAmountMin || isDepositing || !balanceA || !balanceB || isBalanceALoading || isBalanceBLoading || Number(amountA) > Number(balanceA) || Number(amountB) > Number(balanceB) || amountsLoading}
                            onClick={onSubmit}
                        >
                            {
                                isBalanceALoading || isBalanceBLoading || amountsLoading
                                    ? "Loading..."
                                    : Number(amountA) > Number(balanceA) || Number(amountB) > Number(balanceB) 
                                        ? "Insufficient balance" 
                                        : isDepositing 
                                            ? "Depositing..." 
                                            : "Deposit"
                            }
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <LogInButton />
                )
            }
        </div>
    )
}

export default StandardPool