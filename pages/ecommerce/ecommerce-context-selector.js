import { 
    useLogin, useLogout, 
    useAddToCart, useCartCount,
    useUser, StoreContextProvider
    } 
from './store-context-selector'

const LoginSection = () => {
    const login = useLogin()
    const logout = useLogout();

    return (
    <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
)}

const UserSection = () =>  {
    const user = useUser()
    return (
    <div>User: { user } </div>
)}

const AddToCartSection = () => {
    const addToCart = useAddToCart()
    return (
    <div>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
)}

const CartCountSection = () => {
    const cartCount = useCartCount()
    return(
    <div>cart count: { cartCount } </div>
)}

function ContextPage() {
    return (
        <div>
            <LoginSection />
            <UserSection />
            <AddToCartSection />
            <CartCountSection />
        </div>
    );
}

export default function ContextPageWrapper() {
    return (
        <StoreContextProvider>
            <ContextPage />
        </StoreContextProvider>
    )
}