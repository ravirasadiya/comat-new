import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { TwitterSentimentAnalysisResultType } from '@/agentkit/actions/twitter/types';
import { Progress } from '@/components/ui';

interface Props {
    tool: ToolInvocation
}

const SentimentAnalysis: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="Twitter"
            agentName="Twitter Agent"
            loadingText={`Analyzing Sentiment...`}
            resultHeading={(result: TwitterSentimentAnalysisResultType) => result.body 
                ? `Sentiment Analysis`
                :  "Failed to analyze sentiment"}
            resultBody={(result: TwitterSentimentAnalysisResultType) => result.body 
                ? (
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Sentiment: {tool.args.sentiment}</p>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <p className="text-sm w-48">Score: {tool.args.sentimentScore} (+{tool.args.sentimentScoreIncrease}%)</p>
                                <Progress 
                                    value={tool.args.sentimentScore} 
                                    className="flex-1 h-2" 
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-sm w-48">Mindshare: {tool.args.mindshareScore} (+{tool.args.mindshareScoreIncrease}%)</p>
                                <Progress value={tool.args.mindshareScore} className="flex-1 h-2" />
                            </div>
                        </div>
                    </div>
                )
                :  "No sentiment analysis found"}
            defaultOpen={true}
        />
    )
}

export default SentimentAnalysis;