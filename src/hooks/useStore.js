/* eslint-disable react/display-name */
import React, {
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore
} from 'react'

const StoreContext = React.createContext()

export const createStore = (_initData) => {
  const useStoreData = (initData) => {
    const storeRef = useRef(initData.state) //initData
    const subscribers = useRef(new Set())

    const get = useCallback(() => storeRef.current, [])
    const set = useCallback((action) => {
      const newState = initData[action.type](storeRef.current, action.payload)
      storeRef.current = newState
      subscribers.current.forEach((callback) => callback())
    }, [])
    const subscribe = useCallback((callback) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])
    return {
      get,
      set,
      subscribe
    }
  }

  const StoreProvider = ({ children }) => {
    return (
      <StoreContext.Provider value={useStoreData(_initData)}>
        {children}
      </StoreContext.Provider>
    )
  }
  const useStore = (selector) => {
    const store = useContext(StoreContext)
    if (!store) throw new Error('Store not found')
    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(_initData) //initData
    )
    return [state, store.set]
  }
  return StoreProvider
}
