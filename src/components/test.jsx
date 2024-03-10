"use client"
export default  function Test({king}){
    async function ok(){
  king();
    }
    return(
        <div>
            <button onClick={ok}>ok</button>
        </div>
    )
}