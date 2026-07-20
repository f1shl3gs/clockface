// Compatibility aliases for older Storybook and animation package types.
import * as React from 'react'

declare module 'react' {
  export type SFC<P = {}> = React.FunctionComponent<P>
  export type ReactType<P = any> = React.ElementType<P>
  export type Validator<T> = any
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    type Element = React.JSX.Element
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>
  }
}
