
export default function BoilingVerdict(props){
    if (props.celcius > 100) {
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>
}