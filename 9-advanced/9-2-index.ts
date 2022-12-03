{
  const obj = {
    name : 'kyusikko'
  }

  obj.name; // kyusikko
  obj['name'] // kyusikko


  type Animal = {
    name: string;
    age: number;
    gender : 'male' | 'female'
  }

  const cat: Animal = {
    name: "냥이",
    age: 12,
    gender : 'female'
  }

  type Name = Animal['name']; // string
  type Keys = keyof Animal
  type Gender = Animal['gender']

  const catName: Name = cat.name
  const animalInfo: Keys = 'gender'
  const animalGender: Gender = 'male'
  
  type Person = {
    name: string;
    // 이런식으로 타입을 지정 할 수 있다?!?!
    gender : Animal['gender']
  }

  const specificPerson: Person = {
    name: 'kyusikko',
    gender : 'female'
  }

}