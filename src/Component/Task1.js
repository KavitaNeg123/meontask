import React, { useEffect, useState } from "react";

const Task1 = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const response = await result.json();
        setLoading(false)
        setData(response);
      } catch (error) {
        setError(true)
        setLoading(false)
        console.log(error);
      }
    };
    setLoading(true)
    setTimeout(()=>{
        getData();
    },2000)
  }, []);

  return (
    <>
      <h1 style={{textAlign:'center'}}>Fetch The Data</h1>
      {!error  ? (
        <div>
        {!loading ? (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
            ) : (<h2 style={{textAlign:'center' , color:'green'}}>Loading ...</h2>)
        }
        </div>
        ) : (<h2 style={{textAlign:'center', color:'red'
      }}>Unable to fetch data</h2>)}
      
    </>
  );
};
export default Task1;
