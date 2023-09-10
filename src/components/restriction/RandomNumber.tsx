type RandomNumberType = {
    value: number
}

type PostiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?:never
    isNegative?:never
}



// type RandomNumberProps = {
//     value: number
//     isPositive?:boolean
//     isNegative?:boolean
//     isZero?:boolean
// }
type RandomNumberProps = PostiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}:RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'postive'} {isNegative && 'negative'} {' '}
            {isZero && 'zero'}

        </div>
    )
}