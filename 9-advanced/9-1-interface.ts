type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface {
  x: number;
  y: number;
}


// 타입 지정
const obj1: PositionType = {
  x: 1,
  y: 2,
}

const obj2: PositionInterface = {
  x: 3,
  y: 4,
  z: 5,
}

// Class 지정
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}


// Extends
// 상속을 통한 확장
interface ZpositionInterface extends PositionInterface {
  z : number
}

// 타입을 intersection으로 확장 가능하다.
type ZpositionType = PositionType & { z: number }


// Only interfaces can be merged
// 같은 interface 명으로 한번 더 사용
interface PositionInterface {
  z: number;
}


// Type aliases can use computed properties
type Person = {
  name: string,
  age: number
}

type Nmae = Person['name'] // string