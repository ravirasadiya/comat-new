import React from 'react'

import Link from 'next/link';

import { z } from 'zod';

import { Button } from '@/components/ui';

import ToolCard from './tool-card';

import { getExplorerAddressUrl, getExplorerTransactionUrl } from '@/lib/explorers';

import type { ToolInvocation } from 'ai';
import type { DeployTokenInput, DeployTokenResultBody } from '@/agentkit/actions/cdp/deploy_token';

interface Props {
    tool: ToolInvocation
}

const DeployToken: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="Coins"
            loadingText={`Deploying Token...`}
            resultHeading={(result) => result.body ? `Token Deployed` : `Token Deployment Failed`}
            resultBody={(result) => result.body 
                ? (
                    <TokenDeploymentSuccess 
                        args={tool.args} 
                        body={result.body}
                    />
                ) : "No transaction link found"}
        />
    )
}

interface TokenDeploymentSuccessProps {
    args: z.infer<typeof DeployTokenInput>,
    body: DeployTokenResultBody
}

const TokenDeploymentSuccess: React.FC<TokenDeploymentSuccessProps> = ({
    args,
    body
}) => {
    return (
        <div className="flex flex-col gap-2">
            <p>
                {args.name} ({args.symbol}) deployed successfully with a total supply of {args.totalSupply.toLocaleString()}!
            </p>
            <div className="flex gap-1">
                <Link 
                    href={getExplorerAddressUrl(body.contractAddress)}
                    target="_blank"
                >
                    <Button
                        variant="outline"
                    >
                        Contract
                    </Button>
                </Link>
                <Link 
                    href={getExplorerTransactionUrl(body.transactionHash)}
                    target="_blank"
                >
                    <Button
                        variant="outline"
                    >
                        Transaction
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default DeployToken;