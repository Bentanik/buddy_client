/* eslint-disable @next/next/no-img-element */
'use client'
import HeaderComponent from "@/components/Header/Header";
import { GraduationCap, Pencil } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomeUploadPost from "@/components/HomeUploadPost/HomeUploadPost";
import TextViewMore from "@/components/TextViewMore/TextViewMore";
import Link from "next/link";
import PostStatus from "@/components/PostStatus/PostStatus";
import AvatarProfile from "@/components/AvatarProfile/AvatarProfile";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import UpdateCoverPhoto from "@/components/UpdateCoverPhoto/UpdateCoverPhoto";
import { getNineFriendsThunk, getNineImagesThunk, getNumbersOfFriendThunk, getProfileUserThunk } from "@/stores/publicUserProfileSlice";
import { Backdrop, CircularProgress } from "@mui/material";


let longText = `Mình hoàn toàn đồng ý với anh Tiến về bài viết này bởi mình từng tự học nhiều thứ. Từ tự học những kỹ năng đời thường như học nấu món ăn mới cho tới học kỹ thuật bơi đúng, đẹp và tự học tiếng Anh, marketing, tài chính. 
Khoảng 15 năm trước đây, khi mình khởi nghiệp, bắt đầu làm quen với những thứ không quen thuộc, như báo cáo tài chính, bảng cân đối, lưu chuyển tiền tệ, nhân sự, marketing... Lúc đó mình nghĩ làm thế nào để học nhanh, hiểu bản chất và áp dụng ngay vào công việc. Mình đọc sách. Mỗi lĩnh vực mình chọn ra 10 cuốn sách tạm gọi là hay nhất để đọc. Vừa đọc vừa so sánh, đối chiếu với công việc trong thực tiễn, vừa trao đổi với những người có chuyên môn sâu về lĩnh vực này. Và vì vậy, trong thời gian ngắn, với kỹ năng TỰ HỌC, mình đã trang bị cho bản thân những kiến thức, kỹ năng mới để đáp ứng yêu cầu ngày càng cao của công việc trong một số lĩnh vực mới. 
Sau này và cho tới tận bây giờ, mình đã và đang tham gia nhiều khóa/chương trình học, cả trong nước và quốc tế, cả online và offline, với tinh thần THỰC HỌC, TỰ HỌC. 
Các bạn trẻ bây giờ giỏi giang và nhiều áp lực hơn thế hệ 8x bọn mình. Nhưng bù lại, sách vở, nguồn tài tài nguyên để tự học chưa bao giờ lại khổng lồ như hiện tại. Vấn đề với các bạn trẻ bây giờ là ĐỘNG LỰC và PHƯƠNG PHÁP để TỰ HỌC.
Và rất tuyệt vời, cuốn sách “Tự học, kiến tạo một hành trình học tập suốt đời” của tác giả Hoàng Anh Đức & cộng sự sẽ giúp các bạn trẻ trả lời: Tại sao phải tự học? Có những mô hình, phương pháp, kỹ thuật tự học nào?
Cuốn sách này phù hợp với các bạn trẻ là học sinh cấp 2, cấp 3 và cả sinh viên. 
…
"Trước khi rời khỏi ghế Chủ tịch FPT Software, ông Hoàng Nam Tiến gửi lời khuyên cho thế hệ Z: “Muốn sống sót, bắt buộc các bạn phải TỰ HỌC kiến thức mới”.
“Những người mù chữ trong thế kỷ 21 sẽ không phải là những người không biết đọc, biết viết, mà là những người không có khả năng học, rồi quên đi chính những thứ mình đã học và tiếp tục học cái mới” – đó là điều mà ông Hoàng Nam Tiến muốn chia sẻ với thế hệ Z – những bạn trẻ sinh sau năm 1995 và đang phải chuẩn bị đưa ra những lựa chọn quan trọng cho tương lai của mình.
Lim - con gái thứ 3 của tôi đang theo học chuyên ngành Quản lý Khách sạn ở Nhật Bản. Trước khi con bé học Đại học, 2-3 năm trời liên tục, ba con tôi ngồi với nhau, để cùng nhau trò chuyện xem đâu sẽ là ngành học phù hợp nhất với con. Cuối cùng chúng tôi cùng đồng ý rằng, với tính cách cẩn thận, chu đáo, nó chọn ngành dịch vụ sẽ là phù hợp nhất.
Tôi chu cấp cho con tôi số tiền đủ để con có thể sống trong thời gian du học ở Nhật Bản. Nhưng con bé vẫn đi làm thêm. Con nói, con đi làm thêm không phải để kiếm tiền tiêu vặt, mà là để rèn luyện khả năng đứng nhiều giờ đồng hồ liên tục mỗi ngày.
Tôi càng ngẫm nghĩ về điều đó, thì càng thấy lựa chọn của con mình là đúng, vì nếu như con tôi không chịu đựng được việc đứng trên đôi giày cao 3cm của nhân viên phục vụ mỗi ngày đủ 5 tiếng đồng hồ, thì làm sao con có thể theo đuổi được công việc của một người quản lý khách sạn – cái nghề mà có thể đòi hỏi nó đứng 10 tiếng mỗi ngày. Một kỹ năng nghe tưởng chừng đơn giản, nhưng nếu không có thì dù con tôi có tốt nghiệp một trong những ngôi trường Top về chuyên ngành Quản lý khách sạn với tấm bằng loại ưu, nó cũng không bao giờ có cơ hội trở thành một nhân viên khách sạn giỏi.
Tôi thường xuyên phải đi săn đầu người cho công ty của mình. Và tôi phát hiện ra, có một tỷ lệ quá cao các bạn sinh viên sau khi ra trường apply vào FPT Software đang ngồi nhầm chỗ, học nhầm nghề, theo đuổi một thứ chẳng hề phù hợp với năng lực và tính cách của chính các bạn ấy. Tôi gặp không ít những bạn mới chỉ làm F-Soft được 6 tháng đã lên gặp tôi, vò đầu bứt tai: "Em sẽ bỏ việc, không phải vì em ghét anh Tiến, mà bởi vì em không thể chịu được việc ngồi làm việc trước máy tính triền miên như này được".
Nghe có vẻ rất buồn cười, nhưng tìm được một kỹ sư phần mềm có năng lực làm việc khó một, thì tìm được người có năng lực ngồi trước màn hình toàn chữ số và code suốt 8 -12 tiếng mỗi ngày khó hơn rất nhiều lần. Vì xin thưa với các bạn, đó là một trong những công việc vô cùng nhàm chán với nhiều người.
Khi tôi than phiền với leader của các công ty phần mềm lớn trên thế giới, tôi mới biết rằng hóa ra các công ty phần mềm trên thế giới họ có cả bài test về tính cách để tuyển dụng những người làm nghề này, trong đó yếu tố tính cách, sở thích, hoàn cảnh gia đình và điều kiện sống sẽ là một trong những tiêu chí quyết định xem ứng viên có thể chịu đựng được công việc hay không. Và khi học theo cách làm này, tôi mới phát hiện hóa ra những người ngồi nhầm chỗ, chọn nhầm nghề là vô cùng nhiều.
Tôi thường hay hỏi các bạn sinh viên trẻ một câu, rằng "điều gì khiến các em lựa chọn nghề nghiệp này", và rất nhiều câu trả lời khiến tôi vừa buồn, vừa lo lắng: Phần lớn các em chọn nghề theo ý bố mẹ chứ không dựa trên các nguyện vọng cá nhân và không tìm hiểu về nghề mình chọn, cũng như không quan tâm việc mình có thực sự phù hợp với nó hay không. Ví dụ học giỏi toán thì sẽ mặc nhiên thi vào Bách khoa; học giỏi Sinh thì sẽ thi vào trường Y; vì dốt các môn tự nhiên nên học các ngành xã hội nhân văn. Hậu quả là hơn 50% sinh viên ra trường không làm đúng nghề. Với một người chuyên làm Head hunter như tôi, đó là điều rất lãng phí. 4-5 năm học để học thứ không phù hợp với bạn và có thể chẳng giúp ích gì (thậm chí là không dùng đến) cho bạn trong tương lai, bạn không thể hình dung bạn đã bỏ lỡ điều gì và đã tụt hậu đến đâu trong thời đại mà mọi thứ thay đổi từng ngày như này.
Tôi luôn nghĩ rằng thế hệ Z sẽ là thế hệ "Global citizen" – công dân toàn cầu. Các bạn đang là 33% tổng dân số toàn cầu và cần nghiêm túc nghĩ về kĩ năng cần có để sống sót trong thời đại này.
Khi nghĩ công việc, đương nhiên chúng ta phải nghĩ đến tương lai mình sẽ làm gì để sống. Nhưng nếu thế hệ cha mẹ các bạn chỉ tìm kiếm những công việc ở trong nước, học những trường để sao ra trường cốt xin được việc làm gần nhà, thì thế hệ Z phải là thế hệ nghĩ đến thị trường công việc Global. Vì quy mô công việc trên thế giới lớn hơn 3000 lần so với Việt Nam. Thế thì tại sao không chọn thị trường với 3000 lần hơn số cơ hội? Tại sao lại bó hẹp mình trong đất nước này? Tại sao không nghĩ người Việt Nam đi ra nước ngoài không phải sang Hàn Quốc, Nhật Bản, Dubai làm lao động chân tay, mà là dùng trí tuệ của mình có thể đàng hoàng để đến những quốc gia giàu có nhất, những môi trường làm việc đòi hỏi cao nhất như Silicon Valley, như New York...
Để có thể trở thành "Global citizen", ngoài kiến thức, các bạn cần học ngôn ngữ. Là ngôn ngữ, chứ không phải ngoại ngữ. Vì bây giờ, biết Tiếng Anh là bắt buộc. Muốn có tương lai thì phải học Tiếng Anh. Còn nếu ai đó lý luận rằng "tôi không cần biết Tiếng Anh vẫn có thể làm viêc ở Việt Nam" thì ok, tất nhiên thế nào chẳng sống được. Không biết tiếng Kinh còn sống tốt nữa là.
Tôi là một người của thế hệ "one-time learning" – thế hệ chỉ học một lần rồi ung dung sử dụng các kiến thức đó cho suốt phần đời còn lại của mình mà vẫn có thể thành công trong cuộc sống. Vì thời đại của chúng tôi sống chỉ cần đơn giản như thế là đã có thể thành công. Nên phần lớn những người trong thế hệ tôi, họ không nghĩ về việc đi học nữa. Không sao cả, vì họ may mắn sinh ra trong bối cảnh xã hội tương đối dễ dàng! Nhưng nếu thế hệ Z các bạn mà chọn cách sống đó, thì cho phép tôi được nói rằng: các bạn sẽ "chết" trong thời đại này!
Vì sao tôi lại dùng từ "sống sót"? Hãy nhìn vào những thay đổi của thị trường lao động.
2,7 triệu công nhân may Việt Nam, hơn 1 triệu công nhân da giày, gần 1 triệu công nhân lắp ráp điện tử, không quá 10 năm nữa sẽ mất hết việc. Và việc đó đã diễn ra bắt đầu ngay từ bây giờ. Vì một con robot hiện nay để làm việc thay người trong các nhà máy có giá khoảng 250 nghìn USD, nhưng trong 5-10 năm tới chỉ có giá 30.000 USD. Khi đó việc sản xuất 24/7/365 ngày trong năm trong các nhà máy không có ánh điện sẽ hoàn toàn khả thi. Nếu bạn là nhà đầu tư, là chủ sản xuất, thì bạn nghĩ liệu bạn sẽ chọn công nhân hay robot? Kiếm đâu ra ở trên thế giới này giá nhân công đủ rẻ hơn và có thể đua được với người máy về năng suất lao động?
Hàng chục ngàn cô gái ngồi ở mỗi ngân hàng làm nhân viên giao dịch, phần lớn đều học đại học, cũng sẽ mất việc trong 10 năm tới. Bởi vì bây giờ các ngân hàng bắt đầu sử dụng hệ thống live banking. Khi thế hệ Z trưởng thành, họ sẽ không ra ngân hàng giao dịch nữa mà giao dịch trên internet banking. Hàng chục ngàn cán bộ tín dụng đánh giá tín dụng cũng sẽ mất việc, bởi hệ thống đánh giá của AI (trí tuệ nhân tạo) dựa trên big data sẽ chính xác và trung thực hơn rất nhiều.
Phần lớn các bác sĩ bây giờ làm việc chẩn đoán đa khoa. Nhưng việc chẩn đoán của AI bây giờ đã vượt các bác sĩ dưới 10 năm kinh nghiệm. Hệ thống của IBMWATSON Health đã tập hợp kiến thức của hơn 5000 bác sĩ về ung thư giỏi nhất thế giới + hàng triệu case study. Dựa trên những data đó, máy móc đã có khả năng chẩn đoán ung thư cực kì chính xác. Hiện giờ giá thành cho hệ thống đó vẫn còn quá đắt, nhưng nó sẽ rẻ xuống rất nhanh. Khi đó người ta chỉ cần bác sĩ thật giỏi để làm phẫu thuật, chứ không cần bác sĩ khám bệnh nữa. Rất nhiều bác sĩ sẽ mất việc.
Nếu bạn có ý định trở thành giáo viên thì bạn cũng nên lo đi là vừa. Vì ngày mai, thế hệ này sẽ muốn học trực tiếp với những người giỏi nhất thế giới. Và điều đó không khó. Vì hệ thống lớp học online đang ngày càng nở rộ và trở nên phổ biến. Hàng rào về ngôn ngữ không còn nữa. Khác biệt về ngôn ngữ cũng có thể được hỗ trợ bởi AI. Nghề giáo không còn là nơi trú ẩn an toàn nữa.
Nghề luật sư cũng thế. Luật sư để tranh tụng trước tòa, để đàm phán, thương thuyết thì máy móc không thể thay thế. Nhưng nếu để tra cứu chéo các bộ luật, phân tích sự ảnh hưởng và đưa ra lời khuyên cho khách hàng thì trong 5 năm tới, AI sẽ làm việc đó tốt hơn con người với kho big data vô hạn mà nó thu thập được. Sẽ có rất nhiều luật sư mất việc.
Ở một thời đại mà công việc đang là mốt hôm nay có thể hoàn toàn biến mất trong tương lai, thì kỹ năng tự học và học liên tục là quan trọng nhất.
Ngày xưa một bác sĩ học 6 năm thì sau khi ra trường, những kiến thức ấy đủ cho họ dùng trong 10 năm. Bây giờ thì không có cách nào để một bác sĩ đó có kiến thức để làm việc 10-15 năm tiếp theo. Vì các kiến thức y khoa, các phác đồ điều trị mới, các loại thuốc mới thay đổi theo từng ngày. Thế hệ "one-time learning" đã qua rồi. Giờ là thời đại của "lifelong learning". Peter Schwartz – người từng là cố vấn cho hai đời Thủ tướng Singapore đã nói rằng, với ông ta, kỹ năng quan trọng nhất để tồn tại trong thời đại bây giờ là khả năng tự học. Dù đã hơn 60 tuổi, ông vẫn tham gia các khóa học online và tự mình cập nhật các kiến thức theo nhiều cách khác nhau để tránh bị tụt hậu. Ông ấy thường trích dẫn một câu nói mà ông vô cùng tâm đắc của Alvin Toffler: "Những người mù chữ trong thế kỷ 21 sẽ không phải là những người không biết đọc, biết viết, mà là những người không có khả năng học, rồi quên đi chính những thứ mình đã học và tiếp tục học cái mới".
Nhưng đừng nghĩ rằng lâu lâu đọc một cuốn sách, lâu lâu dự một hội thảo nào đó, tiếp xúc với một guru (một chuyên gia hàng đầu) trong lĩnh vực nào đó thì đã gọi là học. Những thứ đó chỉ mang lại cho bạn những ý niệm ban đầu. Còn để học nó, hiểu nó, bạn phải bỏ thời gian đi học, để đảm bảo được 3 việc: Cung cấp cho bạn cơ sở lý luận: Why? What to do? How to do?
Một năm tôi có khoảng 1000 giờ bay, 2000 giờ đi làm việc với đối tác. Chưa kể việc ăn cơm, tiếp khách. Nhưng mỗi ngày, tôi dành 1-2 tiếng tự học. Tôi tham gia các khóa học online có yêu cầu kiểm tra khắt khe về đầu ra. Mỗi ngày, nếu tôi không vượt qua được phần bài tập của khóa học thì tôi không thể tiến lên được level tiếp theo, không thể kết thúc khóa học của mình và bị phạt tiền về việc đó.
Năm nay tôi 51 tuổi. Kể cả tôi đã gặt hái được chút thành công trong mắt một số người, thì tôi vẫn có thể tụt hậu nhanh chóng trong một hai năm tới, nếu như tôi không tự update những verions mới của chính tôi mỗi ngày. Thế hệ Z các bạn thì sao?
Trước giờ chúng ta quá ỷ lại vào vai trò dạy kiến thức của nhà trường. Nhưng vai trò của nhà trường trong thời đại bây giờ sẽ không phải là nơi để dạy kiến thức cho học sinh nữa, mà là dạy các bạn kỹ năng tự học. 6 năm trước, Bộ trưởng Giáo dục Phạm Vũ Luận đã từng nói: "Dạy học đã thay đổi. Cần phải chú trọng phát triển cá nhân. Trước đây nói dạy 1 lớp 40 em. Giờ phải nói dạy 40 em một lớp" - nhiều người không hiểu câu nói này nên đã chế giễu ông. Nhưng câu nói đó thật ra rất chính xác. Nền giáo dục hơn 1000 năm nay của người Việt - nền giáo dục một chiều, thầy giảng - trò nghe, thầy đọc – trò chép đã đến lúc phải chấm dứt và nhất định phải chấm dứt. Giáo dục bây giờ là phải lấy học sinh làm trung tâm. Chứ không được phép đánh đồng, cào bằng, vì mỗi đứa trẻ là một cá thể riêng biệt, với những tính cách, khả năng riêng biệt, với những ưu – nhược điểm riêng biệt và khả năng tiếp nhận kiến thức riêng biệt. Một chương trình chung cho ngần đó đứa trẻ là cách hủy hoại cá nhân nhanh chóng nhất. Giáo dục bây giờ là định hướng cho học sinh kỹ năng để chúng tự học những gì tốt nhất cho chúng và tự tìm được con đường tốt nhất cho mình, để sống sót trong thời đại này.
Thế hệ Z các bạn – thế hệ phải cạnh tranh bằng sự khác biệt có sống sót được không? Câu trả lời tùy thuộc vào sự chuẩn bị và sẵn sàng của chính các bạn!"
Theo Trí Thức Trẻ.
HN, 06/08/2024.`

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function ProfileComponent() {
    const dispatch = useAppDispatch();
    const userState = useAppSelector(state => state.userSlice);
    const publicProfileState = useAppSelector(state => state.publicUserProfileSlice);

    const [postStatus, setPostStatus] = useState(false);
    const [listImages, setListImages] = useState<any>(null);
    const [listFriends, setListFriends] = useState<any>(null);

    const handleOpenPostStatus = () => {
        setPostStatus(true);
    }

    const handleClosePostStatus = () => {
        setPostStatus(false);
    }

    const fetchUserProfile = () => {
        try {
            dispatch(getProfileUserThunk({
                userId: userState.user?.id ?? ""
            }));
        } catch (err) {
            return err;
        }
    }

    const fetchNumbersOfFriendProfile = () => {
        try {
            dispatch(getNumbersOfFriendThunk({
                userId: userState.user?.id ?? ""
            }))
        } catch (err) {
            return err;
        }
    }

    const fetchNineImagesProfile = async () => {
        try {
            const res = await dispatch(getNineImagesThunk({
                userId: userState.user?.id ?? ""
            })).unwrap();
            setListImages(res?.data);
        } catch (err) {
            return err;
        }
    }

    const fetchNineFriendsProfile = async () => {
        try {
            const res = await dispatch(getNineFriendsThunk({
                userId: userState.user?.id ?? ""
            })).unwrap();
            setListFriends(res?.data);
        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        fetchUserProfile();
        fetchNumbersOfFriendProfile();
        fetchNineImagesProfile();
        fetchNineFriendsProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const BoxImages = (data: any) => {
        return <div className="h-[128px] flex items-center justify-center border border-gray-100 shadow-lg">
            <img src={data?.data} alt="Image" className="w-full h-full object-cover" />
        </div>
    }

    const ListBoxImages = () => {
        return listImages?.map((item: any, index: number) => {
            return <BoxImages data={item} key={index} />
        })
    }

    const BoxFriends = (data: any) => {
        return <Link href={`/public-profile/${data?.data?.userId}`}> <div className="flex flex-col items-start gap-y-2 w-full">
            <div className="w-full h-[120px] flex items-center justify-center">
                <img src={data?.data?.cropAvatar} alt="Image" className="w-[123px] h-full object-cover rounded-lg" />
            </div>
            <h3 className="font-sans text-[12px] font-semibold hover:underline">{data?.data?.fullName}</h3>
        </div>
        </Link>
    }

    const ListBoxFriends = () => {
        return listFriends?.map((item: any, index: number) => {
            return <BoxFriends data={item} key={index} />
        })
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
                            <UpdateCoverPhoto />
                        </figure>
                        <div className="absolute bottom-[0] transform w-full pl-[4%] pr-[2%] flex justify-between items-baseline z-30">
                            <div className="flex gap-4 items-center">
                                <AvatarProfile />

                                <div className="inline-block">
                                    <h2 className="text-2xl font-semibold font-poppins">{publicProfileState.data.fullName}</h2>
                                    <p className="mt-[3px] text-base text-gray-600">{publicProfileState.data.numbersOfFriend} friends</p>
                                </div>
                            </div>
                            <div className="-translate-y-4">
                                <button className="px-3 py-2 bg-blue-400 rounded-xl hover:bg-blue-500">
                                    <div className="flex items-center gap-x-3">
                                        <i>
                                            <Pencil className="text-black w-5 h-5" />
                                        </i>
                                        <span className="text-base font-medium">Edit profile</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <main className="relative pt-5 px-3">
                    <div className="max-w-[1120px] mx-auto">
                        <div className='w-full flex flex-row items-start gap-x-5'>
                            <section className="pb-3 sticky basis-1/3 top-[84px] z-20 w-[20%]">
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
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-[17px] font-semibold">Images</h3>
                                        <Link href="#!">
                                            <div className="px-2 py-2 hover:bg-slate-200 rounded-lg">
                                                <span className="text-base text-[#0064d1] font-light">View more</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="py-3 grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-1">
                                        {ListBoxImages()}
                                    </div>
                                </div>
                                <div className="w-full p-[15px] rounded-lg shadow-box-shadown break-words mt-[30px]">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-[17px] font-semibold">Friends</h3>
                                        <Link href="#!">
                                            <div className="px-2 py-2 hover:bg-slate-200 rounded-lg">
                                                <span className="text-base text-[#0064d1] font-light">View more</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="py-3 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-3">
                                        {ListBoxFriends()}
                                    </div>
                                </div>
                            </section>
                            <section className="pb-3 flex-1 z-10 flex flex-col gap-y-8">
                                <div className="w-full p-[15px] rounded-lg shadow-box-shadown break-words">
                                    <HomeUploadPost onClickPopup={handleOpenPostStatus} />
                                </div>
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
                                        <TextViewMore content={longText} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <div>
                    <PostStatus open={postStatus} onClose={handleClosePostStatus} />
                </div>
            </div>}
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
                    open={publicProfileState?.status === "loading"}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </div>
    )
}
