import React, { useEffect, useRef } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterMap = () => {
    const { ref, inView } = useInView({
        // triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div class="ngt_container">
            <div class="ngt_row">
                <div class="ngt_col-lg-4 ngt_counter_sec">
                    <div ref={ref} className="counter_wrapper w-full flex justify-between flex-column px-2 md:px-4 lg:px-6 xl:px-24">
                        <div className="w-[calc(25% - 8px)]  text-center counter_item">
                            <p className="text-[#FF6F61E5] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
                                {inView && <CountUp end={40} duration={5} />}
                                <span className="text-[#FF6F61E5] counter_sign">+</span>
                            </p>
                            <p className="text-[#000000] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[22px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Active Clients</p>
                        </div>
                        <div className="w-[calc(25% - 8px)] text-[#222222]  text-center counter_item project_done">
                            <p className="text-[#FF6F61E5] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
                                {inView && <CountUp end={270} duration={5} />}
                                <span className="text-[#FF6F61E5] counter_sign">+</span>
                            </p>
                            <p className="text-[#000000] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[22px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Projects Done</p>
                        </div>
                        <div className="w-[calc(25% - 8px)] text-[#222222]  text-center counter_item">
                            <p className="text-[#FF6F61E5] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
                                {inView && <CountUp end={270} duration={5} />}
                                <span className="text-[#FF6F61E5] counter_sign">+</span>
                            </p>
                            <p className="text-[#000000] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[22px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Team Advisers</p>
                        </div>
                        <div className="w-[calc(25% - 8px)] text-[#222222]  text-center counter_item">
                            <p className="text-[#FF6F61E5] lg:text-[44px] md:text-[46px] xl:text-[64px] font-[700] leading-[27px] lg:leading-[87px]">
                                {inView && <CountUp end={60} duration={5} />}
                                <span className="text-[#FF6F61E5] counter_sign">+</span>
                            </p>
                            <p className="text-[#000000] text-[8px] md:text-[18px] lg:text-[26px] xl:text-[22px]  leading-[10px] md:leading-[50px] lg:leading-[38px]">Glorious Years</p>
                        </div>
                    </div>
                </div>
                <div class="ngt_col-lg-8 ngt_counter_map_sec">
                    <img src="/Contact/counter-map.jpg" />
                </div>
            </div>
        </div>
    );
};

export default CounterMap;
