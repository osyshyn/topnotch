import React from 'react';

export const SuccessStory = () => {
    return (
        <div className="bg-white w-full py-20 px-4 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] max-w-xl mb-8 lg:mb-0">
                        Achieve The Right<br />Success With Top Notch
                    </h2>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 border border-[#4F78D6] text-[#4F78D6] rounded-full font-semibold hover:bg-[#4F78D6] hover:text-white transition-colors">
                            Read More
                        </button>
                        <button className="px-6 py-3 bg-[#4F78D6] text-white rounded-full font-semibold hover:bg-[#4568B9] transition-colors flex items-center gap-2">
                            Contact Us
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {/* Here for You */}
    <div className="space-y-4 border-l border-[#252423] pl-6">
        <h3 className="text-xl font-semibold text-[#1C1C1C]">Here for You</h3>
        <p className="text-gray-600 leading-relaxed">
        Founded in 1999, we are, and will always be privately held and family-owned. Completely free from venture capital, private equity and outside interests, what’s best for our customers can truly be our first priority.
        </p>
    </div>

    {/* Professionals, not Geeks */}
    <div className="space-y-4 border-l border-[#252423] pl-6">
        <h3 className="text-xl font-semibold text-[#1C1C1C]">Professionals, not Geeks</h3>
        <p className="text-gray-600 leading-relaxed">
        Our in-house team of experienced and personable field engineers, consultants, office staff, and computer repair techs are qualified experts with the most up-to-date training available. We are always ready to assist, with a genuine passion for what we do.
        </p>
    </div>

    {/* Dependable Service Quality */}
    <div className="space-y-4 border-l border-[#252423] pl-6">
        <h3 className="text-xl font-semibold text-[#1C1C1C]">Dependable Service Quality</h3>
        <p className="text-gray-600 leading-relaxed">
        Ask around. We do a good job. Your satisfaction, return business, and referrals are priceless to us. We treat you how we would like to be treated and offer warranties on all of our work.
        </p>
    </div>

    {/* Here to Stay */}
    <div className="space-y-4 border-l border-[#252423] pl-6">
        <h3 className="text-xl font-semibold text-[#1C1C1C]">Here to Stay</h3>
        <p className="text-gray-600 leading-relaxed">
        Top Notch has weathered recessions, corporate smear campaigns, disease pandemics, and civil unrest standing tall. Partner with us, and rest assured we’ll be around to support your technology and stand behind our products for as long as you need us.
        </p>
    </div>
</div>

            </div>
        </div>
    );
};

export default SuccessStory;