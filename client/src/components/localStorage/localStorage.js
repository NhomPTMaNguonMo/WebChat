export const getData = (key) => {
    if(!localStorage) return;
    try{
        return JSON.parse(localStorage.getItem(key))
      }
      catch(err){
          console.error(`Error get ${key} from localStorage`,err)
      }
}
export const storeData = (key,item) => {
    if(!localStorage) return;
    try{
        return localStorage.setItem(key,JSON.stringify(item))
    }
    catch(err){
        console.error(`Error storing ${key} to localStorage`,err)
    }
  }
  