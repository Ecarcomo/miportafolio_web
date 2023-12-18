import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConocimientos } from "../helpers/getters";

const useConocimientos = () => {
  const { state , data} = useSelector((store) => store.conocimientos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConocimientos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useConocimientos;
