import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducacionFormal } from "../helpers/getters";

const useEducacionFormal = () => {
  const { state , data} = useSelector((store) => store.estudios_formales);
  const {language} = useSelector((store) => store.config);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEducacionFormal(language));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useEducacionFormal;
