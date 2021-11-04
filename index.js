// Add your code here
const submitData={
    "email":"",
    "name":""
}

const configObj={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body:JSON.stringify(
       (submitData)
    )}


fetch("http://localhost:3000/users",configObj)
.then (res=>res.json)
.then( function ( object ) {
    document.body.innerHTML = object[ "id" ]
  } )
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )

  