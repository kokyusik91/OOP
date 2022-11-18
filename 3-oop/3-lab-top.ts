{
  interface Computer {
    /**
     * @param power 파워를 충전해줘야 컴퓨터가 켜집니다!
     */
    powerOn(power: number): void;
  }

  class LapTop implements Computer {
    private static powerStatus: boolean = false;
    private static MINIMUM_POWER_NEEDED: number = 10;
    private static currentPower: number = 0;
    constructor() {}
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

    // 전원 키는데 필요한 전력
    // 충분한 파워 공급
    private static chargePower(power: number) {
      if (power < LapTop.MINIMUM_POWER_NEEDED)
        throw new Error('we need more power charge');
      else {
        console.log(`${power}충전됨`);
        console.log('@@@@ 파워 준비 완료! @@@@@');
        LapTop.currentPower = power;
        return true;
      }
    }
    // 전원이 켜지자마자 실행되는 함수!
    private static autoOff(currentPower: number) {
      // 파워가 0이거나 0보다 작아지면 빠져나옴!
      while (currentPower > 0) {
        setInterval(() => {
          currentPower -= 1;
        }, 1000);
      }
      console.log('남은 파워 없으므로 강제 종료!');
    }

    private static async booting() {
      if (LapTop.powerStatus === true) {
        const response = await LapTop.bootingPromise();
        console.log(response);
      } else throw new Error('먼저 전원을 켜주세요!');
    }
    // 전원 키는 메서드
    async powerOn(power: number) {
      if (LapTop.powerStatus === false && LapTop.chargePower(power)) {
        LapTop.powerStatus = true;
        LapTop.autoOff(LapTop.currentPower);
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
    await myLabTop.powerOn(71);
  }

  computer();
}

// 1. 전원 일정이상 충전! -> private (일정 충전량 이하면 에러)
// 2. 파워 ON -> public
//   2-1. 부팅중... -> private
//   2-2. 윈도우 화면 켜짐 -> private
// 3. 파워 OFF -> public
