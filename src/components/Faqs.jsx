const Faqs = () => {
  return (
    <div className="join join-vertical w-full p-10  h-[80vh] flex justify-center">
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        Q. Why should I choose CourseX?
        </div>
        <div className="collapse-content">
          <p>No compromises. With CourseX, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100 ">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
        Q. Who will be teaching me?
        </div>
        <div className="collapse-content">
          <p>Learn from the best teachers around the globe and build various specialized projects</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
        Q. How will CourseX help me grow as a developer?
        </div>
        <div className="collapse-content">
          <p>Learn, build, and ship — without the fear of missing out. Reach your inflection point and become a self-sufficient developer in just a few months.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
        Q. How can I get my doubts resolved quickly?
        </div>
        <div className="collapse-content">
          <p>Get it fixed by asking in the Discord community!</p>
        </div>
      </div> 
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
        Q. Are there hands-on assignments?
        </div>
        <div className="collapse-content">
          <p>Definitely. We craft assignments to ensure a hands-on learning experience.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border hover:bg-gray-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
        Q. What is the refund policy?</div>
        <div className="collapse-content">
          <p>We offer a 7-day no-questions-asked refund policy</p>
        </div>
      </div>
    </div>
  );
};
export default Faqs;
