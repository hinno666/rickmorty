import { Characters } from "../Characters/Characters"
import { SearchForm } from "../SearchForm/SearchForm"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

export const Home = () => {
    return (
        <>
            <ThemeToggle />
            <SearchForm />
            <Characters />
        </>
    )
}