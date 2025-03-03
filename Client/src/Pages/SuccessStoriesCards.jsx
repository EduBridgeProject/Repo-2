import React, { useState, useEffect } from 'react';

const SuccessStoriesCards = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from your API endpoint that connects to PostgreSQL
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        // Updated to use port 4000 instead of 5000
        const response = await fetch('http://localhost:4000/api/success-stories');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch success stories: ${response.status} ${response.statusText}`);
        }
        
        // Handle potential JSON parsing errors
        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError);
          const text = await response.text();
          console.error('Received non-JSON response:', text.substring(0, 500) + '...');
          throw new Error('Received non-JSON response from server');
        }
        
        // Ensure data is an array
        if (!Array.isArray(data)) {
          console.error('Received non-array data:', data);
          data = [];
        }
        
        setStories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // For debugging, display sample data when there's an error
  const useSampleData = () => {
    const sampleStories = [
      {
        id: 1,
        studentName: "رقية",
        university: "جامعة الحسين بن طلال",
        story: "قصة النجاح في المثابرة والإصرار على تحطيم الصعوبات وتجاوز العقبات والتركيز على..."
      },
      {
        id: 2,
        studentName: "مجد",
        university: "جامعة اليرموك",
        story: "أتذكر عندما كنت في عمر السادسة عندما طلبت مني المعلمة أن أكتب ما السبورة ماذا أريد أن أصبح في المستقبل..."
      }
    ];
    setStories(sampleStories);
    setLoading(false);
    setError(null);
  };

  if (loading) {
    return <div className="text-center py-8">جاري تحميل قصص النجاح...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 mb-4">حدث خطأ: {error}</div>
        <button 
          onClick={useSampleData}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          عرض بيانات تجريبية
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 rtl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">قصص النجاح</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="bg-gray-50 rounded-lg p-8 flex flex-row-reverse items-start"
          >
            <div className="w-2/5 flex justify-center">
              <div className="rounded-full bg-purple-200 w-40 h-40 overflow-hidden flex items-center justify-center">
                <img 
                  src={story.imageUrl || "/api/placeholder/400/400"} 
                  alt={story.studentName} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/400";
                  }}
                />
              </div>
            </div>
            
            <div className="w-3/5 text-right pr-4">
              <div className="mb-1 text-gray-600">{story.university}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#940066' }}>{story.studentName}</h3>
              <p className="text-gray-800 mb-4 leading-relaxed">
                {story.story}
              </p>
              <button 
                className="inline-block px-4 py-2 rounded text-white text-sm font-bold"
                style={{ backgroundColor: '#940066' }}
              >
                <span className="ml-1">شارك</span> ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesCards;