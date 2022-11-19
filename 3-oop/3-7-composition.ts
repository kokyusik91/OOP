{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
    milkName?: string;
  };
  // class의 규격 === 계약서
  // class는 interface의 규격을 다 따라야한다.
  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup;
  }

  interface Sugarmaker {
    addSugar(coffee: CoffeeCup): CoffeeCup;
  }

  interface MilkMaker {
    addMilk(milk: CoffeeCup): CoffeeCup;
  }

  /**
   * 클래스를 만든 다는 것은 서로 관련 있는 데이터나 함수를 묶어 놓는 기능을 한다.
   */
  class CoffeeMachine implements CoffeeMaker {
    // 클래스의 data들은 위에 설정해 놓을 수 있다.
    private currentCoffeeBean: number = 0;
    private static BEANS_GRAM_PER_SHOT: number = 7;
    constructor(
      coffeeBean: number,
      // 인터페이스를 주입한다.
      private sugar: Sugarmaker,
      private milk: MilkMaker,
    ) {
      // 처음에 커피 콩이 얼마나 들어 있는지
      this.currentCoffeeBean = coffeeBean;
    }

    // // 아얘 인스턴스화를 바로 시키는 함수! 팩토리 메서드
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      /** 커피를 만드는 과정들을  */
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      // 기존 커피에 설탕 추가
      const sugarAdded = this.sugar.addSugar(coffee);
      // 기존 커피에 우유 추가
      return this.milk.addMilk(sugarAdded);
    }
  }
  // 비싼 설탕을 추가해줌.
  class FancySugar implements Sugarmaker {
    addSugar(coffee: CoffeeCup): CoffeeCup {
      console.log('비싼 설탕을 넣는다... 🤑');
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  // 싼 설탕을 추가해줌.
  class CheapSugar implements Sugarmaker {
    private getSugar(): void {
      console.log('싼 설탕을 넣는다..... 🤥');
    }
    addSugar(coffee: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  // 우유를 주입 해줌
  class Milk implements MilkMaker {
    constructor(private milk: string) {}
    private steamMilk(milk: string): void {
      console.log(`${milk} 우유 데우기!!! 🍼`);
    }

    addMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk(this.milk);
      return {
        ...coffee,
        hasMilk: true,
        milkName: `${this.milk} 우유`,
      };
    }
  }
  // 우유를 빼줌
  class NoMilk implements MilkMaker {
    addMilk(coffee: CoffeeCup): CoffeeCup {
      console.log('우유 빼기.... ✏️');
      return {
        ...coffee,
      };
    }
  }
  // 다양한 속성들을 만들어서 coffeeMachine에 주입할 수 있다
  const fancySugar = new FancySugar();
  const cheapSugar = new CheapSugar();
  const choCo = new Milk('딸기');
  const noMilk = new NoMilk();
  // 다양한 클래스들을 주입해서 다양한 인스턴스들을 만들 수 있다!!
  const fancyCoffeeMachine = new CoffeeMachine(23, fancySugar, choCo);
  console.log(fancyCoffeeMachine.makeCoffee(2));

  const cheapCoffeeMachine = new CoffeeMachine(23, cheapSugar, noMilk);
  console.log(cheapCoffeeMachine.makeCoffee(3));
}
