interface DescriptionProps {
  children: React.ReactNode
}
const Description = ({ children }: DescriptionProps) => {
  return <h4>{children}</h4>
}

export default Description
