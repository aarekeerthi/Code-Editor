import { useEffect,useState } from "react";
const prefix='code-editor'
function useLocalStorage(key,initialValue){
    const prefixedkey=prefix+key
    const [value,setValue]=useState(()=>{
        const jsonValue=localStorage.getItem(prefixedkey)
        if(jsonValue!=null) return JSON.parse(jsonValue)
if(typeof initialValue==='function'){
    return initialValue()
}else{
    return initialValue
}
})
useEffect(()=>{
    localStorage.setItem(prefixedkey,JSON.stringify(value))
},[prefixedkey,value])
return [value,setValue]
}
export default useLocalStorage