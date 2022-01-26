export default function Search() {
    return (
        <div className="flex flex-row justify-center">
            <form>
                <input className="p-2 rounded-l-xl" type="text" name="search" />
                <input className="font-medium text-sm p-2 bg-blue-500 text-white rounded-r-xl" type="submit" value="Search" />
            </form>
        </div>
    )
}