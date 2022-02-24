import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers/combineReducers";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
