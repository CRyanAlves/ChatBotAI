'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area"


export function Chat(){
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Usign Vercel SDK to create chat bot</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[640px] w-full  pr-4">
            { messages.map(messages => {
              return (
              <div key={messages.id} className="flex gap-2 text-slate-600 text-sm mb-4">
                {messages.role === 'user' && (
                <Avatar>
                  <AvatarFallback>RA</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/129784756"/>
                </Avatar>
                )}

                {messages.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png"/>
                </Avatar>
                )}
                <p className="leading-relaxed mt-1">
                  <span className="block font-bold text-slate-700 ">{messages.role === 'user' ? 'Usuário' : 'BOT' }:</span>
                  {messages.content}
                </p>
              </div>)
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter >
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you>" value={input} onChange={handleInputChange}/>
          <Button type="submit"> Send </Button>
          </form>
        </CardFooter>
      </Card>
  )
}