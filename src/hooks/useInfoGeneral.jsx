import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoGeneral } from "../helpers/getters";

const useInfoGeneral = () => {
  const { state , data} = useSelector((store) => store.info_general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoGeneral());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useInfoGeneral;
