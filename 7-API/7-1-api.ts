{Array


const array: number[] = [];
const length = array.push(1, 2, 3, 4);
  console.log(length)
  const joinArray = array.join(',')
  console.log(joinArray)


// function restParamert<T>(...args :T[]) {
//   console.log(args)
// }

  // console.log(restParamert('asd','223', {name : 'string'}))
}

type Student = {
  passed : boolean
}

const students: Student[] = [{ passed: true }, { passed: true }, { passed: true }];
/**
 * 배열의 요소를 탐색하면서, 콜백함수로 넘긴 조건을 만족하지 않으면 false가 떨어진다. (살짝 test하는 함수 느낌)
 */
const result = students.every(student => {
  return student.passed
})

/**
 * every 함수의 첫번쨰 사용법
 * every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
 */
class Animal {

}

class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog : boolean = false
}

const animals: Animal[] = [new Cat(), new Dog(), new Cat()];

function isThereAcat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isThereAcat));