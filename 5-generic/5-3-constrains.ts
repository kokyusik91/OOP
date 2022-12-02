// interface Employee {
//   pay(): void;
// }

// class FullTimeEmployee implements Employee {
//   pay() {
//     console.log(`full Time!!`);
//   }

//   workFullTime() {}
// }

// class PartTimeEmployee implements Employee {
//   pay(): void {
//     console.log(`Part Time!`);
//   }

//   workPartTime() {}
// }

// /**
//  * 세부적인 타입을 인자로 받아서, 정말 추상적인 타입으로 return 하는 함수는 BAD!!!!
//  */
// function payBad(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }

// /**
//  * 코딩하는 시점에는 employee에 어떤 타입의 파라미터가 들어올지 모르기 때문에 interface의 pay() 메서드에 접근 할 수 없다...
//  */
// function payGood<T extends Employee>(employee: T): T {
//   employee.pay();
//   return employee;
// }

// const kyusik = new FullTimeEmployee();
// const bob = new PartTimeEmployee();

// kyusik.workFullTime();
// bob.workPartTime();

// // 이 시점에서는 interface Employee만 기억한다.
// // 새부적인 Class의 정보는 잃어버린다. 그래서 work""Time 메서드에 접근 할 수 없다.
// const kyusikAfterPay = payGood(kyusik);

// // console.log(kyusikAfterPay);

// const obj = {
//   name: 'kyusik',
//   age: 20,
// };

// const obj2 = {
//   animal: '🐕',
// };

// function getValue<T, K extends keyof T>(obj: T, value: K): T[K] {
//   return obj[value];
// }

// console.log(getValue(obj, 'age'));

const arrayLikeObject = {
  0: 'hello',
  1: 'world',
  length: 2,
};

const arr = Array.from(arrayLikeObject);
console.dir('arr', arr);
