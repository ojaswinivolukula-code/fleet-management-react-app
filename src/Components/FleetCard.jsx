import { memo } from "react"




const FleetCard=memo(function FleetCard({
    fleet,
    onUpdateDriver,
    onChangeAvailability,
    onDelete,

}){
    return(
        <div style={{border:"1px solid gray" , padding:"15px"}}>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480" width="100px"/>

           <p><b>Vehcile Regno:</b>{fleet.vehcileRegNo}</p> 
           <p><b>Category:</b>{fleet.category}</p> 
           <p><b>Driver Name:</b>{fleet.driverName}</p> 
           <p><b>Status:</b>{fleet.status}</p>
           <button onClick={()=>onUpdateDriver(fleet.id)}>Update Driver</button> 
           <button onClick={()=>onChangeAvailability(fleet.id)}>Change Availability</button>
            <button onClick={()=>onDelete(fleet.id)}>Delete</button>

        </div>
    )
}
)


export default FleetCard