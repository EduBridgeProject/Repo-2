import React from 'react';
import { Calendar, MapPin, Users, Link2, GraduationCap, BookOpen } from 'lucide-react';

const DetailsPage = () => {
  return (
    <div className="bg-white min-h-screen text-right" dir="rtl">
      {/* Enhanced Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #940066 0%, #650045 100%)' }} className="relative text-white py-16 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-10 transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5 transform translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Main Title with Decoration */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white bg-opacity-20">
              <span className="font-bold">برنامج المنح الدراسية</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">منح دراسية للطلاب المتفوقين</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">دعم مستقبل التعليم ومساعدة الطلاب المتميزين في إكمال مسيرتهم الأكاديمية</p>
          </div>
          
          {/* Progress Bar with Enhanced Style */}
          <div className="max-w-lg mx-auto px-4">
            <div className="flex justify-between mb-3 text-lg">
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                <span className="font-bold">25%</span>
              </div>
              <div>
                <span className="font-bold">125 / 500 دأ</span>
              </div>
            </div>
            <div className="h-8 w-full bg-white bg-opacity-20 rounded-full p-1">
              <div className="h-full bg-white rounded-full relative" style={{ width: '25%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-pink-200 opacity-50 rounded-full"></div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-6 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">150</div>
                <div className="text-sm opacity-80">طالب مستفيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-80">أشهر متبقية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">375</div>
                <div className="text-sm opacity-80">دأ متبقي</div>
              </div>
            </div>
            
            {/* Donate Now Button */}
            <div className="mt-8 text-center">
              <button 
                className="px-8 py-3 bg-white text-lg font-bold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300" 
                style={{ color: '#940066' }}
              >
                تبرع الان
              </button>
            </div>
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
              <span>أحمد محمد العبدالله</span>
            </div>
            <div className="mb-3">
              <span className="font-bold ml-2">الجامعة:</span>
              <span>جامعة الملك سعود</span>
            </div>
            <div>
              <span className="font-bold ml-2">التخصص:</span>
              <span>هندسة البرمجيات</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Opportunity Details */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#940066' }}>تفاصيل الحالة</h2>
        <p className="text-gray-700">ساهم في تمكين الطلاب المتفوقين من إكمال دراستهم الجامعية وبناء مستقبلهم العلمي والمهني</p>
        
        {/* Info Boxes */}
        <div className="flex flex-wrap mt-6 gap-4">
          <div className="flex items-center border rounded-lg px-4 py-2">
            <MapPin className="w-5 h-5 ml-2" style={{ color: '#940066' }} />
            <span>جميع الجامعات الحكومية</span>
          </div>
          
          <div className="flex items-center border rounded-lg px-4 py-2">
            <Users className="w-5 h-5 ml-2" style={{ color: '#940066' }} />
            <span>عدد المستفيدين: 150</span>
          </div>
        </div>
        
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
          <button className="p-2 border rounded-md">
            <Link2 className="w-5 h-5" />
          </button>
          <button className="p-2 border rounded-md">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 4s-2.9-.2-4.4.4c-1.1.4-2.1 1.2-2.7 2.1-.6.9-1.4 2.6-1.4 2.6L13 8 8 13l1 .5s-1.7.8-2.6 1.4c-.9.6-1.7 1.6-2.1 2.7-.6 1.5-.4 4.4-.4 4.4s2.9.2 4.4-.4c1.1-.4 2.1-1.2 2.7-2.1.6-.9 1.4-2.6 1.4-2.6l.5 1 5-5-.5-1s1.7-.8 2.6-1.4c.9-.6 1.7-1.6 2.1-2.7.6-1.5.4-4.4.4-4.4z"/>
            </svg>
          </button>
          <button className="p-2 border rounded-md">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 22l1.5-5.5C2.5 15 2 13.3 2 11.5 2 6.3 6.3 2 11.5 2S21 6.3 21 11.5 16.7 21 11.5 21c-1.8 0-3.5-.5-5-1.5L2 22z"/>
              <circle cx="11.5" cy="11.5" r="1"/>
              <circle cx="8" cy="11.5" r="1"/>
              <circle cx="15" cy="11.5" r="1"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Similar Opportunities */}
      <div className="max-w-6xl mx-auto px-4 mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#940066' }}>فرص مشابهة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Card */}
          <div className="border rounded-lg overflow-hidden bg-gray-50">
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
          </div>
          
          {/* Second Card */}
          <div className="border rounded-lg overflow-hidden bg-gray-50">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;