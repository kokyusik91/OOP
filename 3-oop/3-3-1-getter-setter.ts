{
  class User {
    // private firstName: string;
    // private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('Age should be greater than 0')
      } else {
        this.internalAge = num;
      }
    } 
    /**
     * 밑에 있는 this.firstName이랑 같은 말
     */
    constructor(private firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'Jobs');
  // user.firstName = "kyusik"
  // console.log(user.fullName);
  user.age = -4
  console.log(user.age);
}