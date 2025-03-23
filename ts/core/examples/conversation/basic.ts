import { memoer, MemoryConfig } from "../../src";

// Create a new memory instance with a unique ID
const memoryConfig: MemoryConfig = {
  id: "conversation-1",
  systemMessage: {
    role: "system",
    content: "You are a helpful assistant."
  }
};

// Initialize the memory
memoer.createMemory(memoryConfig);

// Retrieve the memory by ID
const memory = memoer.memory({ id: "conversation-1" });

// Add user and assistant messages to the conversation
memory.conversation.add({
  role: "user",
  content: "Hello, how are you today?"
});

memory.conversation.add({
  role: "assistant",
  content: "I'm doing well, thank you for asking! How can I help you today?"
});

memory.conversation.add({
  role: "user",
  content: "Tell me about memory management in AI systems."
});

const anotherMemoryConfig: MemoryConfig = {
  id: "conversation-2"
};

memoer.createMemory(anotherMemoryConfig);
const anotherMemory = memoer.memory({ id: "conversation-2" });

anotherMemory.conversation.add({
  role: "user",
  content: "This is a different conversation."
});

// Demonstrate accessing different memory instances
console.log(`Memory 1 ID: ${memory.id}`);
console.log(`Memory 1 conversation:`, memory.conversation.getContext());
console.log(`Memory 2 ID: ${anotherMemory.id}`);
console.log(`Memory 2 conversation:`, anotherMemory.conversation.getContext());
