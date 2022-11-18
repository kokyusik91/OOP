{
  interface Computer {
    powerOn(): void;
  }

  class LapTop implements Computer {
    private static powerStatus: boolean = false;
    constructor() {}
    // 전원 키는데 필요한 전력
    static makeMachine(): LapTop {
      return new LapTop();
    }

    private static bootingPromise(): Promise<any> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('부팅중....!');
        }, 3000);
      });
    }

    private static openMainWindow(): Promise<any> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('윈도우 켜짐!');
        }, 2000);
      });
    }

    private static async booting() {
      if (LapTop.powerStatus === true) {
        const response = await LapTop.bootingPromise();
        console.log(response);
      } else throw new Error('먼저 전원을 켜주세요!');
    }
    // 전원 키는 메서드
    async powerOn() {
      if (LapTop.powerStatus === false) {
        LapTop.powerStatus = true;
        console.log('전원이 켜졌습니다!');
        await LapTop.booting();
        const response = await LapTop.openMainWindow();
        console.log(response);
      } else throw new Error('power is alreay on!');
    }
    // 전원 끄는 메서드
    powerOff() {
      if (LapTop.powerStatus === true) {
        console.log('전원이 꺼졌습니다!');
        LapTop.powerStatus = false;
      } else throw new Error('power is already off');
    }
    // 패스워드 입력
  }

  async function computer() {
    const myLabTop = new LapTop();
    console.log(myLabTop);
    await myLabTop.powerOn();
  }

  computer();
}
