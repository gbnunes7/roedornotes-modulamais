import Button from "../button"

const BannerCliqueAqui = () => {
    return (
        <div className="bg-blue-200 w-full mt-16 flex flex-col p-8 gap-6 items-center">
            <p className="font-semibold text-xl">Clique aqui para começar a catalogar seus roedores favoritos</p>
            <Button background="transparent" color="black">Catalogar</Button>
        </div>
    )
}

export default BannerCliqueAqui