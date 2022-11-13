{
  class User {
    firstName: string = '';
    lastName: string = '';
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('ko', 'kyusik');
  console.log(user.firstName);
}
