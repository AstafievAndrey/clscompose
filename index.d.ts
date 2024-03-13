declare namespace clscompose {
  type ValueType =
    | string
    | number
    | null
    | boolean
    | undefined
    | object
    | Array;
  function clscompose(...args: ValueType[]): string;
}

declare function clscompose(...args: clscompose.ValueType): string;

export = clscompose;
