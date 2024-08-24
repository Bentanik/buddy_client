import Image from 'next/image'

export default function HomeFollow() {
    return (
        <div className='rounded-lg bg-gray-100 p-[15px] flex flex-col gap-y-5'>
            <div className='flex gap-x-3'>
                <figure style={{ borderRadius: '50%', overflow: 'hidden', width: '48px', height: '48px' }}>
                    <Image
                        src="/home.jpg"
                        objectFit="cover"
                        width={100}
                        height={100}
                        quality={100}
                        alt="avatar"
                    />
                </figure>
                <span className='flex-1 font-semibold'>Nguyen Mai Viet Vy</span>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center'>
                    <span className='text-[18px] font-bold'>2.3K</span>
                    <span className='text-[14px] text-gray-500 font-bold'>Follower</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-[18px] font-bold'>235</span>
                    <span className='text-[14px] text-gray-500 font-bold'>Following</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-[18px] font-bold'>80</span>
                    <span className='text-[14px] text-gray-500 font-bold'>Post</span>
                </div>
            </div>
        </div>
    )
}
