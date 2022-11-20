{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEiter<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightNumber: R) {}
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightNumber;
    }
  }

  const eiter = new SimpleEiter('12', 12);
  const eiter2 = new SimpleEiter({ name: 'hello' }, 12);
}
