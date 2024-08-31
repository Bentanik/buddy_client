'use client'
import { useRef, useState } from "react";
import styles from "@/components/Message/Message.module.css"
import { CirclePlus, Images, Mic, Send } from "lucide-react";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from '@tippyjs/react';

export default function MessageInputComponent() {
    const inputRef = useRef<HTMLDivElement>(null);
    const [isText, setIsText] = useState<boolean>(false);
    const [openPopupOption, setOpenPopupOption] = useState<boolean>(false);

    const handleInput = () => {
        if (inputRef.current) {
            const textLength = inputRef.current.innerText.length;
            setIsText(textLength > 0);
        } else {
            setIsText(false);
        }
    };

    const handleTogglePopupOption = () => {
        setOpenPopupOption(prev => !prev);
    }

    const handleClosePopupOption = () => {
        setOpenPopupOption(false);
    }

    return (
        <div className="flex items-center gap-x-1">
            {isText ? <div>
                <TippyHeadless
                    interactive
                    placement="bottom-start"
                    visible={openPopupOption}
                    render={(attrs) => (
                        <div {...attrs}>
                            <div className="w-[200px] min-h-[30px] max-h-[150px] py-2 rounded-md shadow-auth-shadown bg-white">
                                <div className="px-2 py-1">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex items-center gap-x-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <i>
                                                <Mic strokeWidth={2.75} className='text-blue-500 group-hover:text-blue-700 w-5 h-5' />
                                            </i>
                                            <span className="text-base text-gray-900">Send audio</span>
                                        </div>
                                        <div className="flex items-center gap-x-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <i>
                                                <Images strokeWidth={2.75} className='text-blue-500 group-hover:text-blue-700 w-5 h-5' />
                                            </i>
                                            <span className="text-base text-gray-900">Attach files</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    onClickOutside={handleClosePopupOption}
                >
                    <button
                        type="button"
                        className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                        onClick={handleTogglePopupOption}
                    >
                        <i>
                            <CirclePlus strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-5 h-5' />
                        </i>
                    </button>
                </TippyHeadless >

            </div> : <div className="flex items-center">
                <div>
                    <Tippy content={<div className="bg-[rgba(18,18,18,0.9)] px-2 py-[3px] rounded-md flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-[#fff]">Send audio</span>
                    </div>}>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                        >
                            <i>
                                <Mic strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-5 h-5' />
                            </i>
                        </button>
                    </Tippy>
                </div>
                <div>
                    <Tippy content={<div className="bg-[rgba(18,18,18,0.9)] px-2 py-[3px] rounded-md flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-[#fff]">Attach files</span>
                    </div>}>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                        >
                            <i>
                                <Images strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-5 h-5' />
                            </i>
                        </button>
                    </Tippy>
                </div>
                {/* <div>
                    <button
                        type="button"
                        className="w-10 h-10 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                    >
                        <i>
                            <Send strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-6 h-6' />
                        </i>
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="w-10 h-10 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                    >
                        <i>
                            <Send strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-6 h-6' />
                        </i>
                    </button>
                </div> */}
            </div>}
            <div className="flex-1 w-2/3 rounded-xl border border-gray-300">
                <div className={`max-h-[10vh] px-2 py-1 overflow-y-auto `}>
                    <div></div>
                    <div
                        ref={inputRef}
                        contentEditable="true"
                        spellCheck="false"
                        className="cursor-text border-none outline-none font-normal font-sans"
                        onInput={handleInput}
                    >
                    </div>
                </div>
            </div>
            <div>
                <Tippy content={<div className="bg-[rgba(18,18,18,0.9)] px-2 py-[3px] rounded-md flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-[#fff]">Click to send the message</span>
                </div>}>
                    <button
                        type="button"
                        className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
                    >
                        <i>
                            <Send strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-5 h-5' />
                        </i>
                    </button>
                </Tippy>

            </div>
        </div>
    )
}