// import React, { useEffect, useState } from 'react'

// export default function State() {
//     const [city,setCity] = useState("Nerul")
//     const [age,setAge] = useState(20)

//     const handleUpdate = () =>{
//         // setCity("Vashi")
//         setAge(age + 1)
//     }

//     useEffect(()=>{
//         console.log("useeffect call.....")
//     },[age])
//   return (
//     <div>
//       <h1>city: {city}</h1>
//       <h1>age: {age}</h1>

//       <button  onClick={handleUpdate} >click</button>
//       <button  onClick={()=>setCity("Nerul")} >Nerul</button>
//       <button  onClick={()=>setCity("Vashi")} >Vashi</button>
//       <button  onClick={()=>setCity("Panvel")} >Panvel</button>
//       <button  onClick={()=>setCity("Thane")} >Thane</button>
//     </div>
//   )
// }



// import React, { useEffect, useState } from 'react'

// export default function State() {
//     const [name, setName] = useState("Sanika")
//     const [rollno, setRollno] = useState(5)

//     const handleUpdate = () => {
//         setName("Vaishnavi")
//         setRollno(rollno + 1)
//     }

//     useEffect(()=>{
//         console.log("useEffect is called.......")


//     },[rollno])


//     return (
//         <div>
//             <h1>Name : {name}</h1>
//             <h1>Roll no: {rollno}</h1>

//             <button type="button" class="btn btn-outline-warning" onClick={handleUpdate}>Warning</button>
//             <button  onClick={()=>setName("Radhika")} type="button" class="btn btn-outline-primary" >Radhika</button>

//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react'

// export default function State() {
//     const [name, setName] = useState("Sanika")
//     const [rollno, setRollno] = useState(5)

//     const handleUpdate = () => {
//         setName("Vaishnavi")
//         setRollno(rollno + 1)
//     }

//     useEffect(()=>{
//         console.log("useEffect is called.......")


//     },[rollno])


//     return (
//         <div>
//             <h1>Name : {name}</h1>
//             <h1>Roll no: {rollno}</h1>

//             <button type="button" class="btn btn-outline-warning" onClick={handleUpdate}>Warning</button>
//             <button  onClick={()=>setName("Radhika")} type="button" class="btn btn-outline-primary" >Radhika</button>

//         </div>
//     )
// }  this is my understanding accordingly i want to create a like button  and dislike button in middle there shoulde be there count but count shoulde never go in negative apply simplest logis that i can understand


// import React, { useState } from 'react'

// export default function State() {
//     const[like,setlike]=useState("like")
//     const[dislike,setdislike]=useState("dislike")

//     likehandler = () => {
//         setlike(like+1)
            
//     }
//     dislikehandler = ()=>{
//         setdislike(dislike+1)
//     }
//     return (
//         <div>
//             <button  onClick={likehandler}> Like</button>

//             Cout

//             <button onclick={dislikehandler}>Dislike</button>
//         </div>
//     )
// }


import React, { useState, useEffect } from "react";

export default function LikeDislike() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  const handleLike = () => {
    setCount(count + 1);
  };

  const handleDislike = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        margin: "100px",
      }}
    >
      <button
        onClick={handleLike}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
        }}
      >
         Like
      </button>

      <h2>{count}</h2>

      <button
        onClick={handleDislike}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
        }}

      >
         Dislike
      </button>
    </div>
  );
}