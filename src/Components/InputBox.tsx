import React, { memo } from "react";

type Props = {
    expression: string,
    setExpression: React.Dispatch<React.SetStateAction<any>>;
};

export const InputBox = memo(function (props:Props){
    return <section className="bg-[#1e0836] rounded-xl mt-4">
        <div className="py-4 px-3">
            <div className="flex justify-center">
                <button onClick={() => {props.setExpression(props.expression + "7")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">7</button>
                <button onClick={() => {props.setExpression(props.expression + "8")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">8</button>
                <button onClick={() => {props.setExpression(props.expression + "9")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">9</button>
                <button onClick={() => {console.log(props.expression); props.setExpression((props.expression).slice(0, -1))}} className="h-9 w-16 m-2 text-[#faf3fb] bg-[#56077c] text-md font-bold rounded-lg hover:bg-[#8631b0] transition-colors duration-300 shadow-lg">DEL</button>
            </div>
            <div className="flex justify-center">
                <button onClick={() => {props.setExpression(props.expression + "4")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">4</button>
                <button onClick={() => {props.setExpression(props.expression + "5")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">5</button>
                <button onClick={() => {props.setExpression(props.expression + "6")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">6</button>
                <button onClick={() => {props.setExpression(props.expression + "+")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">+</button>
            </div>
            <div className="flex justify-center">
                <button onClick={() => {props.setExpression(props.expression + "1")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">1</button>
                <button onClick={() => {props.setExpression(props.expression + "2")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">2</button>
                <button onClick={() => {props.setExpression(props.expression + "3")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">3</button>
                <button onClick={() => {props.setExpression(props.expression + "-")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">-</button>
            </div>
            <div className="flex justify-center">
                <button onClick={() => {props.setExpression(props.expression + ".")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">. </button>
                <button onClick={() => {props.setExpression(props.expression + "0")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">0</button>
                <button onClick={() => {props.setExpression(props.expression + "/")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">/</button>
                <button onClick={() => {props.setExpression(props.expression + "*")}} className="h-9 w-16 m-2 text-[#fddf42] bg-[#341a4b] text-lg font-bold rounded-lg hover:bg-[#6b34ac] transition-colors duration-300 shadow-lg">x</button>
            </div>
            <div className="flex justify-center">
            <button onClick={() => {props.setExpression("")}} className="h-9 w-36 m-2 text-[white] bg-[#56077c] text-lg font-bold rounded-lg hover:bg-[#8631b0] transition-colors duration-300 shadow-lg">RESET</button>
            <button onClick={() => {props.setExpression((eval(props.expression)).toString())}} className="h-9 w-36 m-2 text-[black] bg-[#00decf] text-lg font-bold rounded-lg hover:bg-[#94fff9] transition-colors duration-300 shadow-lg">=</button>
            </div>
        </div>
    </section>
})
