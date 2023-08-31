import React, { useEffect, useState } from 'react'

function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online  
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    //BOOLEAN
    return onlineStatus
}

export default useOnlineStatus