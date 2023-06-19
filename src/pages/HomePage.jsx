import { useState,useContext } from "react";
import { HabbitContext } from "../context/habbitContext";
import { Link } from "react-router-dom";

export const HomePage = () => {

  const {habbits,setHabbits,archive,setArchive} = useContext(HabbitContext);
  const [createHabbit, setCreateHabbit] = useState(false);
  const [editHabbit, setEditHabbit] = useState(false);

  const [habbitName, setHabbitName] = useState("");
  const [repeat, setrepeat] = useState("");
  const [goal, setGoal] = useState("");
  const [timeofday, setTimeofday] = useState("");
  const [startdate, setStartdate] = useState("");

 const createNewHabbit = () =>{
    setCreateHabbit(true);
    setHabbitName("");setrepeat("monthly");setGoal("");setTimeofday("");setStartdate("");
 }
  const handleSubmitBtn = ()=>{
    if(editHabbit)
    {
        // const newAddress = [...address];
        // newAddress.splice(isEdit.index, 1, {Add_name: Add_name, Hno: Hno, street: street, city: city, state: state, Pin: Pin, Phone: Phone})
        // setEditAddress(false);
        // dataDispatch({
        //     type:"editAddress",
        //     payload: newAddress,
        // })
    }
    else{

        setHabbits([...habbits,{name:habbitName,repeat:repeat,timeofday:timeofday,startdate:startdate}])
        setEditHabbit(false);
        setCreateHabbit(false);
    }
}

  const MoveToArchive = (index) =>{
    setArchive([...archive,habbits[index]])
    const newHabbits = [...habbits];
    newHabbits.splice(index,1);
    setHabbits([...newHabbits]);    
  }
  const deleteFunc = (index) =>{
    const newHabbits = [...habbits];
    newHabbits.splice(index,1);
    setHabbits([...newHabbits]);
  }
  const editHabbitfunction = (index) =>{

  }


  return (
    <div className="container">
        {console.log(habbits,"createHabbit",createHabbit)}
        {console.log("carch",archive)}
      {createHabbit && (
        <div className="create-habbit-box">
          <h2>Create New Habit</h2>
          <div className="habbit">
            <label htmlFor="habbitName"> NAME </label>
            <input
              type="text"
              value={habbitName}
              id="habbitName"
              placeholder="Enter habit"
              onChange={(e) => setHabbitName(e.target.value)}
            />
            <label htmlFor="repeat">REPEAT</label>
            <select
              name="repeat"
              id="repeat"
              
              onChange={(e) => setrepeat(e.target.value)}
            >
              <option value="weekly">weekly</option>
              <option value="fortnightly">fortnightly</option>
              <option value="monthly">monthly</option>
            </select>

            <label htmlFor="goal">GOAL</label>
            <select
              name="goal"
              id="goal"
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="1 time">1 time</option>
              <option value="2 times">2 times</option>
              <option value="3 times">3 times</option>
            </select>

            <label htmlFor="timeofday">Time of Day</label>
            <select
              name="timeofday"
              id="timeofday"
              onChange={(e) => setTimeofday(e.target.value)}
            >
              <option value="Anytime">Anytime</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>

            <label htmlFor="startdate">START DATE</label>
            <select
              name="startdate"
              id="startdate"
              onChange={(e) => setStartdate(e.target.value)}
            >
              <option value="today">today</option>
              <option value="tomorrow">tomorrow</option>
              <option value="next Week">next Week</option>
            </select>
          </div>
          <button type="submit" onClick={() => handleSubmitBtn()}>
            Submit
          </button>
          <button onClick={() => setCreateHabbit(false)}>Cancel</button>
        </div>
      )}


      {!createHabbit &&(
        <div className="container-main">
        <button onClick={()=>createNewHabbit()}> CREATE NEW HABIT</button>
        <Link to="/archive"> ARCHIVE</Link>
        {habbits.map((habb,index)=>{
            return(
                <div className="habbit-card" style={{height:"250px",width:"500px",backgroundColor:"lightgreen"}}>
                    <h3>Habit Name: {habb.name}</h3>
                    <p> Repeat: {habb.repeat}</p>
                    <p> Time: {habb.timeofday}</p>
                    <p> Start: {habb.startdate}</p>
                    <button className="edit-btn" onClick={()=>{editHabbitfunction(index)}}>Edit</button>
                    <button className="archive-btn" onClick={()=>{MoveToArchive(index)}}>Archive</button>
                    <button className="delete-btn"  onClick={()=>{deleteFunc(index)}}>Delete</button>
                </div>
            )
        })}
      </div>
      )}
      
    </div>
  );
};
