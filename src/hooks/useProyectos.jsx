import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProyectos } from "../helpers/getters";

const useProyectos = () => {
  const { state , data} = useSelector((store) => store.proyectos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProyectos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state , data};
};

export default useProyectos;
