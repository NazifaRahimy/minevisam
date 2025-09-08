import PageTitle from "./pageTitle";

const Tourism = () => {
    return ( 
        <div className="w-full px-[50px] pb-5">
            < PageTitle title="بایگانی های گردشگری"/>
            <div className="w-full mt-5 px-4">
                <div className="w-[170px] py-4 mt-5 gap-2 rounded-md  bg-gray-100 mx-auto flex flex-col justify-center items-center text-xl font-bold shadow"> 
                    <span>گردشگری</span>
                    <span className="w-[60px] rounded-full h-[3px] bg-cyan-600"></span>
                </div>
                <div className="w-full  md:w-[650px] py-5 rounded-md px-4 border my-10 bg-white shadow-[0px_0px_3px_rgba(0,0,0,0.2)]  mx-auto  flex items-center justify-center">
                    <p className="text-[18px]">گردشگری</p>
                </div>
                <div dir="rtl" className="w-full h-auto grid grid-cols-1 md:grid-cols-3  mt-5 gap-5 pb-">
                <div className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2025/05/caption.webp" alt="" className="w-full rounded-md h-[250px]" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده: محمد روزبه</p>
                        <p>تاریخ: 19 می 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">سفرهای خارجی در خرداد ماه | بررسی کامل مقصدها، هزینه‌ها و انتخاب‌های مناسب برای همه</h1>
                        <p className="pt-3 text-[15px] text-gray-500">خرداد ماه یکی از محبوب‌ترین زمان‌ها برای سفر خارجی بین ایرانیان است. هوای گرم اما نه طاقت‌فرسا، پایان ....</p>
                    </div>
                </div>
                <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/07/texas.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده:  آرزو افشار</p>
                        <p>تاریخ: 12 فوریه 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">چرا تگزاس خطرناک است ؟ (همه نکته ها)</h1>
                        <p className="pt-3 text-[15px] text-gray-500">تگزاس، مانند بسیاری از مناطق دیگر، می‌تواند خطرات خاصی داشته باشد. این خطرات ممکن است ناشی ...</p>
                    </div>
                </div>
                <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/azaz02-min.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده: پناه رمضانی</p>
                        <p>تاریخ: 12 فوریه 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">10 بهترین کشور برای سفر خانوادگی از نظر امنیت، قیمت و جذابیت</h1>
                        <p className="pt-3 text-[15px] text-gray-500">سفر خانوادگی می‌تواند تجربه‌ای فوق‌العاده و خاطره‌انگیز باشد، به شرطی که مقصدی مناسب از نظر امنیت، قیم....</p>
                    </div>
                </div>
                 <div className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2023/07/01-min-min-min-3.jpg" alt="" className="w-full rounded-md h-[250px]" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده: محمد روزبه</p>
                        <p>تاریخ: 11 فوریه 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">دریاچه سقالکسار رشت؛ دریاچه ای دیدنی در دل گیلان</h1>
                        <p className="pt-3 text-[15px] text-gray-500">شهرهای شمالی ایران به دلیل داشتن طبیعت سرسبز و انبوه و داشتن دریاچه خزر همیشه مورد لطف مسافران و گردشگران…</p>
                    </div>
                </div>
                <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2023/12/%D8%AC%DA%86%D9%88%D8%B1%DB%8C-%D8%A8%D8%A7-%D9%85%D8%AA%D8%B1%D9%88-%D8%A8%D9%87-%D9%87%D9%81%D8%AA-%D8%AD%D9%88%D8%B6-%D8%A8%D8%B1%D9%85-min.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده:  پریسا احمدی</p>
                        <p>تاریخ: 10 فوریه 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">با مترو چجوری برم هفت حوض؟</h1>
                        <p className="pt-3 text-[15px] text-gray-500">اگر برای شما هم این سوال پیش آمده است که با مترو چجوری می توان به هفت حوض رفت تا پایان این مطل...</p>
                    </div>
                </div>
                <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2023/10/%D9%85%DA%A9%D8%A7%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D9%81%D8%B1-4-%D8%B1%D9%88%D8%B2%D9%87.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده:  پریسا احمدی</p>
                        <p>تاریخ: 10 فوریه 2025</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">مسافرت 4 روزه کجا بریم؟ (بهترین مکان ها برای گردش 4 روزه)</h1>
                        <p className="pt-3 text-[15px] text-gray-500">گر قصد سفر 4 روزه را دارید باید نزدکی ترین مکان به محل زندگی خودتان را در نقشه نگاه کنید و به آن مکان...</p>
                    </div>
                </div>
                 <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/07/sefarat-21.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده: آرزو افشار</p>
                        <p>تاریخ: 3 جولای 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">معرفی سایت سفارت فوری: خدمات تخصصی برای اخذ وقت سفارت</h1>
                        <p className="pt-3 text-[15px] text-gray-500">در دنیای امروز، سفر به کشورهای مختلف برای اهدافی مانند تحصیل، کار، تجارت و تفریح به یک نیاز اساسی...</p>
                    </div>
                </div>
                 <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/Scandinavia-travel-flags-min.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                        <p>نویسنده:  انسیه افشار</p>
                        <p>تاریخ: 1 ژوئن 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">کشورهای اسکاندیناوی کدامند ؟ (جمعیت و مساحت)</h1>
                        <p className="pt-3 text-[15px] text-gray-500">کشورهای اسکاندیناوی معمولاً به سه کشور سوئد، نروژ و دانمارک اشاره دارد. با این حال، گاهی اوقات این اصطلاح به…</p>
                    </div>
                </div>
                <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/02/image-12.jpeg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                         <p>نویسنده:  انسیه افشار</p>
                        <p>تاریخ: 19 فوریه 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">3 مقصدی که حتما باید به آنها سفر کنید</h1>
                        <p className="pt-3 text-[15px] text-gray-500">سفر به هر بهانه‌ای که باشد، فرصت خوبی برای تفریح و تجربه‌های جدید است. به‌ویژه اگر مقاصدی را انتخاب کنید…</p>
                    </div>
                </div>
                 <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/02/image-4.jpeg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                         <p>نویسنده:  زینب یونسی</p>
                        <p>تاریخ: 19 فوریه 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">احتمال خرید بلیط هواپیما لحظه آخری در تعطیلات</h1>
                        <p className="pt-3 text-[15px] text-gray-500">خرید بلیط هواپیما لحظه آخری کاری است که می‌تواند هزینه‌های سفر شما را تا حد زیادی کم کرده و به</p>
                    </div>
                </div>
                 <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/02/%DA%86%D8%B7%D9%88%D8%B1-%D8%AF%D8%B1-%D9%BE%D8%B1%D9%88%D8%A7%D8%B2-%D8%AA%D9%87%D8%B1%D8%A7%D9%86-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84-%D8%AD%D9%88%D8%B5%D9%84%D9%87_%D9%85%D8%A7%D9%86-%D8%B3%D8%B1-%D9%86%D8%B1%D9%88%D8%AF%D8%9F-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-1.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                         <p>نویسنده:  انسیه افشار</p>
                        <p>تاریخ:10 فوریه 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">چطور در پرواز تهران استانبول حوصله‌مان سر نرود؟</h1>
                        <p className="pt-3 text-[15px] text-gray-500">رواز یکی از خوشایندترین تجربه‌های است که شاید ما یک‌بار در طول زندگی آن را تجربه کرده باشیم. البته...</p>
                    </div>
                </div>
                 <div  className="w-full md:w-auto lg:w-[350px] h-auto shadow-md rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/01/dominica-vs-dr-header.jpg" className="w-full rounded-md h-[250px]" alt="" />
                    <div className="flex justify-between px-3 pb-3 pt-5 text-[14px] border-b">
                         <p>نویسنده:  انسیه افشار</p>
                        <p>تاریخ: 10 ژانویه 2024</p>
                    </div>
                    <div className="mt-5 px-3 flex flex-wrap-reverse flex-col pb-10 ">
                        <h1 className="text-blue-700 transition-colors duration-[0.5s] hover:text-cyan-600 cursor-pointer text-lg font-bold ">دومینیکا کجاست و تفاوت آن با دومینیکن چیست؟</h1>
                        <p className="pt-3 text-[15px] text-gray-500">دومینیکا و دومینیکن هر دو از کشورهای حوزه کارائیب و البته از زیباترین جزایر منطقه هستند؛ ولی بسیاری از اوقات…</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Tourism;