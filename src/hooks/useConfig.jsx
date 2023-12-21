import { useDispatch, useSelector } from "react-redux";
import {toggleMode} from "../redux/configSlice";

const useConfig = () => {
  const {mode} = useSelector((store) => store.config);
  const dispatch = useDispatch();

  const handleToggleMode = () => dispatch(toggleMode());

  return { handleToggleMode , mode};
}
export default useConfig;
