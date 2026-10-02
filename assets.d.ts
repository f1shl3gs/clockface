declare module '*.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*?raw' {
  const content: string
  export default content
}
