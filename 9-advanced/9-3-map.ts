{
  type Video = {
    title: string;
    author: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  //  Kyusik = {
  //   name: '곡식',
  //   age: 32,
  //   job: 'FrontEnd'
  // }

  type Person = {
    name: string;
    age: number;
    job: 'FrontEnd' | 'BackEnd';
  };

  const kyusik: Nullable<Person> = {
    name: '곡식',
    age: null,
    job: 'FrontEnd',
  };

  // Proxy라는 타입은 어떤 타입을 받아서, 그 타입의 값을 바로 return하는 get 함수
  // 그 타입을 인자로 받아서 처리하는 set 함수가 있다.
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Func = {
    nginx: string;
    aws: number;
  };
  // type Proxify는 <T>라는 객체 타입을 받아서, 그 객체의 키를 순회하면서, Proxy 타입에 그 객체의 키에해당하는 value의 타입을 넘겨준다.

  const 프록시: Proxy<number> = {
    get() {
      return 1;
    },

    set(arg) {
      console.log(arg);
    },
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  const 프록시2: Proxify<Func> = {
    nginx: {
      get() {
        return 'kyusik';
      },
      set(arg) {
        console.log(arg);
      },
    },
    aws: {
      get() {
        return 32;
      },
      set(arg) {
        console.log(arg);
      },
    },
  };
}
