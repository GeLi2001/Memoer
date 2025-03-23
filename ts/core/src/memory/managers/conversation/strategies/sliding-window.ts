import { MemoryStrategy } from "../../base";
import { ConversationMessage } from "../types";

export class SlidingWindowStrategy extends MemoryStrategy<
  ConversationMessage[]
> {
  private windowSize: number;

  constructor(options: { windowSize: number }) {
    super();
    this.windowSize = options.windowSize;
  }

  shouldTrigger(context: ConversationMessage[]): boolean {
    return context.length > this.windowSize;
  }

  optimize(context: ConversationMessage[]): ConversationMessage[] {
    const recentMessages = context.slice(-this.windowSize);
    return recentMessages;
  }

  getOptimizedContext(context: ConversationMessage[]): ConversationMessage[] {
    return this.optimize(context);
  }
}
