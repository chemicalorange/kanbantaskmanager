import { useState } from "react";

type UseModalReturnTypes = [boolean, () => void]


const useModal = (): UseModalReturnTypes => {
    const [isShowing, setIsShowing] = useState(false)

    const toggle = () => {
        setIsShowing(!isShowing)
    }

    return [isShowing, toggle]
}

export default useModal