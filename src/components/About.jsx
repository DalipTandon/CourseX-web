
import pic4 from "../../img/demo4.webp"
const About=()=>{
    return(
        <>
         <div className=" h-10 mt-10 ">
            <h1 className="flex justify-center font-serif text-4xl">About us</h1>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl h-[30vw] p-10  ">
            <div className=" w-full object-contain  ">
            <figure>
          <img
            src={pic4}
            alt="Album" />
        </figure>
            </div>
        <div className="card-body   ">
          <p className="w-3/4 m-auto font-serif font-bold ">Welcome to CourseX, your one-stop destination for top-quality online courses. Whether you’re looking to upgrade your skills, explore new subjects, or enhance your career prospects, we have something for everyone. Our mission is simple: to provide accessible, engaging, and expertly curated educational content that empowers learners worldwide.

At CourseX, we collaborate with industry professionals and renowned instructors to bring you a wide variety of courses in tech, business, design, marketing, and more. Our platform is designed to make learning easy, flexible, and enjoyable — giving you the tools you need to succeed at your own pace.</p>
        </div>
      </div>
      </>
    )
}

export default About;