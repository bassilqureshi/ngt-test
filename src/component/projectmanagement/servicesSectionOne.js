import React, { useEffect, useRef } from "react";

const ServicesSectionOne = () => {
    return (
        <section class="ngt_pm_services">
            <div class="ngt_container">
                <div class="ngt_row">
                    <div class="ngt_col-lg-4"></div>
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box">
                            <img src="/ProjectManagement/1.png" />
                            <div className="service_content">
                                <h3>Strategic Project Planning</h3>
                                <p>Effective project management starts with thorough planning. We work closely with your team to define project objectives, scope, timelines, and deliverables. Our strategic approach ensures that all aspects of the project are aligned with your business goals, setting a solid foundation for success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ngt_row">
                    <div class="ngt_col-lg-8">
                        <div className="pm_service_box mb-0">
                            <img src="/ProjectManagement/2.png" />
                            <div className="service_content">
                                <h3>Seamless Project Execution</h3>
                                <p>Our project managers excel at orchestrating all phases of project execution. By leveraging methodologies such as Agile, Scrum, and Waterfall, we adapt our processes to fit the unique needs of each project. We coordinate resources, manage tasks, and ensure that every aspect of the project is on track, maintaining momentum towards successful completion.</p>
                            </div>
                        </div>
                    </div>
                    <div class="ngt_col-lg-4"></div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionOne;
