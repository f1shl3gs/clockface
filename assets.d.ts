declare module '*.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.md' {
  const content: string
  export default content
}

declare module '*?raw' {
  const content: string
  export default content
}
