import PageTitle from "./pageTitle";
const Fashion = () => {
    return ( 
        <div className="w-full px-[50px] pb-5">
            <PageTitle title="بایگانی های  مد و زیبایی" />
            <div className="w-full mt-5 px-4">
                <div className="w-[170px] py-4 mt-5 gap-2 rounded-md  bg-gray-100 mx-auto flex flex-col justify-center items-center text-xl font-bold shadow"> 
                    <span>مد و زیبایی</span>
                    <span className="w-[60px] rounded-full h-[3px] bg-cyan-600"></span>
                </div>
                <div className="w-[650px] py-5 rounded-md px-4 border my-10 bg-white shadow-[0px_0px_3px_rgba(0,0,0,0.2)]  mx-auto  flex items-center justify-center">
                    <p className="text-[18px]">مد و زیبایی</p>
                </div>
            </div>
        </div>
     );
}
 
export default Fashion;