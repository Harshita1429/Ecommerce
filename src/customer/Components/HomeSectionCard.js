export default function HomeSectionCard() {
    return (
        <>
            <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 border">
                <div className="h-[13rem] w-[10rem]">
                    <img className="object-cover object-top w-full h-full" src="/images/clothing_1.jpg" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">No filter</h3>
                    <p className="mt-2 text-sm"> Men's cotton shirt</p>
                </div>
            </div>
        </>
    )
}
