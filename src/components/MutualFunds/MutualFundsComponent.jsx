import React from 'react';

// Define constants for repeated class strings
const containerClasses = "container mx-auto px-4 py-12";
const flexCenterClasses = "flex items-center";
const textColorClasses = "text-zinc-600 dark:text-zinc-300";

// Main component
const MutualFundsComponent = () => {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className={containerClasses}>
        <div className="flex flex-wrap -mx-4 items-center justify-between">
          <FeatureSection />
          <ImageSection />
        </div>
        <AdvantagesSection />
      </div>
    </div>
  );
};

// Feature section component
const FeatureSection = () => {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-4">Invest in Mutual Funds Online</h2>
        <p className={`${textColorClasses} mb-6`}>Mutual Funds are a smart way to grow your money. They can help you achieve your financial goals as they have the potential to generate higher-than-inflation returns.</p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition ease-in duration-200">Explore mutual funds</button>
      </div>
    </>
  );
};

// Image section component
const ImageSection = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <img className="rounded-lg shadow-xl" src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/mf-banner-mweb.webp" alt="Investment App Screenshot" />
    </div>
  );
};

// Advantages section component
const AdvantagesSection = () => {
  return (
    <div className="mt-12 bg-indigo-700 text-white py-4 px-6 rounded-lg flex flex-wrap items-center justify-between">
      <div className={`${flexCenterClasses} mb-4 lg:mb-0`}>
        <span className="hidden md:block mr-4">ET Money Advantages</span>
        <AdvantageItem title="Zero Commission" src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/zerocommission.svg" />
        <AdvantageItem title="Track your existing portfolio" src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/track.svg" />
        <AdvantageItem title="Detailed report card" src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/detailed-report.svg" />
      </div>
    </div>
  );
};

// Advantage item component
const AdvantageItem = ({ title, src }) => {
  return (
    <div className={`${flexCenterClasses} mr-4`}>
      <img className="h-6 w-6 mr-2" src={src} alt={title} />
      {title}
    </div>
  );
};

export default MutualFundsComponent;
