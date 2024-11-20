import React, { useState } from 'react';
import image1 from "./assets/app-store.png";
import image2 from "./assets/google-play.png";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ContactPage from './Pages/contactForm'; // Import the ContactPage component

const NavBar = ({ setCurrentPage }) => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
            مفرداتي اليومية
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4 rtl:space-x-reverse">
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-emerald-600 px-3 py-2">الرئيسية</button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-emerald-600 px-3 py-2">اتصل بنا</button>
            <button onClick={() => setCurrentPage('privacy')} className="text-gray-700 hover:text-emerald-600 px-3 py-2">سياسة الخصوصية</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="rtl">
    <div className="bg-emerald-600 text-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">مفرداتي اليومية</h1>
          <p className="text-xl mb-8">سواء كنت بمستوى مبتدىء أو متقدم في اللغة الانجليزية تطبيقنا يجمع لك المتعة والفائدة على شكل تحدي يومي يمكنك عن طريقه تعلم المهارات الاساسية في اللغة (الاستماع، القراءة ، التحدث).</p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button className="text-emerald-600 px-4 py-1 rounded-lg flex items-center">
  <a href="https://apps.apple.com/us/app/%D9%85%D9%81%D8%B1%D8%AF%D8%A7%D8%AA%D9%8A-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9/id6737282822" target="_blank" rel="noopener noreferrer">
    <img src={image1} alt='app-store' width="200" height="30" />
  </a>  
</button>

<button className="text-emerald-600 px-4 py-1 rounded-lg flex items-center">
  <a href="https://play.google.com/store/apps/details?id=live.mydailywords.app" target="_blank" rel="noopener noreferrer">
    <img src={image2} alt='app-store' width="200" height="30" />
  </a>  
</button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">تحدي يومي</h3>
            <p className="text-gray-600">تعلم أربع كلمات جديدة كل يوم مع تمارين تفاعلية</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">🎧</div>
            <h3 className="text-xl font-semibold mb-2">تحسين النطق</h3>
            <p className="text-gray-600">تدرب على النطق الصحيح مع التقييم الفوري</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">تعلم في أي وقت</h3>
            <p className="text-gray-600">استخدم التطبيق في أي وقت وأي مكان</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div>
    <PrivacyPolicy />
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage />; // Render ContactPage component for 'contact' case
      case 'privacy':
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
