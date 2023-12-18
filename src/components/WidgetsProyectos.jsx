import React from 'react'
import useProyectos from "../hooks/useProyectos"

 const WidgetsProyectos = () => {
  const {state , data} = useProyectos();

        
  if (state === "loading"){
    return <> Loading </>
  }
  else if (state === "failed"){
    return <> Failed </>
  }
 console.log(data)
  return (
    <div>
      <table style={{"border":"1px solid black"}}>
      <thead>
        <tr>
          <th colSpan={8}>
              <h3>Proyectos</h3>
          </th>
        </tr>
        <tr>
          {Object.keys(data[0]).map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
        <tbody>
          {
            data.map((fila, index) => (
                  <tr key={index}> 

                  {Object.values(fila).map((val, index) => (
                  <td key={index}>{val}</td>
                  ))}

                  </tr>
          ))
          }
          </tbody>
        </table>
    </div>
  )
};

export default WidgetsProyectos;
