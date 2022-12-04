{
  console.log(this)

  class Counter {
	count = 0;
	increase = function (){
		console.log(this);
	}
}

const counter = new Counter();
counter.increase(); // this는 Counter를 가르키고 있다.

// 메서드를 caller라는 변수에 할당하였다.
const caller = counter.increase;
caller(); // undefined
}