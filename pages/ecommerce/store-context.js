import { useState, createContext, useContext } from 'react'

const useStore = () => {
    const [user, setUser] = useState('')
    const [cartCount, setCartCount] = useState(0)

    return {
        user,
        cartCount,
        login: () => setUser('Jack'),
        logout: () => setUser(''),
        addToCart: () => setCartCount(cartCount + 1)
    }
}

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
    <StoreContext.Provider value={useStore()}>
        { children }
    </StoreContext.Provider>
}

export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useStore((state) => state.logout);
export const useUser = () => useStore((state) => state.user);
export const useAddToCart = () => useStore((state) => state.addToCart);
export const useCartCount = () => useStore((state) => state.cartCount);

