// type propsTable = {
//     cols: any[];
//     datasource: any[];
//   };
  
  function Table (props:{cols:any[];datasource:any[]}) {
    const { datasource, cols } = props;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              {cols.map((e, i) => (
                <th scope="col" key={i}>
                  {e.displayName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datasource.map((e, i) => (
              <tr>
                {cols.map((y, j) => (
                  <td key={j}>{e[y.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  
  export default Table;