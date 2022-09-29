import { useState } from "react";
import Popup from "./modelpopup"
export const Main = () => {
    const[pops,setpops]=useState(false)
  
    const cookieStorage = {
        getItem: (item) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
            return cookies[item];
        },
        setItem: (item, value) => {
            document.cookie = `${item}=${value};`
        }
    }
    
    const storageType = cookieStorage;
    const consentPropertyName = 'pops';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);
    
 

        window.onmouseout = (event) => {
              if(event.screenY<150){
                const value=shouldShowPopup()
                if(value){
                    saveToStorage(storageType);
                    setpops(true)
                //    alert("wellcome to retainfull")
                }
            }
    }
    
   
    return(
        <form>
            {
                pops && <Popup setpops={setpops}/>
            }
        
        </form>
    )
}
