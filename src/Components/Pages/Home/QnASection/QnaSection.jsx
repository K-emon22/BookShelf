import React from "react";
import { Fade } from "react-awesome-reveal";
const QnaSection = () => {
  const qna = [
  {
    id: 1,
    question: "1. How can I add a new book to the collection?",
    answer:
      "To add a new book, go to the 'Add Book' section, fill out the form with details like title, author, category, and cover photo etc, then click the 'Submit' button.",
  },
  {
    id: 2,
    question: "2. What are the main genres of books?",
    answer:
      "The main genres include fiction, non-fiction, mystery, fantasy, science fiction, romance, and biography.",
  },
  {
    id: 3,
    question: "3. Why do people read fiction books?",
    answer:
      "Fiction books offer entertainment, imagination, and emotional connection through storytelling.",
  },
  {
    id: 4,
    question: "4. What defines a classic book?",
    answer:
      "A classic book is one that has stood the test of time and is recognized for its literary significance and timeless themes.",
  },
  {
    id: 5,
    question: "5. How do non-fiction books help readers?",
    answer:
      "Non-fiction books provide factual information, real-life stories, and knowledge on various topics like history, science, and self-help.",
  },
  {
    id: 6,
    question: "6. What makes fantasy books special?",
    answer:
      "Fantasy books transport readers to imaginary worlds filled with magic, mythical creatures, and epic adventures.",
  },
];
  return (
    <div className="px-[2%] lg:px-[5%] mb-10">
      <Fade direction="up" cascade duration={800} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          QnA section
        </h1>
      </Fade>

      {qna.map((singleQna) => (
        <div key={singleQna.id} className="mb-5">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              {singleQna.question}
            </div>
            <div className="collapse-content text-sm">{singleQna.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QnaSection;
