import { Character } from "./../components/Character/Character"
import { ThemeToggle } from "./../components/ThemeToggle/ThemeToggle"

export const InnerCharacter = () => {
    return (
        <>
            <ThemeToggle />
            <Character />
        </>
    )
}