import React from 'react';
import Navbar from '../component/NavBar';
import { useEffect, useMemo, useState } from "react";
import line from '../assets/images/line.png';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import phone from '../assets/images/phone.png';
import phone2 from '../assets/images/phone2.png';
import fincra from '../assets/images/fincra.png';
import kuda from '../assets/images/Kuda.png';
import verifi from '../assets/images/verifi.png';
import verve from '../assets/images/verve.png';
import wema from '../assets/images/wema.png';
import scores from '../assets/images/scores.png';
import Laura from '../assets/images/laura.png';
import strike from '../assets/images/strike.png';
import dollar from '../assets/images/dollar.png';
import apple from '../assets/images/apple.png';
import google from '../assets/images/google.png';
import { Users, faqsData } from '../utilities/data';
import HomeCards from '../component/homeCards';
import Faq from '../component/Faq'
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';


// import HomeCards from '../component/homeCards';



const Home = () => {
    const faqsItem = useMemo(() => faqsData, []);
    const [faqs, setFaqs] = useState(faqsData);

    const handleFaqClick = (id) => {
        const updatedFaqs = faqs.map((item, i) => {
            // console.log(id);
            if (item.id === id) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
            return item;
        });
        setFaqs(updatedFaqs);
    };

    useEffect(() => {
        // console.log(faqs);
    }, [faqs]);


    return (
        <div className="p-0 m-0 overflow-x-hidden text-[#242424]">
            <Navbar />
            <section id='Home' className='mt-24 md:flex md:justify-between  text-center md:text-start lg:px-52 px-10   '>
                <div className='md:w-[50%] my-auto'>
                    <h1 className='text-[50px] font-semibold'>Spend with confidence</h1>
                    <img src={line} alt="" />
                    <p className='w-[90%] my-10 font-medium'>Spend anytime, anywhere with Spendit. Now you can get the money you need  without waiting until your paycheck. Spendit lets you spend before pay day saving you time, money and stress.</p>
                    <button className='flex gap-5flex border py-2 px-7 gap-3 rounded-full text-white bg-[#54BD95] hover:bg-white hover:text-[#54BD95] transition transform duration-500 m-auto md:m-0'>
                        <PiDownloadSimpleBold className='m-auto ' />
                        <p>Get started -It's free</p>
                    </button>
                </div>
                <div className='my-auto '>
                    <img src={phone} alt="" className='mx-auto md:mx-0 ' />
                </div>
            </section>
            <section className='bg-[#EDF0F5]  lg:px-52 p-10   '>
                <div id='partner' className='overflow-x-scroll flex justify-between gap-10'>

                    <img className='w-16 h-14' src={wema} alt="" />
                    <img className='w-24 h-10' src={kuda} alt="" />
                    <img className='w-24 h-10' src={verifi} alt="" />
                    <img className='w-24 h-10' src={fincra} alt="" />
                    <img className='w-24 h-10' src={verve} alt="" />

                </div>

            </section>
            <section className='text-center py-20  lg:px-52 px-5 '>
                <h4 className='font-normal text-[30px]'>
                    The <span className='text-[#54BD95] my-20'>One Card</span> you can trust anytime
                </h4>
                <div className='grid md:grid-cols-2 justify-between my-20'>
                    <img src={phone} alt="" className='mx-auto md:mx-0' />
                    <div className='md:my-auto md:w-[100%] text-center my-10 md:text-start '>
                        <h4 className='text-[30px] font-medium'>Access to credit</h4>
                        <p className='font-medium'>Our credit card product provides you with access to credit, so you can make purchases and pay them back over time. This can be especially useful for larger purchases, such as a laptop or furniture.</p>
                        <p className='text-[#54BD95] flex gap-3 my-10 cursor-pointer'>Learn More <span className='my-auto'><BsArrowRight /> </span></p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 justify-between my-20'>
                    <div className='md:my-auto md:w-[100%] text-center my-10 md:text-start'>
                        <h4 className='text-[30px] font-medium'>Earn cashback as you spend</h4>
                        <p className='font-medium'>With Spendit, you can earn cashbacks on every purchase you make with your credit card. The more you spend, the more cashback you earn!</p>
                        <p className='text-[#54BD95] flex gap-3 my-10 cursor-pointer'>Learn More <span className='my-auto'><BsArrowRight /> </span></p>
                    </div>

                    <div className='flex justify-end mx-auto'>

                        <img src={phone} alt="" className='' />
                    </div>

                </div>
                <div className='grid md:grid-cols-2 justify-between my-20'>
                    <img src={phone2} alt="" className='mx-auto md:mx-0' />
                    <div className='md:my-auto md:w-[100%] text-center my-10 md:text-start'>
                        <h4 className='text-[30px] font-medium'>Auto save feature</h4>
                        <p className='font-medium'> Our auto save feature helps you cultivate a savings habit by automatically saving a percentage of your purchases. This means that you can save without even thinking about it, and watch your savings grow over time. You can easily monitor your spending and stay within your budget. This can help you avoid overspending and stay on top of your finances.</p>
                        <p className='text-[#54BD95] flex gap-3 my-10 cursor-pointer'>Learn More <span className='my-auto'><BsArrowRight /> </span></p>
                    </div>
                </div>
            </section>
            <section className='grid lg:grid-cols-2'>
                <div className='bg-[#232341] px-10  md:px-52 py-16 '>

                    <div className='text-white m-auto grid  justify-center lg:justify-start '>

                        <h2 className='font-normal text-[30px]'>Perks of using us?</h2>

                        <div className='flex gap-5 my-5'>
                            <IoIosCheckmarkCircleOutline className='text-white my-auto' />
                            <p>Improved credit history</p>
                        </div>
                        <div className='flex gap-5 my-5'>
                            <IoIosCheckmarkCircleOutline className='text-white my-auto' />
                            <p>Better Financial Management</p>
                        </div>
                        <div className='flex gap-5 my-5'>
                            <IoIosCheckmarkCircleOutline className='text-white my-auto' />
                            <p>Earn Cashback</p>
                        </div>
                        <div className='flex gap-5 my-5'>
                            <IoIosCheckmarkCircleOutline className='text-white my-auto' />
                            <p>Save while Spending</p>
                        </div>

                        <p className='text-white flex gap-3  cursor-pointer '>Learn More <span className='my-auto'><BsArrowRight /> </span></p>
                    </div>

                </div>
                <div className='bg-[#54BD95] py-16 px-10 items-center'>
                    <div className='md:relative'>
                        <div className='bg-[#E78C9D] w-fit p-2 rounded-lg text-center border-b-8 border-r-8 border-black absolute right-5 md:right-32 md:top-16'>
                            <p className='bg-[#FFFFFFB2] w-fit rounded-full py-1 px-2 mx-auto mb-3'>CS</p>
                            <p className='text-white'>Credit Score</p>
                            <p className='text-white'>800</p>
                        </div>
                        <img className='md:w-[50%] m-auto' src={scores} alt="" />

                        <div className='bg-white w-fit flex py-2 px-7 gap-16 text-center rounded-md border-b-8 border-r-8 border-black md:absolute bottom-0 left-28'>
                            <div className='flex gap-5 text-start'>

                                <span className='m-auto font-semibold cursor-pointer'>
                                    <PiDownloadSimpleBold />
                                </span>
                                <div className=''>
                                    <p className='font-bold '>Account</p>
                                    <p >Credit Limit</p>
                                </div>
                            </div>

                            <p className='font-bold m-auto'>$40.00</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className='text-center py-10 px-5  lg:px-52 w-full'>
                <div className='text-[30px]'>Still on the fence, here’s what
                    <span className='text-[#8AF1BB]'> our users</span> are saying</div>

                <div className=' my-16 w-full flex gap-10 overflow-x-scroll'>
                    {Users.map((card) => (
                        <HomeCards
                            key={card.id}
                            data={card}
                        />
                    ))}
                </div>
            </section>
            <section className='text-center py-20  lg:px-52 px-5'>
                <h4 className='font-medium text-[#54BD95]'>FAQ'S</h4>
                <h1 className='font-bold text-[35px]'>Got questions?</h1>
                <p className='text-center'>Get the answers to your questions about Spendit.</p>

                <div className=' lg:w-[70%]  mx-auto'>
                    {faqs.map((data, index) => (
                        <Faq
                            key={data.id}
                            faq={data}
                            id={data.id}
                            handleFaqClick={handleFaqClick}
                        />
                    ))}

                </div>
            </section>
            <section className='text-center py-20  lg:px-52 px-5'>
                <div className='bg-[#232341] py-20 rounded-md px-5 '>
                    <div className='pb-5 flex justify-around text-white'>
                        <img src={strike} alt="" className='w-[60px] h-[60px] my-auto' />
                        <p className=' text-[20px] md:text-[40px]'>Spend Anywhere, Anytime</p>
                        <img src={dollar} alt="" className='w-[60px] h-[60px] my-auto' />
                    </div>
                    <div className='text-white  md:flex justify-center gap-10'>
                        <div className='flex gap-5 border border-white/50 py-1  rounded-md bg-black cursor-pointer px-5'>
                            <img src={apple} alt="" className='w-[30px] h-[30px] my-auto' />
                            <div className='text-start'>
                                <p className='text-[12px]'>Download on the</p>
                                <h2 className='font-medium text-[20px]'>Apple Store</h2>
                            </div>
                        </div>
                        <div className='flex gap-5 border border-white/50 py-1  rounded-md bg-black cursor-pointer px-5 mt-5 md:mt-0'>
                            <img src={google} alt="" className='w-[30px] h-[30px] my-auto' />
                            <div className='text-start'>
                                <p className='text-[12px]'>Get it on</p>
                                <h2 className='font-medium text-[20px]'>Google Play</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='text-center py-5  md:px-52 px-5 text-slate-700 font-medium bg-[#F9F9F9] items-center'>
                <div className='grid lg:grid-cols-2 justify-between gap-20'>
                    <div className='flex  gap-10 md:text-start  font-medium'>
                        <div className='text-start'>
                            <h4 className='font-semibold text-[20px] mb-2 text-[#54BD95]'>Spendit</h4>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Blog</p>
                        </div>
                        <div className='text-start'>
                            <h4 className='font-semibold text-[20px] mb-2 text-[#54BD95]'>Product</h4>
                            <p>Credit card</p>
                            <p>Credit Score</p>
                            <p>Financial Budgeting</p>
                        </div>
                        <div className='text-start'>
                            <h4 className='font-semibold text-[20px] mb-2 text-[#54BD95]'>Legal</h4>
                            <p>Terms & Condition</p>
                            <p>Privacy Policy</p>

                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h3 className='md:text-start font-semibold text-[20px] '>Sign up for our newsletter</h3>
                        <form action="" className='py-2 px-7 pr-2 w-full bg-white flex rounded-full justify-between my-2'>
                            <input type="text" placeholder='Enter Email' className='w-full outline-none px-2' />
                            <button className='bg-[#54BD95] hover:bg-[#74bfa2] text-white  text-end py-2 px-5 rounded-full'>Subscription</button>
                        </form>
                    </div>
                </div>

                <div className='my-20 grid lg:grid-cols-2 '>
                    <div className='flex gap-10 text-[#54BD95] text-[25px]'>
                        <span className=' bg-white p-2 rounded-full'>
                            <FaInstagram />
                        </span>
                        <span className=' bg-white p-2 rounded-full'>
                            <FaTwitter />
                        </span>
                        <span className=' bg-white p-2 rounded-full'>
                            <FaTiktok />
                        </span>
                        <span className=' bg-white p-2 rounded-full'><FaYoutube /></span>
                    </div>

                    <div className='mt-10 lg:mt-0'>

                        <p className='font-bold text-end'>© 2023, Spendit All Rights Reserved.</p>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home