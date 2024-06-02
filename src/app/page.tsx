'use client'
import {TextBox} from "@/app/components/TextBox/TextBox"
import {useState} from "react"

interface Message {
    sent_by: string
    message: string
}

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([
        {
            sent_by: 'user',
            message: 'Hello'
        },
        {
            sent_by: 'gpt',
            message: 'Hello! How are you doing today?'
        },
        {
            sent_by: 'user',
            message: 'Hello'
        },
        {
            sent_by: 'gpt',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna leo, luctus vitae orci vitae, ' +
                'posuere accumsan magna. Vestibulum non cursus ex. Ut finibus sem sit amet ultrices lobortis. Nullam dapibus quis leo quis commodo. Proin nec venenatis ligula, congue auctor massa. In hac habitasse platea dictumst. Pellentesque orci nisl, tempus nec nisl vel, fermentum luctus lectus. Sed rutrum est id tristique ultricies. Morbi at sollicitudin velit, vitae dapibus arcu. Nunc euismod euismod libero, a pretium sem scelerisque in. Ut consectetur, lorem nec ultrices commodo, ' +
                'diam tortor suscipit ex, vitae lobortis velit metus eget nulla. Fusce convallis eu mauris pulvinar finibus. ' +
                'Proin consectetur laoreet lacus, eu ullamcorper magna porttitor vitae. Vivamus odio orci, imperdiet ut mauris non, ' +
                'tempor auctor ipsum. Phasellus sodales odio ac dui posuere, in malesuada urna placerat. Nullam rhoncus, eros non ' +
                'pellentesque maximus, erat felis vulputate orci, non vestibulum nisl odio quis leo.'
        }
    ])

    const addMessage = (message: any) => {
        setMessages([...messages, message])
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
            <div className="flex flex-col items-center justify-center h-full w-full" style={{paddingLeft: "30px"}}>
                {messages.map((message, index) => (
                    <div key={index} className={`p-2 m-2 bg-primary w-[740px] max-w-full rounded-[10px]`}>
                        <p className={`${message.sent_by === 'gpt' ? 'text-green-500': 'text-white'}`}>{message.message}</p>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-[30px]">
                <TextBox onSendMessage={addMessage}/>
            </div>
        </main>


    )
}
