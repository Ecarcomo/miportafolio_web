import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpLaboral } from "../helpers/getters";

const useExpLaboral = () => {
  const { state , data} = useSelector((store) => store.exp_laboral);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpLaboral());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useExpLaboral;
