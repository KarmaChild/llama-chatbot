import { useState } from "react"

export const TextBox = () => {
    const [text, setText] = useState('')

    const handleChange = (event: any) => {
        setText(event.target.value)
    }

    return (
        <div className="bg-primary w-[740px] max-w-full h-auto rounded-[10px] border-2 border-white">
            <textarea
                className="w-full h-full resize-y p-2 text-white bg-transparent outline-none" // Apply Tailwind classes for styling
                value={text}
                onChange={handleChange}
                placeholder="Enter text here..."
                rows={1} // Start with one row
            />
        </div>
    )
}
