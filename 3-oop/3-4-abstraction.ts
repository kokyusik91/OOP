{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // class의 규격 === 계약서
  // class는 interface의 규격을 다 따라야한다.
  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  /**
   * 클래스를 만든 다는 것은 서로 관련 있는 데이터나 함수를 묶어 놓는 기능을 한다.
   */
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // 클래스의 data들은 위에 설정해 놓을 수 있다.
    private currentCoffeeBean: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private constructor(coffeeBean: number) {
      // 처음에 커피 콩이 얼마나 들어 있는지
      this.currentCoffeeBean = coffeeBean;
    }

    // 아얘 인스턴스화를 바로 시키는 함수! 팩토리 메서드
    static makeMachine(coffeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.currentCoffeeBean += beans;
    }

    clean() {
      console.log('Cleaning the machine!!');
    }
    // 커피 그라인더로 갈기
    // grindBeans, preheat, extract함수들에 private 키워드를 붙여주면서, 외부에서는 접근할 수 없게한다.
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.currentCoffeeBean < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans!');
      }
      // 이미 갈고 있는 커피 콩에서 갈린 콩
      this.currentCoffeeBean -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;
    }

    private preheat(): void {
      console.log('heating up,,,,,,');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      /** 커피를 만드는 과정들을  */
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(22);
  // maker.makeCoffee(2);
  // maker.fillCoffeeBeans(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(22);
  maker2.makeCoffee(2);
  // maker2.fillCoffeeBeans(2); // -> Error

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(22);
  maker3.makeCoffee(2);

  // 인스턴스를 인자로 받아 올 수 있다!
  class AmateurUser {
    // CoffeeMaker라는 interface를 받아온다.
    constructor(private machine: CoffeeMaker) {}
    makeAmaturCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    // CommercialCoffeeMaker라는 interface를 받아온다.
    constructor(private machine: CommercialCoffeeMaker) {}
    makeProBaristaCoffee() {
      this.machine.fillCoffeeBeans(3);
      const coffee = this.machine.makeCoffee(2);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(22);
  const amateur = new AmateurUser(maker);
  amateur.makeAmaturCoffee();
  const pro = new ProBarista(maker);
}
