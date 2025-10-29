import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void){
   const ref = useRef<T>(null);
   useEffect(() => {
    const handleClicledOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)){
            callback();
        }
    }
    document.addEventListener('mousedown', handleClicledOutside);
    return () => {
        document.removeEventListener('mousedown', handleClicledOutside);
    }
   }, [callback])
   return ref;
}