import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

// The outer div positions the button at the bottom right of the screen
// Overflow-hidden and max-w-0 alongside the pl-2 class makes the Feedback text stay hidden.
// // The group class and the group-hover:max-w-xs makes the Feedback text appear when hovered over any
// part of the component

export function Widget() {

    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="absolute bottom-5 right-5">

            { isWidgetOpen ? <p>Hello World!</p> : null }

            <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">
                        Feedback
                    </span>
                </span>
            </button>
        </div>
    )
}