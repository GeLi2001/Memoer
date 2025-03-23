import { CoreMessage } from "ai";
import { ConversationManager } from "./managers/conversation/manager";
import { ConversationConfig } from "./managers/conversation/types";

export interface MemoryConfig {
  id: string;
  systemMessage?: CoreMessage;
  managers?: {
    conversation?: ConversationConfig;
  };
}

export interface Memory {
  id: string;
  config: MemoryConfig;
  conversation: ConversationManager;
}

export interface MemoryStore {
  get(id: string): Memory | undefined;
  set(id: string, memory: Memory): void;
  has(id: string): boolean;
}

export interface Memoer {
  createMemory(config: MemoryConfig): void;
  memory(params: { id: string }): Memory;
}
