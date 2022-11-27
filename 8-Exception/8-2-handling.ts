{

class NetWorkClient {
  tryToConnet() {
    throw new Error("net work is not existed")
  }
}
  class UserService {
  // 의존성 주입 DI 
  //클래스 내부에서 직접 생성해서 사용하는것이 아니라 외부에서 만들어진 인스턴스를 생성자에 인자로 주입 받아서 쓰기 때문에
  constructor(private network: NetWorkClient) { }
  
  login() {
    this.network.tryToConnet()
    // .....login 로직
  }
}


class App {
  constructor(private userService: UserService) { }
  
  run() {
    try {
      this.userService.login()
    } catch {
      // application Level에서 의미있는 에러 핸들링을 한다 
      // 예를들어 app에서는 SnackBar를 띄워준다던가 뭔가 의미 있는 에러 핸들링이 가능하다.
      console.log("catched!!")
    }
  }
}
  
  const network = new NetWorkClient();
  const user = new UserService(network)

  const app = new App(user)
  app.run()
}