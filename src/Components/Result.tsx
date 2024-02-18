import React from "react"

type Props ={
    expression:string,
    setExpression: React.Dispatch<React.SetStateAction<any>>;
}

const pattern:RegExp = /^[0-9+*/-]*$/;

export default function Result(props:Props){
    return <input onChange={(e) => {
        if(pattern.test(e.target.value))
            props.setExpression(e.target.value)
    }} value={props.expression} className="bg-[#1e0836] text-[#fee443] text-right font-bold text-3xl py-4 rounded-lg px-5 mt-6 w-[21.5rem]" type="text" />
} 
    