import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';
// Components
import Circles from '../../components/Circles'
// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'
// Icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const [ip, setIP] = useState('');
  //creating function to load ip address from the API
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])

  const [score, setScore] = useState('Submit');

  const router = useRouter();
  const currentRoute = router.pathname;
  const [pagenewurl, setPagenewurl] = useState('');
  useEffect(() => {
    const pagenewurl = window.location.href;
    console.log(pagenewurl);
    setPagenewurl(pagenewurl);
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault()
    var currentdate = new Date().toLocaleString() + ''

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      pageUrl: pagenewurl,
      IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore('Sending Data');
    console.log(JSONdata);


    fetch('api/email/route', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`)
      if (res.status === 200) {
        console.log(`Response Successed ${res}`)
      }
    })

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      "Brand": "PortFolio",
      "Page": `${currentRoute}`,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,

    });

    await fetch("https://sheetdb.io/api/v1/yscn00ileemoq", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    const { pathname } = router;
    if (pathname == pathname) {
      window.location.href = '/thank-you';
    }
  }

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
              onSubmit={handleSubmit}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-1 flex-col gap-4 md:gap-6 w-full mx-auto'>
              {/* Input Group */}
              <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-6 w-full'>
                <input type='text' name='name' placeholder='Name' required className='input' />
                <input type='email' name='email' placeholder='Email' required className='input' />
              </div>
              <input type='tel' name='phone' placeholder='Number' maxLength={15} minLength={7} required className='input' />
              <textarea name='message' placeholder='Message' required className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>{score}</span>
                <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <Circles />
    </>
  )
};

export default Contact;
