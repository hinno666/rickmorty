import { useGlobalContext } from "../context/context"

export const SearchForm = () => {
    const { hello } = useGlobalContext()

    console.log(hello);

    return (
        <div>SearchForm</div>
    )
}
