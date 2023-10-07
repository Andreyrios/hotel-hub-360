import { store } from '../redux/Store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector