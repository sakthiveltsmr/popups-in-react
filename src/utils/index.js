import useStore from "../store"

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value,day) => {
        document.cookie = `${item}=${value};max-age=${day}`
    }
}

export function getMountnode(){


    const elemetID="root"
    let MOUNT_NODE=document.getElementById("root")

    if(!MOUNT_NODE){
       const element=document.createElement('div')
       element.innerHTML=`<div id="${elemetID}"></div>`
       document.body.appendChild(element)
       MOUNT_NODE=document.getElementById(elemetID)
    
    }
    
    return MOUNT_NODE
}


export  function Exitpopup(){

    const setPopups=useStore((state)=>state.setExit)

      const storageType = cookieStorage;
      const consentPropertyName = 'pops';
      const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
      const saveToStorage = () => storageType.setItem(consentPropertyName, true,60);
  
       window.onmouseout = (event) => {
        event.preventDefault()
           if(event.screenY<150){
               const value=shouldShowPopup()
               if(value){
                setPopups(true)
                   saveToStorage(storageType);
                   
                  }
                  }
              }
}
   
export  function Entrypopup(){
    
    const setPopups=useStore((state)=>state.setEntry)
   
       document.onmouseenter=(event) => {
               event.preventDefault()
               const exitname="entry";
               const value= !cookieStorage.getItem(exitname)
               const saveToStorage = () => cookieStorage.setItem(exitname,true)
               if(value){
                setPopups(true)
                   saveToStorage()
                   
                  }
    }
              
}

 
    
    
    
   
   


