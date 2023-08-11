import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootStore, AppDispatch } from "./types";

export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>;
