import { useState } from "react"

export default function Calc(){
    interface theme{
        bg: string,
        button_bg:string,
        button_text:string,
        field_bg:string,
        result: string,
        literals:string
    }


    const [current, setCurrent] = useState<theme>({
        bg: "#17062a",
        button_bg: "#eae3db",
        button_text: "#494f60",
        field_bg: "abs",
        result: "#fdfeff",
        literals: "abs",
    })

    return <section className={`flex justify-center items-center bg-[${current.bg}] h-screen`}>
        <div className="grid grid-cols-4 gap-3">
            <h2 className="text-[#fbe541] text-lg font-bold">calc</h2>
            <h2 className="text-[#fbe541] text-sm font-bold pl-40">THEME</h2>
        </div>
    </section>
}