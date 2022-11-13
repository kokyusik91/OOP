{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 클래스를 만든 다는 것은 서로 관련 있는 데이터나 함수를 묶어 놓는 기능을 한다.
   */
  class CoffeeMaker {
    // 클래스의 data들은 위에 설정해 놓을 수 있다.
    currentCoffeeBeanGram: number = 0;
    static BEANS_GRAM_PER_SHOT: number = 7;
    constructor(coffeeBean: number) {
      this.currentCoffeeBeanGram = coffeeBean * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (
        this.currentCoffeeBeanGram <
        CoffeeMaker.BEANS_GRAM_PER_SHOT * shots
      ) {
        throw new Error('There is not enough bean to make coffee');
      }

      this.currentCoffeeBeanGram -= CoffeeMaker.BEANS_GRAM_PER_SHOT * shots;
      return {
        shots,
        hasMilk: true,
      };
    }
  }
  // 처음에 커피 머신을 만들때, 충전할 커피량을 설정을 한다.
  const maker = new CoffeeMaker(9);
  console.log('maker', maker);
  maker.makeCoffee(2);
  console.log('maker', maker);
  maker.makeCoffee(2);
  console.log('maker', maker);

  // console.log(coffee.makeCoffee(2))
}
