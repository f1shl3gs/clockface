// Compatibility aliases for older Storybook and animation package types.

declare module 'react' {
  export type SFC<P = {}> = FunctionComponent<P>
  export type ReactType<P = any> = ElementType<P>
  export type Validator<T> = any
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends JSX.IntrinsicElements {}
    type Element = JSX.Element
    interface ElementClass extends JSX.ElementClass {}
    interface ElementAttributesProperty
      extends JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute
      extends JSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends JSX
      .IntrinsicClassAttributes<T> {}
    type LibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<
      C,
      P
    >
  }
}
