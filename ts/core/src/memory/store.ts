import { createConversation } from "./managers/conversation";
import { Memory, MemoryConfig, MemoryStore } from "./types";

class InMemoryStore implements MemoryStore {
  private store = new Map<string, Memory>();

  get(id: string): Memory {
    const memory = this.store.get(id);
    if (!memory) {
      throw new Error(`Memory with id ${id} not found`);
    }
    return memory;
  }

  set(id: string, memory: Memory): void {
    this.store.set(id, memory);
  }

  has(id: string): boolean {
    return this.store.has(id);
  }

  create(config: MemoryConfig): Memory {
    if (this.has(config.id)) {
      throw new Error(
        `Memory with id ${config.id} already exists. Use a different ID or retrieve the existing memory.`
      );
    }

    const memory = createMemoryInstance(config);
    this.set(config.id, memory);
    return memory;
  }
}

function createMemoryInstance(config: MemoryConfig): Memory {
  const conversation = createConversation(config.managers?.conversation || {});
  return {
    id: config.id,
    config,
    conversation
  };
}

// singleton
export const memoryStore = new InMemoryStore();
