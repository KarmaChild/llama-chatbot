import React, { useState } from "react"

interface TextBoxProps {
    onSendMessage: (message: string) => void
}

export const TextBox: React.FC<TextBoxProps> = ({ onSendMessage }) => {
    const [text, setText] = useState("")
    const [rows, setRows] = useState(0)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
        const textareaLineHeight = 24
        const previousRows = event.target.rows
        event.target.rows = 1
        const currentRows = Math.ceil(event.target.scrollHeight / textareaLineHeight)
        event.target.rows = currentRows
        setRows(currentRows)
        if (currentRows !== previousRows) {
            event.target.scrollTop = event.target.scrollHeight
        }
    }

    const handleKeyPress = (
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (event.key === "Enter" && text.trim() !== "") {
            onSendMessage(text)
            setText("")
            setRows(0)
        }
    }

    return (
        <div className="bg-primary w-[740px] max-w-full rounded-[10px] border-[1px] border-amber-50">
            <textarea
                className="w-full h-full resize-none overscroll-none p-2 text-white bg-transparent outline-none"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Start Chatting..."
                rows={rows}
            />
        </div>
    )
}

export default TextBox
