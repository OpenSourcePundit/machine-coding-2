import {React,createContext,useState} from 'react';

export const HabbitContext = createContext();
export const HabbitProvider = ({children}) =>{

 const [habbits,setHabbits] = useState([{name:"Meditate",repeat:"daily",timeofday:"anytime",startdate:"today",show:false},{name:"Meditate2",repeat:"daily",timeofday:"anytime",startdate:"today",show:false}]);
 const [archive,setArchive] = useState([]);

  return(
    
    <HabbitContext.Provider 
    value={{
      habbits,setHabbits,
      archive,setArchive
    }}
    >{children}
    </HabbitContext.Provider>    
  )


}