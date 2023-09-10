type InputProps = {
    value:string
    handleChanged: (event:React.ChangeEvent<HTMLInputElement>) => void
 }
export const Input = ({value,handleChanged}: InputProps) => {
  return (
    <input type="text" value={value} onChange={handleChanged}/>
  )
}

 