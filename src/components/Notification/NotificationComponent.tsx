'use client';
import { setCountNotification, setNotificationFriend } from "@/stores/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import ViewAddFriendNotification from "@/components/Notification/ViewAddFriendNotification";
import styles from "@/components/Notification/Notification.module.css";
import { signalRService } from "@/tools/signalR";

export default function NotificationComponent() {
    const userState = useAppSelector(state => state.userSlice);
    const notificationState = useAppSelector(state => state.notificationSlice);

    const dispatch = useAppDispatch();
    const [openPopup, setOpenPopup] = useState<boolean>(false);

    const handleTogglePopup = () => {
        setOpenPopup(prev => !prev);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const fetchConnection = async () => {
        await signalRService.send("CountNotification", userState.user?.id);
    }

    useEffect(() => {
        if (userState?.user?.id) {
            signalRService.createConnection(userState.user.id);
        }
    }, [])

    useEffect(() => {
        if (signalRService.connection !== null) {
            signalRService.startConnection()?.then(() => {
                fetchConnection();

                signalRService.on("onError", (message: string) => {
                    console.log(message);
                });

                signalRService.on("onSuccess", (message: string) => {
                    console.log(message);
                });

                signalRService.on("onCountNotification", (countNotification: number) => {
                    dispatch(setCountNotification({
                        countNotification: countNotification,
                    }));
                });

                signalRService.on("onMessage", (message: number) => {
                    console.log(message);
                });

                signalRService.on("onFriendNotification", (notification: any) => {
                    if (notification !== null) {
                        dispatch(setNotificationFriend({
                            userId: notification.UserId,
                            fullName: notification.FullName,
                            cropAvatar: notification.CropAvatar,
                        }));
                        fetchConnection();
                    }
                });
            }).catch(err => console.error("Error starting connection:", err));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signalRService.connection]);

    return (
        <TippyHeadless
            interactive
            placement="bottom-start"
            offset={[90, 3]}
            visible={openPopup}
            render={(attrs) => (
                <div {...attrs}>
                    <div className="w-[350px] max-h-[calc(min((100vh-96px)-60px),734px)] min-h-[30px] py-2 rounded-md shadow-avatar-shadown bg-white">
                        <div className="py-2">
                            <h3 className="px-3 text-xl font-bold">
                                Notification
                            </h3>
                            <div className={`h-[80vh] overflow-y-auto ${styles.notification}`}>
                                <div className="px-3">
                                    <ViewAddFriendNotification open={openPopup} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            onClickOutside={handleClosePopup}
        >
            <div className="group h-max inline-flex items-center py-2 px-3 bg-blue-100 rounded-lg select-none cursor-pointer hover:bg-blue-300 relative" onClick={handleTogglePopup}>
                <Bell className="text-gray-500 group-hover:text-gray-800" />
                {notificationState.countNotification !== 0 && <div className="absolute top-1 right-0 translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-purple-500 rounded-md inline-flex items-center justify-center">
                    <span className="text-[13px] text-gray-200">{notificationState.countNotification}</span>
                </div>}
            </div>
        </TippyHeadless>
    );
}
