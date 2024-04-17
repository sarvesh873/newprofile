import React from 'react';

// Shared TailwindCSS class strings
const containerClasses = 'flex justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900';
const boxClasses = 'bg-white dark:bg-zinc-800 p-6 max-w-3xl w-full';
const headerClasses = 'text-2xl font-semibold mb-6 text-zinc-800 dark:text-white';
const summaryClasses = 'flex justify-between items-center p-4 cursor-pointer bg-zinc-50 dark:bg-zinc-700 rounded-lg';
const questionClasses = 'text-lg font-semibold text-zinc-800 dark:text-zinc-200';
const answerClasses = 'px-4 pb-4 text-zinc-600 dark:text-zinc-400';

const faqs = [
  {
    question: 'What is a Mutual Fund & How Does it work?',
    answer: 'Content for the first question goes here...',
  },
  {
    question: 'How to choose a good mutual fund investment?',
    answer: 'Content for the second question goes here...',
  },
  {
    question: 'How are mutual funds withdrawals taxed?',
    answer: 'Content for the third question goes here...',
  },
  {
    question: 'How can I invest in mutual funds on ET Money?',
    answer: 'Content for the fourth question goes here...',
  },
];

const FaqItem = ({ question, answer }) => (
  <details className="group">
    <summary className={summaryClasses}>
      <h3 className={questionClasses}>{question}</h3>
      <span className="text-green-500 group-open:hidden">+</span>
      <span className="text-green-500 hidden group-open:inline">−</span>
    </summary>
    <p className={answerClasses}>{answer}</p>
  </details>
);

const FaqSection = () => {
  return (
    <div className={containerClasses}>
      <div className={boxClasses}>
        <h2 className={headerClasses}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;