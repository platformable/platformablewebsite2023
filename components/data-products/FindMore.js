import styles from "@/styles/DataProducts.module.css";
import Link from "next/link";
import carouselStyles from '@/styles/Carousel.module.scss'

export default function FindMore({ images }) {
  const slices = [
    {
      title: 'Understand',
      subtitle: "LEARN HOW OPEN ECOSYSTEMS CAN CREATE A FUTURE WE ALL WANT TO LIVE IN",
      header_icon: '/understand_logo_platformable.svg',
      link: '/understand',
      image: images[0]?.attributes?.url
    },
    {
      title: 'Act',
      subtitle: "OUR RANGE OF PRODUCTS AND SERVICES CAN HELP YOU BUILD YOUR ORGANISATION INTO OPEN DIGITAL ECOSYSTEMS",
      header_icon: '/act_logo_platformable.svg',
      link: '/act',
      image: images[1]?.attributes.url
    },
    {
      title: 'Engage',
      subtitle: "TO ACTIVELY PARTICIPATE IN AN OPEN ECOSYSTEM, FOLLOW OUR RECOMMENDED RESOURCES AND TOOLS",
      header_icon: '/engage_logo_platformable.svg',
      link: '/engage',
      image: images[2]?.attributes.url
    },
  ]
  return (
    <section className={`py-10 container mx-auto overflow-y-hidden  bg-white overflow-x-hidden hidden lg:block`}>
      <div className={`relative h-screen flex flex-col justify-center`}>
    {slices?.map( (slice,index) => (
      <div className={`${carouselStyles.carousel__item} grid grid-cols-[3fr_1.5fr] px-24`} id={index+1} key={index}>
        <div className="flex flex-col gap-y-10 mb-10">
          <div className="flex gap-5 items-center">
            <img src={slice?.header_icon} alt="" />
            <h2 className="font-bold text-[var(--purple-medium)]">{slice?.title}</h2>
          </div>
          <p className="text-[var(--purple-medium)] pr-16 font-bold">{slice?.subtitle}</p>

          <Link href={slice.link}>
          <button className="rounded bg-[var(--yellow)] px-10 py-4 text-lg text-center font-bold lg:rounded-xl text-[var(--purple-medium)]">
            Find out more
          </button>
          </Link>
          
        </div>
        <img className={``} src={slice.image} alt="" />
    </div>
    ))}
    
   
  </div>
      {/* <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-white.svg"
            alt=""
            className="md:flex hidden"
          />
          <h2
            className={`text-white  font-bold md:leading-10 leading-8 `}
          >
            Find out more
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-5 md:px-0 px-5 gap-y-5">
          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Understand</h6>
            
            <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
              Read more about how Platformable builds data products and learn
              about our sustainability/scalability assessment model
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Act</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Choose from some of the tools we use and recommend when building data products
            </p>
          </div>

          <div className="find-more-cards bg-white rounded-xl shadow-md p-7">
            <h6 className="text-center text-[var(--blue)] font-medium">Engage</h6>
           <div className="flex justify-center my-10">
                <img src="https://dummyimage.com/200x200/000/fff" alt="" />
            </div>

            <p className="text-[var(--purple-medium)] leading-8">
            Contact us form/calendly booking widget
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
