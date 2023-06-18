import {useContext} from 'react'
import { HabbitContext } from '../context/habbitContext'
import {Link} from 'react-router-dom'


export const ArchivePage = () =>{
    const {archive} = useContext(HabbitContext)
    return(
        <>
        <Link to="/"> HOMEPAGE</Link>

        {archive.map((habb)=>{
            return(
                <div className="habbit-card" style={{height:"250px",width:"500px",backgroundColor:"lightyellow"}}>
                    <h3>Habit Name: {habb.name}</h3>
                    <p> Repeat: {habb.repeat}</p>
                    <p> Time: {habb.timeofday}</p>
                    <p> Start: {habb.startdate}</p>
                </div>
            )
        })}
        </>
    )
}