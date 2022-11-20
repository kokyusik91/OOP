{
  function checkNotNull(arg: number | null): number{
    if (arg == null) {
      throw new Error('not valid number')
    }

    return arg;
  }
}