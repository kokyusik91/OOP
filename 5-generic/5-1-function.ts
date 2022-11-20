{
  function checkNotNullNumber(arg: number | null): number{
    // null이면 에러 반환
    if (arg == null) {
      throw new Error('not valid number')
    }

    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
      if (arg == null) {
      throw new Error('not valid number')
    }

    return arg;
  }
  // 코딩하는 시점에 checkNotNull 함수는 숫자타입으로 지정된다.
  const number = checkNotNull(123);
  const string : string = checkNotNull('hello');
}