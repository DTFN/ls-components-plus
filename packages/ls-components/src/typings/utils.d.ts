type ObjToKeyValUnion<T> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

type ObjToKeyValArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type ObjToSelectedValueUnion<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

type SNToOptionType = {
  value: string | number;
  label: string | number;
};

type BSToOptionType = {
  value: boolean;
  label: string;
};

type SNToBaseType = {
  [key: string | number]: string | number | boolean | undefined;
};

type SNToSNType = {
  [key: string | number]: string | number;
};

type SNToArraySNType = {
  [key: string | number]: { string: (string | number)[] };
};

type SNToSNBType = {
  [key: string | number]: string | number | boolean;
};

type SymbolToSNType = {
  [key: symbol | string]: string | number;
};
