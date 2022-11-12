{

  type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
  }
  
  /**
   * 클래스를 만든 다는 것은 서로 관련 있는 데이터나 함수를 묶어 놓는 기능을 한다.
   */
  class CoffeeMaker {
    // 클래스의 data들은 위에 설정해 놓을 수 있다.
    private currentCoffeeBean: number = 0
    private static BEANS_GRAM_PER_SHOT: number = 7
    private constructor(coffeeBean: number) {
      // 처음에 커피 콩이 얼마나 들어 있는지
      this.currentCoffeeBean = coffeeBean
    }

    // 아얘 인스턴스화를 바로 시키는 함수!
    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.currentCoffeeBean += beans
    }

    makeCoffee(shots: number): CoffeeCup  {
      if (this.currentCoffeeBean < CoffeeMaker.BEANS_GRAM_PER_SHOT * shots) {
        throw new Error('There is not enough bean to make coffee')
      }
      
      this.currentCoffeeBean -= CoffeeMaker.BEANS_GRAM_PER_SHOT * shots
      return {
        shots,
        hasMilk : true
      }
    }

  }
  // 처음에 커피 머신을 만들때, 충전할 커피량을 설정을 한다.
  // const maker = new CoffeeMaker(3)
  // maker.fillCoffeeBeans(5)
  // maker.fillCoffeeBeans(-1)
  // console.log(maker);
  const maker = CoffeeMaker.makeMachine(27);
  console.log(maker);
}

