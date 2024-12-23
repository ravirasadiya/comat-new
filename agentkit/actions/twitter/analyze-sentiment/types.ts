import { z } from "zod";

import { TweetV2, UserV2 } from "twitter-api-v2";

import { TwitterSentimentAnalysisInputSchema } from "./input-schema";
import { TwitterActionResult } from "../twitter-action";

export type TwitterSentimentAnalysisSchemaType = typeof TwitterSentimentAnalysisInputSchema;

export type TwitterSentimentAnalysisArgumentsType = z.infer<TwitterSentimentAnalysisSchemaType>;

export type TwitterSentimentAnalysisResultBodyType = {};

export type TwitterSentimentAnalysisResultType = TwitterActionResult<TwitterSentimentAnalysisResultBodyType>;