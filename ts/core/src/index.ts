import { memoryStore } from "./memory/store";
import { Memoer, Memory, MemoryConfig } from "./memory/types";

export const memoer: Memoer = {
  createMemory(config: MemoryConfig): void {
    memoryStore.create(config);
  },

  memory(params: { id: string }): Memory {
    return memoryStore.get(params.id);
  }
};

export * from "./memory/managers/base";
export * from "./memory/managers/conversation/types";
export * from "./memory/types";
