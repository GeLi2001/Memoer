import { MemoryManager } from "../base";
import { SlidingWindowStrategy } from "./strategies/sliding-window";
import {
  ConversationConfig,
  ConversationMessage,
  ConversationStrategy
} from "./types";

export class ConversationManager extends MemoryManager<ConversationMessage> {
  conversationHistory: ConversationMessage[] = [];

  constructor(config: ConversationConfig) {
    const strategyType = config.strategy;
    let strategy;
    switch (strategyType) {
      case ConversationStrategy.SLIDING_WINDOW: {
        const windowSize = config.slidingWindowSize ?? 10;
        strategy = new SlidingWindowStrategy({
          windowSize
        });
        break;
      }
    }
    super(strategy);
  }

  async getContext(): Promise<ConversationMessage[]> {
    if (this.memoryStrategy) {
      return this.memoryStrategy.optimize(this.conversationHistory);
    }
    return this.conversationHistory;
  }

  async getFullContext(): Promise<ConversationMessage[]> {
    return this.conversationHistory;
  }

  async add(message: ConversationMessage): Promise<void> {
    this.conversationHistory.push(message);
  }
}
