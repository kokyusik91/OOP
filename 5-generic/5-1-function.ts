{
  function checkNotNullNumber(arg: number | null): number {
    // null이면 에러 반환
    if (arg == null) {
      throw new Error('not valid number');
    }

    return arg;
  }

  /**
   *
   * @param arg : generic
   * @returns : generic
   * 어떤 값을 인자로 받아서, null이 아니면 받은 타입 그대로 return 한다.
   * T또는 null 타입을 받아서 T타입 을 다시 return 한다.
   */
  function checkNotNull<T>(arg: T): T {
    if (arg == null) {
      throw new Error('not valid number');
    }

    return arg;
  }

  const checkNotNull2 = <T>(arg: T | null) => {
    if (arg == null) {
      throw new Error('not valid number');
    }

    return arg;
  };

  const number2 = checkNotNull2(123);
  const hola: string = checkNotNull2('kyuskko');

  // 코딩하는 시점에 checkNotNull 함수는 숫자타입으로 지정된다.
  const number = checkNotNull(123);
  const string: string = checkNotNull('hello');
}
