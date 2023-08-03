import styles from "@/styles/Datasetspage.module.css";

const ProcessCards = ({data})=>{

  return data?.map((process,index)=>{
    return (
      
        <div className={`${process.is_subprocess ? 'bg-purple-light':styles['datasets-product-bg']} grid grid-cols-[0.5fr_3fr_1fr] rounded-lg p-7 items-center shadow`} key={index}>
         <div><img src={process.platformable_icon} alt="" /></div>
         <div className="text-white flex items-center ml-5"> {process.process}</div>
         <div className="flex justify-end slef-start"><img src={process.product_icon} alt="" /></div>
        </div>
   
        
    )
  })


}

export default function OurProcess({ data }) {


const OurProcessData=[
  {
    process:`
Design thinking:
  
User needs, Business Model Potential, Scalability assessment`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },

  {
    process:`Collect data`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },
  {
    process:`Data inventory, Data model design`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },
  {
    process:`Automate maintenance and DataOps processes`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },
  {
    process:`Data Governance process model`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png',
    is_subprocess:true
  },
  {
    process:`Build data model`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },
  {
    process:`Socialize data for internal use and or assist with data product Marketing`,
    platformable_icon:'/logo_icon_white.png',
    product_icon:'/logo_icon_white.png'
  },
]



  return (
    <section className={`py-10  ${styles["datasets-our-process-bg"]}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-5 items-center  mb-10">
          <img
            src="/platformable-icon-purple-dark.png"
            alt=""
            className="md:flex hidden"
          />
          <h3
            className={`text-[#3B27CE]  font-bold md:leading-10 leading-8 `}
          >
            Our Process
          </h3>
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 gap-5" >
          <img src="/our-process-diagram.png" alt="" />
          
          {/* <ProcessCards data={OurProcessData}/>  */}      
        </div>
      </div>
    </section>
  );
}
