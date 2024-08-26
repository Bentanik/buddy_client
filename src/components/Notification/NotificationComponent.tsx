'use client'
import { setCountNotification, setNotificationFriend } from "@/stores/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotificationComponent() {
    const userState = useAppSelector(state => state.userSlice);
    const notificationState = useAppSelector(state => state.notificationSlice);

    const dispatch = useAppDispatch();

    const [connection, setConnection] = useState<any>(null);

    const createConnection = async () => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(
                `${process.env.NEXT_PUBLIC_SERVER}/hub/notification?userId=${userState.user?.id}`)
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    };

    const fetchConnection = async () => {
        await connection?.send("CountNotification", userState.user?.id);
    }

    useEffect(() => {
        createConnection();
    }, []);

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    fetchConnection();
                    connection.on("onError", (message: string) => { console.log(message) });

                    connection.on("onSuccess", (message: string) => { console.log(message) });

                    connection.on("onCountNotification", (countNotification: number) => {
                        dispatch(setCountNotification({
                            countNotification: countNotification,
                        }))
                    });

                    connection.on("onFriendNotification", (notification: any) => {
                        if (notification !== null) {
                            dispatch(setNotificationFriend({
                                userId: notification.UserId,
                                fullName: notification.FullName,
                                cropAvatar: notification.CropAvatar,
                            }))
                            fetchConnection();
                        }
                    })

                })
                .catch();
        }
    }, [connection]);

    return (
        <div className="group h-max inline-flex items-center py-2 px-3 bg-blue-100 rounded-lg select-none cursor-pointer hover:bg-blue-300 relative">
            <Bell className="text-gray-500 group-hover:text-gray-800" />
            {notificationState.countNotification !== 0 && <div className="absolute top-1 right-0 translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-purple-500 rounded-md inline-flex items-center justify-center">
                <span className="text-[13px] text-gray-200">{notificationState.countNotification}</span>
            </div>}
        </div>
    )
}
