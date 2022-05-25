import { useState } from "react"

const Container = ({ children }) => <div>{ children }</div>

const AddOneButton = ({setCounter}) => (
    <div>
        <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
    </div>
)

const DeleteOneButton = ({ setCounter }) => (
    <div>
        <button onClick={() => setCounter((v) => v -1 )}>Delete One</button>
    </div>
)

const Counter = ({counter}) => <div>Counter: { counter }</div>


export default function CounterUseState() {
    const [counter, setCounter] = useState(0)
    return (
    <div>
        <Container>
            <AddOneButton setCounter={setCounter} />
            <DeleteOneButton setCounter={setCounter} />
        </Container>
        <Counter counter={counter} />
    </div>
    )
}