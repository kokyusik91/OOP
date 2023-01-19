{
  type CoffeCup = {
    shots: number;
    hasMilk: false;
  };

  class CoffeeMaker {
    private currentCoffeeBeanGrams: number;
    // 이 기계가 1 Shot 당 사용하는 커피 그램
    private static COFFEBEAN_PER_1SHOT: number = 7;

    constructor(coffeeBean: number) {
      // 커피 메이커 초기화 할때 커피 콩을 넣어줌.
      this.currentCoffeeBeanGrams =
        coffeeBean * CoffeeMaker.COFFEBEAN_PER_1SHOT;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // 커피기계를 만들어놓고 커피 콩을 추가하는 함수!!!
    fillCoffeeBeans(beans: number) {
      // 메서드 안에서 에러 핸들링을 함으로써 조금 더 정교하게 할 수 있다.
      if (beans < 0) {
        throw new Error('CoffeeBeans should be greater than 0');
      }
      this.currentCoffeeBeanGrams += beans * CoffeeMaker.COFFEBEAN_PER_1SHOT;
    }
    makeCoffee(shots: number): CoffeCup {
      if (
        this.currentCoffeeBeanGrams <
        shots * CoffeeMaker.COFFEBEAN_PER_1SHOT
      ) {
        throw new Error('There is not enough CoffeeBean!');
      }
      this.currentCoffeeBeanGrams -= shots * CoffeeMaker.COFFEBEAN_PER_1SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  // 일반적으로 인스턴스화 시키는 방법
  const maker = new CoffeeMaker(5);
  console.log('maker', maker);
  maker.fillCoffeeBeans(1);
  console.log('maker', maker);
  // 내부에 선언된 메서드로 인스턴스화 시키는 법
  const coffeeMachine = CoffeeMaker.makeMachine(17);
  console.log('coffeeMachine', coffeeMachine);
  coffeeMachine.fillCoffeeBeans(1);
  console.log('coffeeMachine', coffeeMachine);
}
