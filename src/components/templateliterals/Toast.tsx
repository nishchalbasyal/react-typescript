 

type HorizantalPostion = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizantalPostion}-${VerticalPostion}`,'center-center'> | 'center'
}

const Toast = ({position}: ToastProps) => {
  return (
    <div>
      Toast Notification Postion - {position}
    </div>
  )
}

export default Toast
