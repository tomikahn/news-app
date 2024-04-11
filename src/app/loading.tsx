import "./styles/loading.css"

function Loader() {
  return (
    <div style={{
      margin:"0 auto",
      textAlign:"center",
      height:"70vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
          }}>
      <div className="line-md--loading-loop "></div>
      <h1 style={{marginLeft:"10px"}}>Loading...</h1></div>
  )
}

export default Loader