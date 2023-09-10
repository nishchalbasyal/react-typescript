import Greet from "../Greet"

 
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.messageCount}
    </div>
  )
}

export default CustomComponent
