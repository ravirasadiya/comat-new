'use client'

import TokenSelect from '@/app/_components/token-select'
import { Token } from '@/db/types/token'
import React from 'react'
import { cn } from '@/lib/utils'
import TokenBalance from './token-balance'

interface Props {
    amount: string,
    onChange?: (amount: string) => void,
    token: Token | null,
    onChangeToken: (token: Token | null) => void,
    address?: string,
}

const TokenInput: React.FC<Props> = ({ amount, onChange, token, onChangeToken, address }) => {

    const [isFocused, setIsFocused] = React.useState(false)

    return (
        <div className={cn(
            "flex flex-col gap-2 border rounded-md p-2 w-full transition-colors",
            isFocused ? "border-brand-600" : "border-neutral-200 dark:border-neutral-700"
        )}>
            <div className={cn(
                "flex items-center w-full",
            )}>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => onChange && onChange(e.target.value)} 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    disabled={!onChange}
                    placeholder="0.00"
                />
                <TokenSelect
                    value={token}
                    onChange={onChangeToken}
                />
            </div>
            {
                token && address && (
                    <TokenBalance
                        address={address}
                        tokenAddress={token.id}
                        tokenSymbol={token.symbol}
                        setAmount={onChange}
                    />
                )
            }
        </div>
    )
}

export default TokenInput