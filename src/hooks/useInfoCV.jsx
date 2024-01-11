import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCV } from "../helpers/getters";

const useInfoCV= () => {
  const { state , data} = useSelector((store) => store.info_cv);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getInfoCV());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useInfoCV;


