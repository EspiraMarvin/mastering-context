import { useState, createContext, useContext } from "react"

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useState(7)}>
        { children }
    </CounterContext.Provider>
)

const Container = () => (
    <div>
        <AddOneButton />
        <DeleteOneButton />
    </div>
)


const AddOneButton = () => {
    const [, setCounter] = useContext(CounterContext)
    return (
        <div>
          <button onClick={() => setCounter((v) => v + 1)}>Add One</button>
       </div>
    )
}

const DeleteOneButton = () => {
    const [, setCounter] = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCounter((v) => v - 1)}>Delete One</button>
        </div>
    )
}

const Counter = () => {
    const [counter] = useContext(CounterContext)
    return <div>counter: { counter }</div>
}

// multiple instances of context

function CounterUseState() {
    return (
    <CounterContextProvider>
        <Container />
        <Counter />
    </CounterContextProvider>
    )
}

export default function CounterUseStatePage() {
    return (
        <div>
           <CounterUseState />
           <CounterUseState />
           <CounterUseState />
           <CounterUseState />
        </div>
    )
    
}