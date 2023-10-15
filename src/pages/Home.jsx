import { Characters } from "../components/Characters/Characters"
import { SearchForm } from "../components/SearchForm/SearchForm"
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle"

export const Home = () => {
    return (
        <>
            <ThemeToggle />
            <SearchForm />
            <Characters />
        </>
    )
}