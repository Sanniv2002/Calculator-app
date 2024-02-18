import { useState } from "react"
import Heading from "./Components/Heading"
import InputBox from "./Components/InputBox"
import Result from "./Components/Result"

function App() {
  const [expression, setExpression] = useState<string>("")
  
  return (
    <div className="flex flex-col items-center justify-center bg-[#17062a] h-screen">
      <Heading />
      <Result setExpression={setExpression} expression={expression}  />
      <InputBox setExpression={setExpression} expression={expression}  />
    </div>
  )
}

export default App
