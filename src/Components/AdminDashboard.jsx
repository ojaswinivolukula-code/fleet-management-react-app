import { useCallback, useState } from "react"
import FleetCard from "./FleetCard"
import Sidebar from "./Sidebar"

function AdminDashboard(){

const[fleet,setFleet]=useState([])
const addFleet=(fleet)=>{
    setFleet([...fleets,{...fleet,id:Date.now()}])
}
const updateDriver=useCallback((id)=>{
    const name=prompt("Enter new driver name")
    if(!name || !name.trim())
        return
    setFleet((prev)=>
    prev.map((f)=>(f.id==id?{...f,driver:name} :f)
))
},[])

const changeAvailability=useCallback((id)=>{
    setFleet((prev)=>
    prev.map((f)=>
    f.id===id?{...f,available : !f.available}:f
))
},[])

const deleteVehicle=useCallback((id)=>{
    if(window.confirm("Are you sure?")){
        setFleets((prev)=>prev.filter((f)=>f.id!==id))

    }
},[])
return(
    <div style={styles.layout}>
        <Sidebar addFleet={addFleet}/>
        <div style={styles.main}>
            <h2>Fleet Cards</h2>
            <div style={styles.grid}>
                {fleets.map((fleet)=>(
                    <FleetCard
                    key={fleet.id}
                    fleet={fleet}
                    onUpdateDriver={updateDriver}
                    onChangeAvailability={changeAvailability}
                    onDelete={deleteVehicle}
                    />
                ))}
            </div>
        </div>
    </div>
)
const styles={
    layout:{display:"flex"},
    main:{padding : "10px", width:"100px"},
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",gaps:"10px"
    }
}
}

export default AdminDashboard