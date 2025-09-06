import PageTitle from "./pageTitle";

const  Lifestyle  = () => {

    return ( 
        <div  className="w-full px-[50px] pb-5">
            <div className="w-full mt-5 px-4">
                <PageTitle title="بایگانی های سبک زندگی"/>
            </div>
            <div className="w-[170px] py-4 mt-5 gap-2 rounded-md  bg-gray-100 mx-auto flex flex-col justify-center items-center text-xl font-bold shadow"> 
                <span>سبک زندگی</span>
                <span className="w-[60px] rounded-full h-[3px] bg-cyan-600"></span>
            </div>
        </div>
     ); 
}
 
export default  Lifestyle ;