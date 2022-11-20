{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  // class의 규격 === 계약서
  // class는 interface의 규격을 다 따라야한다.
  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  /**
   * 클래스를 만든 다는 것은 서로 관련 있는 데이터나 함수를 묶어 놓는 기능을 한다.
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    // 클래스의 data들은 위에 설정해 놓을 수 있다.
    private currentCoffeeBean: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;
    constructor(coffeeBean: number) {
      // 처음에 커피 콩이 얼마나 들어 있는지
      this.currentCoffeeBean = coffeeBean;
    }

    // 아얘 인스턴스화를 바로 시키는 함수! 팩토리 메서드
    // static makeMachine(coffeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeBeans);
    // }

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
    /** 추상적인 Method이기 떄문에 구현부는 적지 않는다. */
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      /** 커피를 만드는 과정들을  */
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  /** CoffeeMachine을 상속받은 Class */
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, private serialNumber: string) {
      super(beans);
    }
    // 자식 Class에만 있는 메서드
    private steamMilk(): void {
      console.log('Steamming some milk..... 🥛');
    }
    /** 부모 Class에 있는 makeCoffee 함수를 override 했다. */
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }
  /** Coffee Cup에 설탕을 추가해주는 Class */
  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }
  // 다양한 머신들을 만들 수 있다!
  const machines = [new CaffeLatteMachine(16, '1'), new SweetCoffeeMaker(16)];

  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(2);
  });
}
