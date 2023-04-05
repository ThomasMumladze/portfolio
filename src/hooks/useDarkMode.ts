import { useState, useEffect } from "react";

interface Params {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

const useDarkMode = ():Params => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem('pageMode') === 'true');

    useEffect(() => {
        localStorage.setItem('pageMode' , isDarkMode.toString())
    },[isDarkMode])

    const handleDarkMode = () => {
        setIsDarkMode(isDarkMode => !isDarkMode)
    }

    return { isDarkMode , handleDarkMode};
}

export default useDarkMode;
