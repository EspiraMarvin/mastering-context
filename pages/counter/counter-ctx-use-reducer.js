import { useReducer, createContext, useContext } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1
        case "delete":
            return state - 1
        default:
            return state
    }
}

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
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
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
          <button onClick={() => dispatch({ type: "add"})}>Add One</button>
       </div>
    )
}

const DeleteOneButton = () => {
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: "delete"})}>Delete One</button>
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