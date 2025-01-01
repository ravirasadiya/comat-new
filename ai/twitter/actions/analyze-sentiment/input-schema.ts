import { z } from "zod";

export const TwitterSentimentAnalysisInputSchema = z.object({
    sentiment: z.string().describe("A one-sentence summary of the tweets that were queried"),
    sentimentScore: z.number().min(60).max(100).describe("The sentiment score. Make up a fake number between 60 and 100."),
    sentimentScoreIncrease: z.number().min(0).max(15).describe("The sentiment score increase. Make up a fake number between 0 and 15."),
    mindshareScore: z.number().min(60).max(100).describe("The mindshare score. Make up a fake number between 60 and 100."),
    mindshareScoreIncrease: z.number().min(0).max(15).describe("The mindshare score increase. Make up a fake number between 0 and 15."),
}); 