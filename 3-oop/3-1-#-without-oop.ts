{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  // 커피 콩 그램 
  let coffeeBeans = 0;
  // 커피 샷 당 필요한 coffee 콩 그램
  const BEANS_GRAM_PER_SHOT = 7;

  function makeCoffee(shots: number): CoffeeCup {
    // 남아 있는 커피 콩 그램이 햔재 만들 커피 콩 그램보다 작으면 에러 발생
    if (coffeeBeans < BEANS_GRAM_PER_SHOT * shots) {
      throw new Error('Not enough coffee beans')
    }
    // 만든 커피 만큼 현재 커피 그램수를 줄인다.
    coffeeBeans -= BEANS_GRAM_PER_SHOT * shots;

    return {
      shots,
      hasMilk : false
    }
  }
  // 커피콩 충전해 놓기
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT
  const coffee = makeCoffee(2)
  console.log(coffee);

}