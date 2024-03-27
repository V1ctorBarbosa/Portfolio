export interface IText {
    type: 'h1' | 'h2' | 'h3' | 'c1' | 'c2' | 'p' | null
    children: string,
    color?: string,
    size?: string, 
    align?: 'left' | 'center' | 'right'
}