/* eslint-disable @next/next/no-img-element */
import styles from "@/components/Message/Message.module.css"
import MessageInputComponent from "@/components/Message/MessageInputComponent"
import { CloseMessage, HideMessage } from "@/stores/messageSlice";
import { useAppDispatch } from "@/stores/store";
import { Skeleton } from "@mui/material"
import { Minus, X } from "lucide-react"

const numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

interface MessageBoxComponentProps {
  userId: string,
  fullName: string,
  avatar: string,
  index: number
}

export default function MessageBoxComponent({ index, userId, fullName, avatar }: MessageBoxComponentProps) {

  const dispatch = useAppDispatch();

  const handleCloseBoxMessage = () => {
    dispatch(CloseMessage({
      index: index
    }))
  }

  const handleHideBoxMessage = () => {
    dispatch(HideMessage({
      index: index
    }))
  }

  const messageMyBox = () => {
    return <div className="text-right">
      <div className="w-max inline-flex items-center justify-end px-2 py-1 min-h-8 rounded-xl bg-slate-200">
        <span className="text-[14px] font-sans">Nguyen Mai Viet Vy</span>
      </div>
    </div>
  }

  const messageYourBox = () => {
    return <div className="flex items-start gap-x-3">
      <figure className="flex-shrink-0 rounded-full overflow-hidden w-8 h-8"
      >
        <img
          src="/home.jpg"
          width={100}
          height={100}
          alt="avatar"
        /> : <Skeleton width={"100%"} height={"100%"} className="rounded-full" />
      </figure>
      <div className="w-max flex items-center px-2 py-1 min-h-8 rounded-xl bg-slate-200">
        <span className="text-[14px] font-sans">Nguyen Mai Viet Vy</span>
      </div>
    </div>
  }

  return (
    <div className="w-[350px] max-h-[calc(min((100vh-96px)-60px),734px)] min-h-[30px] rounded-t-md shadow-avatar-shadown bg-white">
      <div>
        <div className="py-3 px-2 flex justify-between items-center  rounded-t-md shadow-header-shadown">
          <div className="flex items-start">
            <figure className="rounded-full overflow-hidden w-10 h-10"
            >
              <img
                src={avatar}
                width={100}
                height={100}
                alt="avatar"
              /> : <Skeleton width={"100%"} height={"100%"} className="rounded-full" />
            </figure>
            <h5 className="px-3 text-[15px] font-bold">
              {fullName}
            </h5>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
              onClick={handleHideBoxMessage}
            >
              <i>
                <Minus strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-6 h-6' />
              </i>
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full text-2xl opacity-70 hover:bg-black/10 flex justify-center items-center group"
              onClick={handleCloseBoxMessage}
            >
              <i>
                <X strokeWidth={2.75} className='text-blue-600 group-hover:text-blue-700 w-6 h-6' />
              </i>
            </button>
          </div>
        </div>
        <div className={`h-[50vh] overflow-y-auto ${styles.messagebox}`}>
          <div className="px-3 py-2 flex flex-col gap-y-3">
            {/* {numbers?.map((item, index) => {
              return <div key={index}>{item}</div>
            })} */}
            {messageYourBox()}
            {messageMyBox()}
          </div>
        </div>
        <div className="py-3 px-2">
          <div>
            <MessageInputComponent userId={userId} />
          </div>
        </div>
      </div>
    </div>
  )
}
