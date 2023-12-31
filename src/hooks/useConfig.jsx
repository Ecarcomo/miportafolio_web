import { useDispatch, useSelector } from "react-redux";
import {toggleMode,toggleLanguage} from "../redux/configSlice";

const useConfig = () => {
  const {mode,bg_color,language} = useSelector((store) => store.config);
  const dispatch = useDispatch();

  const handleToggleMode = () => dispatch(toggleMode());
  const handleToggleLanguage = () => dispatch(toggleLanguage());

  return { handleToggleMode ,handleToggleLanguage, mode , bg_color ,language};
}
export default useConfig;
