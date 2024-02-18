export default function Heading(){
    return <section className="bg-[#17062a] rounded-xl">
        <div className="flex justify-between">
            <h2 className="text-[#fbe442] font-bold text-xl pr-10">calc</h2>
            <div className="flex justify-center pl-40">
                <h2 className="text-[#fbe442] font-bold text-xs pr-5 pt-4">THEME</h2>
                <div>
                    <div className="flex justify-between">
                        <h2 className="text-[#fbe442] font-bold text-xs">1</h2>
                        <h2 className="text-[#fbe442] font-bold text-xs">2</h2>
                        <h2 className="text-[#fbe442] font-bold text-xs">3</h2>
                    </div>
                    <input className="w-12 appearance-none rounded-full bg-[#1e0836]" type="range" min="1" max="3" step="1" />
                </div>
            </div>
        </div>
    </section>
}