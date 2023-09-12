import React, {useState} from "react"

export function Roll(){

  
  return(
    <><div style={{ display: "block" }} className='heading1'>Beställning av data</div>
    <div className='form1'>
        <div className='heading2'>Syfte</div>
        <br />
        <label className='headinga3'>Ange syfte med beställning</label>
        <br />
        <MyForm />
        </div>

    
    </>

)
function MyForm() {
    const [User, setUser] = useState("");
  
    const handleChange = (event) => {
      setUser(event.target.value)
    }
    return(
      <div>
      <select value={User} onChange={handleChange} className='select'>
              <option value={0}>Beställning av data för forskning</option>
              {/* <option value={1}>Beställning av data för verksamhetsutdrag</option>
              <option value={2}>Beställning av data för övrigt ärende</option> */}
            </select>
            </div>
    )
  }
}

