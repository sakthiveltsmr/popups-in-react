import useStore from "../store"

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

      const cookieStorage = {
          getItem: (item) => {
              const cookies = document.cookie
                  .split(';')
                  .map(cookie => cookie.split('='))
                  .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
              return cookies[item];
          },
          setItem: (item, value) => {
              document.cookie = `${item}=${value};max-age=60`
          }
      }
      
      const storageType = cookieStorage;
      const consentPropertyName = 'pops';
      const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
      const saveToStorage = () => storageType.setItem(consentPropertyName, true);
  
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
   

 
    
    
    
   
   


