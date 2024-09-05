import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// Components
import Circles from '../../components/Circles'
// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'
// Icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  //========== Form
  const [ip, setIP] = useState('');
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('Submit');
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  //========== Fetch IP data from the API
  const getIPData = async () => {
    try {
      const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIP(data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  useEffect(() => {
    getIPData();
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formValidateHandle = () => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required";
    }
    const phoneRegex = /^[0-9]+$/;
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required";
    }
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Processing...");
    setIsDisabled(true);

    const errors = formValidateHandle();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString();
      const dataToSend = {
        ...data,
        IP: `${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      };
      const JSONdata = JSON.stringify(dataToSend);

      try {
        //========== First API call to your server
        await fetch('/api/email/route', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSONdata
        });

        //========== Second API call to SheetDB
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
          "IP": `${ip.country} - ${ip.city}`,
          "Brand": "Portfolio",
          "Page": `${currentRoute}`,
          "Date & Time": currentdate,
          "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/yscn00ileemoq", {
          method: "POST",
          body: bodyContent,
          headers: headersList
        });

        setFormStatus("Success...");
        // setTimeout(() => {
        //   window.location.href = '/thank-you';
        // }, 2000);
      } catch (error) {
        console.error('Error during form submission:', error);
        setFormStatus("Failed...");
        setIsDisabled(false);
      }
    } else {
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };

  return (
    <>
      <div className='h-full bg-primary/60 contact'>
        <div className='container mx-auto text-center xl:text-left flex items-center justify-center h-full overflow-x-hidden'>
          {/* Text & Form */}
          <div className='flex flex-col w-full max-w-[700px]'>
            {/* Text */}
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[30px] font-bold md:h2 text-center mb-4 md:mb-12'
            >
              Let's
              <span className='text-accent'> Connect.</span>
            </motion.h2>
            {/* Form */}
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-1 flex-col gap-4 md:gap-6 w-full mx-auto'>
              {/* Input Group */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative w-full">
                  <input type="text" id="name" name="name" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-2 rounded-xl focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Full Name" onChange={handleDataChange} />
                  {errors.name && (
                    <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="relative w-full">
                  <input type="email" id="email" name="email" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-2 rounded-xl focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Email Address" onChange={handleDataChange} />
                  {errors.email && (
                    <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="relative w-full">
                <input type="tel" id="phone" name="phone" minLength="10" maxLength="13" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-2 rounded-xl focus:outline-none focus:border-primary-100 bg-transparent" placeholder="Phone Number" onChange={handleDataChange} />
                {errors.phone && (
                  <span className="text-[12px] block p-2 font-sans font-medium text-primary-100 absolute left-0 bottom-[-58%]">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <textarea id="message" name="message" rows="5" className="block p-3 w-full font-sans tracking-wide text-sm text-white border-2 rounded-xl focus:outline-none focus:border-primary-100 bg-transparent resize-none" placeholder="Comment" onChange={handleDataChange} />
              </div>
              <div className="w-max flex gap-2 bg-white p-1 rounded-[15px]">
                <button type="submit" className="bg-black text-white border-0 h-[40px] lg:h-[50px] px-3 2xl:px-6 rounded-[15px] flex items-center gap-x-2 focus:outline-none" onClick={handleFormSubmit} disabled={isDisabled}>
                  <span className='text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] font-normal font-sans tracking-wide'>{formStatus}</span>
                  <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
      <Circles />
    </>
  )
};

export default Contact;
