type Check<T> = T extends string ? boolean : number;

type NormalType = Check<string>;
type UnNormalType = Check<boolean>;

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends Function
  ? 'function'
  : object;

type T1 = TypeName<number>;
type T2 = TypeName<() => void>;
