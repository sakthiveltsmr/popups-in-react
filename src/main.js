import useStore from "./store";

export const Main = () => {
    // const[pops,setpops]=useState(false)
    const setpops=useStore((state)=>state.setExit)
   
  
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
        console.log("haii")
         if(event.screenY<150){
             const value=shouldShowPopup()
             if(value){
                setpops(true)
                 saveToStorage(storageType);
                 
                }
                }
            }
    }
    
   
   

