'use client'
import NotificationFriendComponent from "@/components/Notification/NotificationFriendComponent";
import { useAppSelector } from "@/stores/store";
import { useEffect, useState } from "react";

export default function Notification({ children }: { children: React.ReactNode }) {
    const [openNotification, setOpenNotification] = useState(false);

    const notificationFriendState = useAppSelector(state => state.notificationSlice.initialNotificationFriend);

    useEffect(() => {
        if (notificationFriendState?.userId && notificationFriendState?.userId !== "") {
            setOpenNotification(true);
            const timer = setTimeout(() => {
                setOpenNotification(false);
            }, 30000);
            return () => clearTimeout(timer);
        }
    }, [notificationFriendState])

    return (
        <div>
            <div className="fixed bottom-5 left-5 z-50">
                {openNotification === true && <NotificationFriendComponent />}
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}
