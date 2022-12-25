
import { useEffect } from "react";


function Renters() {


       
       


        useEffect(() => { axios.get( 'http://localhost:8080/api/Renters')
        .then((response) => {
            if(response.status === 200)
            {
             console.log(response)
             
            }
           })
           .catch((error) => {
             console.log(error)
           });
        });
        
        }
    

          
        
    
export default Renters;
