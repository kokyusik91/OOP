{
  /**
   * Stack에 필요한 메서드
   * 1. push
   * 2. pop
   */

  interface Stack {
    readonly size: number;
    push(text: string): void;
    pop(): string;
  }

  class StackProvider implements Stack {
    /** 내부 구현 */
    private initiate: string = '';

    public push(text: string): void {}

    public pop() {}
  }

  const customStack = new StackProvider();
  console.log(customStack);
  customStack.push('kyusik');
  console.log(customStack);
  customStack.push('bob');
  console.log(customStack);
}
