export interface Item {
  id: number
  path: string
  text: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}