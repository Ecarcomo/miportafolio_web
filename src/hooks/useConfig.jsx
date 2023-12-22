import { useDispatch, useSelector } from "react-redux";
import {toggleMode} from "../redux/configSlice";

const useConfig = () => {
  const {mode,bg_color} = useSelector((store) => store.config);
  const dispatch = useDispatch();

  const handleToggleMode = () => dispatch(toggleMode());

  return { handleToggleMode , mode , bg_color};
}
export default useConfig;
