import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import { FaHandHoldingHeart, FaChartPie} from "react-icons/fa";
import axios from "axios";




const donations = [
    {
      id: 1,
      amount: "$25.00",
      form: "نموذج التبرع",
      date: "19 مارس 2021 12:27 م",
      status: "مكتمل",
    },
    {
      id: 2,
      amount: "$200.00",
      form: "نموذج التبرع",
      date: "1 يناير 2021 6:53 ص",
      status: "مكتمل",
    },
    {
      id: 3,
      amount: "$200.00",
      form: "نموذج التبرع",
      date: "1 يناير 2021 3:45 ص",
      status: "مكتمل",
    },
    {
      id: 4,
      amount: "$200.00",
      form: "نموذج التبرع",
      date: "1 يناير 2021 5:29 ص",
      status: "مكتمل",
    },
  ];











function DonateDashboard(donorId ) {

  const [donations, setDonations] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [averageDonation, setAverageDonation] = useState(0);
// ربط سيكشن  1+2
useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      // جلب قائمة التبرعات
      const donationsResponse = await axios.get(`http://localhost:4000/api/donations/${donorId}`);
      // جلب إجمالي التبرعات
      const totalResponse = await axios.get(`http://localhost:4000/api/donations/total/${donorId}`);
      // جلب متوسط التبرعات
      const averageResponse = await axios.get(`http://localhost:4000/api/donations/average/${donorId}`);

      setDonations(donationsResponse.data.userDonations);
      setTotalDonations(totalResponse.data.userTotalDonations);
      setAverageDonation(averageResponse.data.userAverageDonation);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  fetchDashboardData();
}, [donorId]);




// ربط سيكشن  1+2
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);


  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 3000); // عرض الرسالة لمدة 3 ثواني
    return () => clearTimeout(timer);
  }, []);


  const [showModal, setShowModal] = useState(false);



  
  return (
    <>
      <div className="flex min-h-screen bg-white-100  my-15">
        {/* Sidebar */}

        <aside
          className={`bg-[#940066] text-white w-25  my-16  h-160 md:w-56 p-6 fixed right-0 top-0   transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:block z-10`}
        >
          <h2 className="text-2xl font-bold mb-6 hidden md:block">
            لوحة التحكم
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
              <Link to="/my-donations" className="flex items-center space-x-2">
                <FaHandHoldingHeart size={20} />
                <span className="hidden md:inline">الإحصائيات</span>
              </Link>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
              <Link to="/statistics" className="flex items-center space-x-2">
                <FaChartPie size={20} />
                <span className="hidden md:inline">تبرعاتي </span>
              </Link>
            </li>
            {/* <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
                        <Link to="/donation-methods" className="flex items-center space-x-2">
                            <FaWallet size={20} />
                            <span className="hidden md:inline">طرق التبرع</span>
                        </Link>
                    </li> */}

            {/* <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
              <Link
                to="/donation-history"
                className="flex items-center space-x-2"
              >
                <FiBell size={20} />
                <span className="hidden md:inline">تاريخ التبرع</span>
              </Link>
            </li> */}
            <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
              <Link
                to="/recurring-donations"
                className="flex items-center space-x-2"
              >
                <FiBell size={20} />
                <span className="hidden md:inline">معلومات المتبرعين </span>
              </Link>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-[#7a004f] p-2 rounded-lg">
              <Link to="/edit-profile" className="flex items-center space-x-2">
                <FiUser size={20} />
                <span className="hidden md:inline">تعديل الملف الشخصي</span>
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6 md:mr-64">
          {/* Navbar */}
          <header className="bg-white shadow-md fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 md:px-6 z-50">
            <div className="flex space-x-4">
              <FiBell size={24} className="cursor-pointer" />
              <FiUser size={24} className="cursor-pointer" />
            </div>
            <h1 className="text-2xl font-bold">لوحة تحكم المتبرع</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              <FiMenu size={24} />
            </button>
          </header>

          {/* Welcome Message */}
          {showWelcome && (
            <div className="mb-6 p-4 bg-[#f0f8ff] border border-[#007acc] rounded-lg text-right">
              <h2 className="text-lg font-bold text-[#007acc]">
                مرحبًا بك في لوحة تحكم المتبرع!
              </h2>
              <p className="text-gray-700">
                نحن هنا لدعمك في رحلة التبرع الخاصة بك.
              </p>
            </div>
          )}

       {/* Statistics Section */}
       <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-right mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">عدد التبرعات</h2>
          <p className="text-2xl">{donations.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">إجمالي التبرعات</h2>
          <p className="text-2xl">${totalDonations}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">متوسط التبرع</h2>
          <p className="text-2xl">${averageDonation}</p>
        </div>
      </section>

      {/* Recent Donations Section */}
      <section className="bg-white p-4 rounded-lg shadow text-right mb-6">
        <h2 className="text-lg font-bold mb-4">التبرعات الأخيرة</h2>
        <table className="min-w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">المبلغ</th>
              <th className="border p-2">الطريقة</th>
              <th className="border p-2">التاريخ</th>
              <th className="border p-2">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index} className="border-b">
                <td className="border p-2">{donation.amount}</td>
                <td className="border p-2">{donation.method || "غير محدد"}</td>
                <td className="border p-2">{donation.donationDate ? new Date(donation.donationDate).toLocaleDateString() : "غير محدد"}</td>
                <td className="border p-2">{donation.status || "غير محدد"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>



          <div>
            {/* معلومات المتبرعين */}
            <section className="bg-white p-6 rounded-lg shadow text-right mb-6">
              <h2 className="text-2xl font-bold mb-4 text-[#940066]">
                معلومات المتبرعين
              </h2>

              <div className="mb-4">
                <p className="font-medium text-gray-700">
                  إجمالي التبرعات: 10,000$
                </p>
                <p className="font-medium text-gray-700">
                  عدد الطلاب الذين تم دعمهم: 50
                </p>
              </div>

              <div className="border border-gray-300 rounded-lg p-4 bg-white shadow">
                <p className="text-gray-600 mb-2">
                  أنت تلعب دورًا حيويًا في مساعدة الطلاب على تحقيق أحلامهم
                  الأكاديمية. شكرًا لتبرعاتك المستمرة!
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      آخر تبرع: <span className="font-bold">1 مارس 2023</span>
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      عدد التبرعات الإجمالي:{" "}
                      <span className="font-bold">5</span>
                    </p>
                  </div>
                  <button
                    className="bg-[#940066] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#7a0050]"
                    onClick={() => setShowModal(true)} // Open modal
                  >
                    عرض المزيد من التفاصيل
                  </button>
                </div>
              </div>
            </section>

            {/* Modal for More Details */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
                  <h3 className="text-xl font-bold text-[#940066] mb-4">
                    تفاصيل التبرعات
                  </h3>
                  <ul className="mb-4">
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>تبرع في 1 يناير 2023</span>
                      <span>100.00$</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>تبرع في 15 فبراير 2023</span>
                      <span>200.00$</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-300 py-2">
                      <span>تبرع في 1 مارس 2023</span>
                      <span>150.00$</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    إجمالي التبرعات: 450.00$ لدعم 15 طالبًا.
                  </p>

                  <button
                    className="bg-[#940066] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#7a0050]"
                    onClick={() => setShowModal(false)} // Close modal
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Information */}
          <section className="bg-white p-6 rounded-lg shadow text-right">
            <h2 className="text-2xl font-bold mb-4 text-[#940066]">
              معلومات الملف الشخصي
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                الاسم الأول
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الأول"
                className="border border-gray-300 rounded-md p-2 w-full focus:border-[#940066] focus:ring-1 focus:ring-[#940066]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                البريد الإلكتروني الأساسي
              </label>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="border border-gray-300 rounded-md p-2 w-full focus:border-[#940066] focus:ring-1 focus:ring-[#940066]"
              />
            </div>
            <div className="mb-4">
              <button className="bg-[#940066] text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-[#7a0050]">
                إضافة بريد إلكتروني
              </button>
            </div>
            <div className="mb-4 bg-white p-4 rounded-lg shadow">
              <p className="font-medium text-gray-700">
                يبدو أنك لم تقم بإعداد عنوان بعد!
              </p>
              <button className="bg-[#940066] text-white font-bold py-2 px-4 rounded mt-2 transition duration-300 hover:bg-[#7a0050]">
                إضافة عنوان
              </button>
            </div>
            <div className="mb-4 bg-white p-4 rounded-lg shadow">
              <p className="font-medium text-gray-700">التبرع بشكل مجهول</p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="public"
                  name="donation"
                  value="public"
                  className="mr-2 focus:ring-[#940066]"
                />
                <label
                  htmlFor="public"
                  className="text-gray-700 cursor-pointer"
                >
                  عام - يمكن للجميع رؤية المعلومات
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="private"
                  name="donation"
                  value="private"
                  className="mr-2 focus:ring-[#940066]"
                />
                <label
                  htmlFor="private"
                  className="text-gray-700 cursor-pointer"
                >
                  خاص - يمكن للمسؤولين فقط رؤية المعلومات
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DonateDashboard;
