{// 커피 원두콩을 변수로
const coffeeBean = '체리커피 원두'

// 몇번의 shots을 내릴지
type Shots = 1 | 2 | 3;

const makeCoffee = (shots: Shots) => {
  switch (shots) {
    case (1):
      return `${shots}shots ${coffeeBean} 커피`
      break;
    case (2):
      return `${shots}shots ${coffeeBean} 커피`
      break;
    case (3):
      return `${shots}shots ${coffeeBean} 커피`
      break;
    default:
      throw new Error('커피를 만들 수 없습니다 ㅠㅠ')
  }
}

  console.log(makeCoffee(2))

}