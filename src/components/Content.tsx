import ListCategories from "./UI/ListCategories"

const Content = () => {
    return (
        <>
            <h1 className="w-[100px] text-xl font-bold mb-2">Categorias</h1>
            <div className="flex-1 h-[100%] w-full flex-col flex items-center z-10" >
                <ListCategories />
            </div>
        </>
    )
}

export default Content;