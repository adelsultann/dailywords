import React, { useState } from 'react';

const ContactPage = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://dailywords-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('تم إرسال الرسالة بنجاح!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setResponseMessage('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
      }
    } catch (error) {
      setResponseMessage('خطأ في الاتصال بالخادم.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 rtl">
      <h1 className="text-3xl font-bold text-center mb-8">اتصل بنا</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">الاسم</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">الرسالة</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
          </button>
          {responseMessage && (
            <p className="text-center text-gray-700 mt-4">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
