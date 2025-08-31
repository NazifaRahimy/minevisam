import PageTitle from "./pageTitle"

const HomePage = () => {
    return (
    <div className="w-full h-auto p-[50px]">
        <PageTitle title="مجله آموزیشی، هنری، تفریحی، ورزشی" />
        <div className="w-full mt-10 border-t-[3px] border-t-cyan-700 rounded-lg shadow-md px-4">
           <div className="h-px w-full mt-[150px]  bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
           <div className="w-[170px] py-4 mt-7 gap-2 rounded-md  bg-gray-100 mx-auto flex flex-col justify-center items-center text-xl font-bold shadow"> 
                <span>آخرین مطالب</span>
                <span className="w-[60px] rounded-full h-[3px] bg-cyan-600"></span>
            </div>
            <div dir="rtl" className="w-full h-auto grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 pb-7">
                <div className="flex items-center gap-3 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/04/%D9%86%D9%88%D8%B4%D8%AA%D9%86-%D8%AF%D8%B9%D8%A7%DB%8C-%D8%AB%D8%B1%D9%88%D8%AA-%D8%B1%D9%88%DB%8C-%DA%A9%D8%A7%D8%BA%D8%B0-150x150.jpg" alt=""  className="w-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">نوشتن دعای ثروت روی کاغذ + نحوه نوشتن دعا ثروت</p>
                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: پریسا احمدی | تاریخ: 26 جولای 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/kurdi-150x150.jpg" alt=""  className="w-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">اسم عشقمو به زبان کردی چی سیو کنم؟</p>
                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: محمد روزبه | تاریخ: 23 جولای 2025</p>
                    </div>
                </div>
                 <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/05/%DA%A9%D9%BE%D8%B4%D9%86-%D8%B7%D9%86%D8%B2-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">کپشن طنز برای اینستاگرام، جالب و خنده دار</p>
                        <p className="text-gray-600 text-[14px] font-bold">نویسنده: محمد روزبه | تاریخ: 23 جولای 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/zzzz-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer font-bold text-lg">شعر تسلیت از حافظ (مجموعه اشعار حافظ درباره مرگ و تسلیت)</p>
                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: آرزو افشار  | تاریخ: 23 جولای 2025</p>
                    </div>
                </div>
                     <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/05/noooor-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">متن دعای نور حضرت زهرا (برای تب، چشم، گشایش) با ترجمه  </p>

                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: پریسا احمدی | تاریخ: 25 جولای 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/01ef2e3c3b9b78a411973d3475471057c5e1d761-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">غمگین ترین کشور های دنیا در سال 2025 و دلایل آن</p>
                        <p className="text-gray-600 text-[14px] font-bold">نویسنده: شیما فلاح   | تاریخ: 22 جولای 2025</p>
                    </div>
                </div><div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/05/birthday-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">بهترین متن‌های دعوت تولد برای دختر و پسر (لاکچری و رسمی)</p>
                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: شیما فلاح   | تاریخ: 24 جولای 2025</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/123123-min-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">بهترین میوه‌ها در فصل گرما کدامند؟ + دلایل ضروری مصرف</p>

                        <p className="text-gray-600 text-[14px] font-bold ">نویسنده: آرزو افشار | تاریخ: 22 جولای 2025</p>
                    </div>
                </div>
                 <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2024/06/baby-01-min-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">جدیدترین اسم های پسر ترکی همراه با معنی فارسی (1404)</p>
                        <p className="text-gray-600 text-[14px] font-bold">نویسنده: شیما فلاح | | تاریخ: 22 جولای 2025</p>
                    </div>
                </div>
                 <div className="flex items-center gap-2 hover:bg-gray-100 transition-colors duration-[0.5s]  px-5 py-2 rounded-md">
                    <img src="https://minevisam.ir/wp-content/uploads/2023/09/%D8%A7%D8%B3%D9%85-%DA%A9%D8%B1%D9%87-%D8%A7%DB%8C-%D8%AF%D8%AE%D8%AA%D8%B1%D8%A7%D9%86%D9%87-150x150.jpg" alt=""  className="w-[60px] h-[60px] rounded-md"/>
                    <div className="flex flex-wrap flex-col gap-1">
                        <p className="hover:text-cyan-600 transition-colors duration-[0.5s] cursor-pointer text-lg font-bold">اسم دخترانه کره ای همراه با معنی (شیک، جالب و باکلاس)</p>
                        <p className="text-gray-600 text-[14px] font-bold">نویسنده: پریسا احمدی  | تاریخ: 21 جولای 2025</p>
                    </div>
                </div>
            </div> 
           
        </div>
    </div>
      );
}
 
export default HomePage;