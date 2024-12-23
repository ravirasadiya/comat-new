import { TWITTER_SENTIMENT_ANALYSIS_NAME } from "./name";
import { TWITTER_SENTIMENT_ANALYSIS_PROMPT } from "./prompt";
import { TwitterSentimentAnalysisInputSchema } from "./input-schema";
import { TwitterSentimentAnalysisResultBodyType } from "./types";
import { analyzeSentiment } from "./function";

import { TwitterAction } from "../twitter-action";

export class TwitterSentimentAnalysisAction implements TwitterAction<typeof TwitterSentimentAnalysisInputSchema, TwitterSentimentAnalysisResultBodyType> {
  public name = TWITTER_SENTIMENT_ANALYSIS_NAME;
  public description = TWITTER_SENTIMENT_ANALYSIS_PROMPT;
  public argsSchema = TwitterSentimentAnalysisInputSchema;
  public func = analyzeSentiment;
} 