import { ConversationManager } from "./manager";
import { ConversationConfig } from "./types";

export const createConversation = (config: ConversationConfig) => {
  return new ConversationManager(config);
};
