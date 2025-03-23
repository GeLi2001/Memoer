export abstract class MemoryManager<Imprint, Context = Imprint[]> {
  memoryStrategy?: MemoryStrategy<Context>;

  constructor(memoryStrategy?: MemoryStrategy<Context>) {
    this.memoryStrategy = memoryStrategy;
  }

  abstract add(imprint: Imprint): Promise<void>;

  abstract getContext(): Promise<Context>;

  abstract getFullContext(): Promise<Context>;
}

export abstract class MemoryStrategy<C> {
  constructor() {}
  abstract shouldTrigger(context: C): boolean;
  abstract optimize(context: C): C;
  abstract getOptimizedContext(context: C): C;
}
