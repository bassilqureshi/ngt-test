import React from 'react'
import ImageGrid from './imagegrid';
import Scroll from "../../scroll.json";
import Lottie from "lottie-react";

const images = [
    { src: '/Homepage/Services/Enterprise Infrastructure Blue.png', hoverSrc: '/Homepage/Services/Enterprise Infrastructure White.png', text: 'Enterprise Infrastructure Services', desc: 'At NGTSOL, we understand the critical role that technology plays in the success of your business. Our Enterprise Infrastructure Services provide comprehensive solutions to streamline your IT operations, enhance security, and optimize performance, allowing you to focus on your core business objectives.', url: '/enterprise-infrastructure-services' },
    { src: '/Homepage/Services/Enterprise Platform Blue.png', hoverSrc: '/Homepage/Services/Enterprise Platform White.png', text: 'Enterprise Platform Services', desc: 'We offer comprehensive Enterprise Platform Services designed to streamline and enhance your business operations. Our solutions provide a solid foundation to support your enterprise’s critical applications, ensuring scalability, flexibility, and seamless integration across systems.', url: '/enterprise-platform-services' },

    { src: '/Homepage/Services/Information Security Blue.png', hoverSrc: '/Homepage/Services/Information Security White.png', text: 'Information Security', desc: 'Implement a robust security architecture that seamlessly integrates across networks, cloud platforms, endpoints, and email systems, ensuring the protection of sensitive data at all times.', url: '/information-security' },
    { src: '/Homepage/Services/Enterprise Planning Blue.png', hoverSrc: '/Homepage/Services/Enterprise Planning White.png', text: 'Enterprise Planning', desc: 'We offer implementation services for Enterprise Planning and Performance Management Platform (Anaplan), a cutting-edge solution designed to revolutionize the way your organization plans and manages its operations.', url: '/enterprise-planning' },
    { src: '/Homepage/Services/Office Blue.png', hoverSrc: '/Homepage/Services/Office White.png', text: 'Office in a Box', desc: 'Streamline your office environment with our Office in a Box solution, providing all the necessary technology and materials in one comprehensive package. This turn key service includes everything from computers and printers to malware protection and various essential resources.', url: '/office-in-a-box' },
    { src: '/Homepage/Services/Project Management Blue.png', hoverSrc: '/Homepage/Services/Project Management White.png', text: 'Project Management', desc: 'At NGTSOL, we offer comprehensive Project Management Services designed to help your organization achieve its strategic goals with efficiency and precision. Our expert project managers bring extensive experience and industry best practices to ensure the successful delivery of projects, regardless of size or complexity. ', url: '/project-management' },

    { src: '/Homepage/Services/Staff Augmentation Blue.png', hoverSrc: '/Homepage/Services/Staff Augmentation White.png', text: 'Staff Augmentation', desc: 'we understand that finding the right talent for your IT projects can be challenging and time-consuming. Our Staff Augmentation services are designed to seamlessly integrate highly skilled professionals into your existing team, ensuring that you have the essential expertise, exactly when you need it.', url: '/staff-augmentation' },
    { src: '/Homepage/Services/Technology Blue.png', hoverSrc: '/Homepage/Services/Technology White.png', text: 'Technology Procurement', desc: 'Our Technology Procurement & Licensing services at NGTSOL are meticulously crafted to empower your business with cutting-edge technology solutions while optimizing costs and ensuring stringent compliance.Y', url: '/technology-procurement' },


];
const servicespage = () => {
    return (
        <>
            {/* <div className=' lg:mt-[27%] 2xl:mt-[24%] w-full absolute flex justify-end'>
                <div className="hidden lg:block w-[25px] mr-4">
                    <div className="-rotate-90">
                        <span className="text-[17px] text-[#006cfc] p-1">
                            Scroll
                        </span>
                        <span className="text-[17px] text-[#006cfc] p-1">
                            For
                        </span>
                        <span className="text-[17px] text-[#006cfc]  p-1">
                            More
                        </span>
                        <span className="text-[17px] text-[#006cfc] p-1">
                            Services
                        </span>
                    </div>
                    <div className="w-full justify-center flex items-center mt-3">
                        <Lottie animationData={Scroll} loop={true} />
                    </div>
                </div>
            </div> */}
            <div className=" mb-[30px] lg:pt-[20vh] 2xl:pt-[20vh]">
                <ImageGrid images={images} />
            </div>
        </>

    )
}

export default servicespage