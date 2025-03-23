import { CoreMessage, CoreSystemMessage } from "ai";

export enum ConversationStrategy {
  SLIDING_WINDOW = "sliding_window"
}

export type ConversationMessage = Exclude<CoreMessage, CoreSystemMessage> & {
  id?: string;
  createdAt?: Date;
};

export type ConversationConfig = {
  strategy?: ConversationStrategy;
  slidingWindowSize?: number;
};
