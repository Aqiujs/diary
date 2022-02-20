import React, {useRef,Children} from "react";
import Better from "@/components/Better";

function App() {
  let ref=useRef({})
  const getArr = ()=>{
    let arr = [];
    for(let i=0;i<=999;i++){
      arr.push(<p style={{textAlign: 'center'}}>{i}</p>);
    };
    return arr;
  };
  
  return (
    <div style={{
      width:'100vw',
      height:'100vh'
    }}>
      <Better ref={ref}>
        {Children.toArray(getArr())}
      </Better>
    </div>
  );
}

export default App;
