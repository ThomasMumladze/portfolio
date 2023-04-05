import {useState , useEffect} from 'react'
interface Params {
    scroll: boolean | null;
}

export const useScroll = ():Params => {
    const [scroll , setScroll] = useState<boolean | null> (null)

    const handleScroll = () => {
        if(scrollY >= 55){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , handleScroll)

        return () => {
            window.removeEventListener('scroll' , handleScroll)
        }
    }, [scroll])

    return {scroll}
}