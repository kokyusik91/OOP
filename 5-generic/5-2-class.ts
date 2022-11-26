{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEiter<L, R> implements Either<L, R> {
    /**
     * 내부 적으로만 쓰는 멤버 변수이기 때문에 private 키워드를 붙인다.
     * @param leftValue
     * @param rightNumber
     */
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
