// import React from 'react'
// import Prime from './Prime'
// import Guest from './Guest'

// export default function Conditionalstatement({login}) {

//     // let comp = ""

//     // if(login){
//     //     comp = <Prime/>
//     // }
//     // else{
//     //     comp = <Guest/>
//     // }
//   return (
//     <div>
//       {
//         // comp


//         // (login) ? <Prime/> : <Guest/>
//         // (login) ? "Switch as guest" : "Switch as prime"



//         // login && <Prime/>

//         // (()=>{
//         //     if(login){
//         //         return <Prime/>
//         //     }
//         //     return <Guest/>
//         // })()

//         {user === "" ? (
//         <Login setUser={setUser} />
//       ) : user === "guest" ? (
//         <Guest setUser={setUser} />
//       ) : (
//         <Prime setUser={setUser} />
//       )
//     }
      
//     </div>
//   )


import React, { useState } from "react";
import Login from "./login";
import Guest from "./Guest";
import Prime from "./Prime";

export default function Conditionalstatement() {
  const [user, setUser] = useState("");

  return (
    <div>
      {user === "" ? (
        <Login setUser={setUser} />
      ) : user === "guest" ? (
        <Guest setUser={setUser} />
      ) : (
        <Prime setUser={setUser} />
      )}
    </div>
  );
}
