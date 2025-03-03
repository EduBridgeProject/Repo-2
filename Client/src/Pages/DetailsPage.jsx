import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams(); 
  const [beneficiary, setBeneficiary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/case/api/beneficiaries/${id}`);
        setBeneficiary(response.data);

      } catch (error) {
        console.error("Error fetching beneficiary:", error);
      }
    };
    console.log(beneficiary);
    fetchData();
  }, [id]);

  if (!beneficiary) return <p>Loading...</p>;

  return (
    <div className="bg-white min-h-screen text-right" dir="rtl">
    {/* Enhanced Hero Section */}
    <div className="relative text-white py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #940066 0%, #650045 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white opacity-10 transform -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-gray-100 opacity-10 transform translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title Section */}
       
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-100 drop-shadow-lg">
          دعم مستقبل التعليم للطلاب المتفوقين
        </h1>
        
        <p className="text-xl text-gray-200 max-w-3xl mx-auto opacity-90">
          نساعد الطلاب المتميزين في تحقيق أحلامهم الأكاديمية من خلال تقديم الدعم اللازم لاستكمال تعليمهم.
        </p>
        
  
        
        {/* Donate Now Button */}
        <div className="mt-10">
          <button 
            className="px-10 py-4 bg-white text-lg font-bold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300" 
            style={{ color: '#940066' }}
          >
            تبرع الآن
          </button>
        </div>
      </div>
    </div>
    {/* Student Information */}
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#940066' }}>بيانات الطالب</h2>
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="mb-3">
            <span className="font-bold ml-2"> رقم الحالة:</span>
            <span>{beneficiary.id}</span>
          </div>
          <div className="mb-3">
            <span className="font-bold ml-2">رقم الجامعي:</span>
            <span>{beneficiary.universityNo}</span>
          </div>
          <div>
            <span className="font-bold ml-2">المبلغ المطلوب:</span>
            <span>{beneficiary.amount}</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Opportunity Details */}
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2" style={{ color: '#940066' }}>تفاصيل الحالة</h2>
      <p className="text-gray-700"> {beneficiary.needsDescription}</p>
      
      {/* Info Boxes */}
      {/* <div className="flex flex-wrap mt-6 gap-4">
        <div className="flex items-center border rounded-lg px-4 py-2">
          <MapPin className="w-5 h-5 ml-2" style={{ color: '#940066' }} />
          <span>{beneficiary.universityName}</span>
        </div>
        
    
      </div> */}
      
      {/* Donate Now Button in Details Section */}
      <div className="mt-8 mb-4">
        <button 
          className="px-6 py-3 text-white font-bold rounded-lg shadow-lg transition duration-300 w-full md:w-auto"
          style={{ backgroundColor: '#940066' }}
        >
          تبرع الان
        </button>
      </div>
      
      {/* Share Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        {/* <button className="p-2 border rounded-md">
          <Link2 className="w-5 h-5" />
        </button> */}
        {/* <button className="p-2 border rounded-md">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 4s-2.9-.2-4.4.4c-1.1.4-2.1 1.2-2.7 2.1-.6.9-1.4 2.6-1.4 2.6L13 8 8 13l1 .5s-1.7.8-2.6 1.4c-.9.6-1.7 1.6-2.1 2.7-.6 1.5-.4 4.4-.4 4.4s2.9.2 4.4-.4c1.1-.4 2.1-1.2 2.7-2.1.6-.9 1.4-2.6 1.4-2.6l.5 1 5-5-.5-1s1.7-.8 2.6-1.4c.9-.6 1.7-1.6 2.1-2.7.6-1.5.4-4.4.4-4.4z"/>
          </svg>
        </button> */}
        {/* <button className="p-2 border rounded-md">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 22l1.5-5.5C2.5 15 2 13.3 2 11.5 2 6.3 6.3 2 11.5 2S21 6.3 21 11.5 16.7 21 11.5 21c-1.8 0-3.5-.5-5-1.5L2 22z"/>
            <circle cx="11.5" cy="11.5" r="1"/>
            <circle cx="8" cy="11.5" r="1"/>
            <circle cx="15" cy="11.5" r="1"/>
          </svg>
        </button> */}
      </div>
    </div>

    {/* Similar Opportunities */}
    <div className="max-w-6xl mx-auto px-4 mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#940066' }}>فرص مشابهة</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        {/* <div className="border rounded-lg overflow-hidden bg-gray-50">
          <div className="relative">
            <img src="/api/placeholder/400/200" alt="منح التفوق العلمي" className="w-full h-48 object-cover" />
            <div className="absolute top-2 left-2 flex gap-2">
              <span className="bg-gray-100 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>تعليم</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>منح</span>
              <span className="bg-gray-300 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>كليات العلوم</span>
            </div>
            <div className="absolute bottom-0 right-0 w-full p-2 bg-white bg-opacity-90">
              <h3 className="font-bold" style={{ color: '#940066' }}>منح التفوق العلمي</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between text-sm mb-2">
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 ml-1" />
                <span>كليات العلوم</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 ml-1" />
                <span>عدد المستفيدين: 75</span>
              </div>
            </div>
            <p className="text-sm mb-4">دعم الطلاب المتفوقين في كليات العلوم والرياضيات لتغطية مصاريف الدراسة والكتب والأبحاث العلمية...</p>
            <div className="flex justify-between items-center text-sm">
              <span style={{ color: '#940066' }}>دأ 200 / 840</span>
              <span className="text-white px-2 py-1 rounded" style={{ backgroundColor: '#940066' }}>42%</span>
            </div>
          </div>
          <div className="border-t p-2">
            <button className="w-full py-2 text-center font-bold hover:bg-gray-100" style={{ color: '#940066' }}>التفاصيل</button>
          </div>
        </div> */}
        
        {/* Second Card */}
        {/* <div className="border rounded-lg overflow-hidden bg-gray-50">
          <div className="relative">
            <img src="/api/placeholder/400/200" alt="منح الطب" className="w-full h-48 object-cover" />
            <div className="absolute top-2 left-2 flex gap-2">
              <span className="bg-gray-100 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>تعليم</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>منح</span>
              <span className="bg-gray-300 rounded-full px-3 py-1 text-xs" style={{ color: '#940066' }}>كليات الطب</span>
            </div>
            <div className="absolute bottom-0 right-0 w-full p-2 bg-white bg-opacity-90">
              <h3 className="font-bold" style={{ color: '#940066' }}>منح طلاب الطب</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between text-sm mb-2">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 ml-1" />
                <span>كليات الطب</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 ml-1" />
                <span>عدد المستفيدين: 50</span>
              </div>
            </div>
            <p className="text-sm mb-4">مساعدة طلاب كليات الطب المتفوقين أكاديمياً والمحتاجين مادياً لإكمال دراستهم وتحقيق حلمهم في خدمة المجتمع...</p>
            <div className="flex justify-between items-center text-sm">
              <span style={{ color: '#940066' }}>دأ 350 / 2450</span>
              <span className="text-white px-2 py-1 rounded" style={{ backgroundColor: '#940066' }}>70%</span>
            </div>
          </div>
          <div className="border-t p-2">
            <button className="w-full py-2 text-center font-bold hover:bg-gray-100" style={{ color: '#940066' }}>التفاصيل</button>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  );
};

export default DetailsPage;