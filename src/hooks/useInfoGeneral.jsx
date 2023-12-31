import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoGeneral } from "../helpers/getters";

const useInfoGeneral = () => {
  const { state , data} = useSelector((store) => store.info_general);
  const {language} = useSelector((store) => store.config);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoGeneral(language));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useInfoGeneral;
