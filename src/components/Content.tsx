import ListCategories from "./UI/ListCategories"

const Content = () => {
    return (
        <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10 overflow-scroll" >
            <ListCategories />
        </div>
    )
}

export default Content;