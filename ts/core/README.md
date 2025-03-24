<div align="center">
<img src="https://raw.githubusercontent.com/GeLi2001/memoer/main/assets/memoer.webp" alt="Memoer" width="200"/>
</div>

# memoer

A memory management system for LLMs.

## AI SDK Native Support

Direct/Native compatibility with Vercel's [AI SDK](https://github.com/vercel/ai) - the mainstream unified llm api interface in typescript.

Join our [Discord community](https://discord.gg/pNkEk4b4TW) for discussions, help and updates.

## Installation

```bash
npm install memoer
```

## Usage

```typescript
import { memoer, MemoryConfig } from "memoer";
import { ConversationStrategy } from "memoer/dist/memory/managers/conversation/types";

// Create a new memory instance
const memoryConfig: MemoryConfig = {
  id: "conversation-1",
  systemMessage: {
    role: "system",
    content: "You are a helpful assistant."
  },
  managers: {
    conversation: {
      // Optional: Configure conversation strategy
      strategy: ConversationStrategy.SLIDING_WINDOW,
      slidingWindowSize: 10 // Number of messages to keep in context
    }
  }
};

// Initialize the memory
memoer.createMemory(memoryConfig);

// Retrieve the memory by ID
const memory = memoer.memory({ id: "conversation-1" });

// Add messages to the conversation
memory.conversation.add({
  role: "user",
  content: "Hello, how are you today?"
});

// Get optimized conversation context (affected by strategy)
const context = await memory.conversation.getContext();

// Get full conversation history regardless of strategy
const fullHistory = await memory.conversation.getFullContext();
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Related Packages

- `@memoer/web` - React hooks for memory management (coming soon)

## License

Apache 2.0 - See LICENSE for more information.
