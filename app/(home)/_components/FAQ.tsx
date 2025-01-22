import FAQuestions from "./FAQuestionaire";

const FAQ = () => {
  return (
    <div className="flex justify-start items-start flex-col w-full bg-black text-white lg:p-10 gap-y-4">
      <h1 className="lg:text-6xl text-4xl text-white font-semibold font-roobert mt-10">
        FAQs
      </h1>
      <FAQuestions />
    </div>
  );
};

export default FAQ;
