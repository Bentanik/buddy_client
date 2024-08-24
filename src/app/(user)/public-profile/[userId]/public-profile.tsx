/* eslint-disable @next/next/no-img-element */
'use client'
import HeaderComponent from '@/components/Header/Header'
import TextViewMore from '@/components/TextViewMore/TextViewMore'
import { ErrorResponse, getProfileUserThunk, getStatusFriendThunk, postAddFriendThunk } from '@/stores/publicUserProfileSlice'
import { useAppDispatch, useAppSelector } from '@/stores/store'
import { Backdrop, CircularProgress } from '@mui/material'
import { GraduationCap, UserCheck, UserPlus, UserX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface PublicProfileComponentProps {
    userId: string
}

interface StatusFriendProps {
    id: string,
    userInitId: string,
    userReceiveId: string,
    isUserInit: boolean,
    status: number;
}

export default function PublicProfileComponent({ userId }: PublicProfileComponentProps) {
    const dispatch = useAppDispatch();
    const publicProfileState = useAppSelector(state => state.publicUserProfileSlice);

    const [statusFriend, setStatusFriend] = useState<StatusFriendProps | null>(null);

    const fetchUserProfile = async () => {
        try {
            await dispatch(getProfileUserThunk({
                userId: userId
            }));
        } catch (err) {
            return err;
        }
    }

    const fetchStatusFriendUserProfile = async () => {
        try {
            const res = await dispatch(getStatusFriendThunk({
                userId: userId
            })).unwrap();
            setStatusFriend(res?.data);
        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        fetchUserProfile();
        fetchStatusFriendUserProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddFriend = async () => {
        try {
            await dispatch(postAddFriendThunk({
                userId: userId
            })).unwrap();
            fetchStatusFriendUserProfile();
        } catch (err) {
            const errors = err as ErrorResponse[];

            if (errors && errors[0]?.errorCode === "adfr03") {
                window.location.reload()
            }
            return err;
        }
    }

    return (
        <div>
            <header className={`sticky top-0 w-full z-50`}>
                <HeaderComponent />
            </header>
            {publicProfileState.status !== 'loading' && publicProfileState.data !== null && <div>
                <section className="bg-profile-hero h-[580px] shadow-profile-hero pb-5 z-10 overflow-hidden">
                    <div className="relative max-w-[1120px] h-[540px] mx-auto">
                        <figure className="absolute w-full">
                            <figure className="w-full h-[400px] overflow-hidden rounded-b-lg">
                                {!publicProfileState.data.cropCoverPhoto?.includes("null")
                                    ?
                                    <img
                                        src={publicProfileState.data.cropCoverPhoto}
                                        alt="Thumnail"
                                        className="w-full h-[400px] object-cover"
                                    />
                                    : <div className="w-full h-[400px] bg-gray-200">
                                    </div>
                                }
                            </figure>
                        </figure>
                        <div className="absolute bottom-[0px] transform w-full pl-[4%] pr-[2%] flex justify-between items-baseline z-30">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <figure className={`w-[190px] h-[190px] bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:bg-[linear-gradient(to_top,_#d16ba5,_#c777b9,_#ba83ca,_#aa8fd8,_#9a9ae1,_#8aa7ec,_#79b3f4,_#69bff8,_#52cffe,_#41dfff,_#46eefa,_#5ffbf1)]`}>
                                        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '170px', height: '170px' }}
                                            className="flex items-center justify-between" >
                                            <img
                                                src={publicProfileState.data.cropAvatar}
                                                width={170}
                                                height={170}
                                                alt="avatar"
                                            />
                                        </div>
                                    </figure>
                                </div>

                                <div className="inline-block">
                                    <h2 className="text-2xl font-semibold font-poppins">{publicProfileState.data.fullName}</h2>
                                    <p className="mt-[3px] text-base text-gray-600">100 friends</p>
                                </div>
                            </div>
                            <div className="-translate-y-4">
                                {statusFriend === null ? <button className="px-3 py-2 bg-[#e2e5e9] rounded-xl hover:bg-[#d4d7da]" onClick={handleAddFriend}>
                                    <div className="flex items-center gap-x-3">
                                        <i>
                                            <UserPlus className="text-black w-6 h-6" />
                                        </i>
                                        <span className="text-base font-medium">Add friend</span>
                                    </div>
                                </button> :
                                    <div>
                                        {statusFriend?.status === 0 &&
                                            <>
                                                {statusFriend?.isUserInit ? <button className="px-3 py-2 bg-[#e2e5e9] rounded-xl hover:bg-[#d4d7da]">
                                                    <div className="flex items-center gap-x-3">
                                                        <i>
                                                            <UserX className="text-black w-6 h-6" />
                                                        </i>
                                                        <span className="text-base font-medium">Cancel invitation</span>
                                                    </div>
                                                </button> :
                                                    <div className='flex items-center gap-x-3'>
                                                        <button className="px-3 py-2 bg-[#e2e5e9] rounded-xl hover:bg-[#d4d7da]">
                                                            <div className="flex items-center gap-x-3">
                                                                <i>
                                                                    <UserPlus className="text-black w-6 h-6" />
                                                                </i>
                                                                <span className="text-base font-medium">Accept friend</span>
                                                            </div>
                                                        </button>
                                                        <button className="px-3 py-2 bg-[#e2e5e9] rounded-xl hover:bg-[#d4d7da]">
                                                            <div className="flex items-center gap-x-3">
                                                                <i>
                                                                    <UserX className="text-black w-6 h-6" />
                                                                </i>
                                                                <span className="text-base font-medium">Reject friend</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                }
                                            </>
                                        }
                                        {statusFriend?.status === 1 && <button className="px-3 py-2 bg-[#e2e5e9] rounded-xl hover:bg-[#d4d7da]">
                                            <div className="flex items-center gap-x-3">
                                                <i>
                                                    <UserCheck className="text-black w-6 h-6" />
                                                </i>
                                                <span className="text-base font-medium">Friend</span>
                                            </div>
                                        </button>}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <main className="relative pt-5 px-3">
                    <div className="max-w-[1120px] mx-auto">
                        <div className='w-full flex flex-row items-start gap-x-5'>
                            <section className="sticky basis-1/3 top-[84px] z-20 w-[20%]">
                                <div className="w-full p-[15px] rounded-lg shadow-box-shadown break-words">
                                    <h3 className="text-[17px] font-semibold">Introduction</h3>
                                    <div className="py-3">
                                        <button className="text-center w-full bg-[#e4e6eb] p-2 rounded-lg hover:bg-[#d9dae0]">
                                            <span className="text-base font-semibold">Add biography</span>
                                        </button>
                                        <div className="flex flex-col gap-y-3 py-3 ">
                                            <div className="flex items-center flex-row gap-x-3">
                                                <i><GraduationCap className="w-8 h-8" /></i>
                                                <span className="text-base font-normal">Learn at Nguyen Mai Viet Vy</span>
                                            </div>
                                            <div className="flex items-center flex-row gap-x-3">
                                                <i><GraduationCap className="w-8 h-8" /></i>
                                                <span className="text-base font-normal">Learn at Nguyen Mai Viet Vy</span>
                                            </div>
                                        </div>
                                        <button className="text-center w-full bg-[#e4e6eb] p-2 rounded-lg hover:bg-[#d9dae0]">
                                            <span className="text-base font-semibold">Edit detail</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full p-[15px] rounded-lg shadow-box-shadown break-words mt-[30px]">
                                    <div className="flex justify-between">
                                        <h3 className="text-[17px] font-semibold">Images</h3>
                                        <Link href="#!">
                                            <span>View more</span>
                                        </Link>
                                    </div>
                                    <div className="py-3">
                                        <button className="text-center w-full bg-[#e4e6eb] p-2 rounded-lg hover:bg-[#d9dae0]">
                                            <span className="text-base font-semibold">Add biography</span>
                                        </button>
                                        <div className="flex flex-col gap-y-3 py-3 ">
                                            <div className="flex items-center flex-row gap-x-3">
                                                <i><GraduationCap className="w-8 h-8" /></i>
                                                <span className="text-base font-normal">Learn at Nguyen Mai Viet Vy</span>
                                            </div>
                                            <div className="flex items-center flex-row gap-x-3">
                                                <i><GraduationCap className="w-8 h-8" /></i>
                                                <span className="text-base font-normal">Learn at Nguyen Mai Viet Vy</span>
                                            </div>
                                        </div>
                                        <button className="text-center w-full bg-[#e4e6eb] p-2 rounded-lg hover:bg-[#d9dae0]">
                                            <span className="text-base font-semibold">Edit detail</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <section className="flex-1 z-10 flex flex-col gap-y-8">
                                <div className="w-full p-[15px] rounded-lg shadow-box-shadown break-words">
                                    <div className='flex flex-row items-start gap-x-3'>
                                        <figure style={{ borderRadius: '50%', overflow: 'hidden', width: '40px', height: '40px' }} className='cursor-pointer'>
                                            <Image
                                                src="/home.jpg"
                                                objectFit="cover"
                                                width={100}
                                                height={100}
                                                quality={100}
                                                alt="avatar"
                                            />
                                        </figure>
                                        <span className='text-base font-semibold cursor-pointer'>Nguyen Mai Viet Vy</span>
                                    </div>
                                    <div className='py-4'>
                                        <TextViewMore content={"What is this"} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>}
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
                    open={publicProfileState?.status === "loading"}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
                    open={publicProfileState?.statusAddFriendStatus === "loading"}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </div >
    )
}
