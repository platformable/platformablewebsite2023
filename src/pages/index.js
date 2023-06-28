import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import "@/styles/Homepage.module.css";
import SupportOpenEcosystems from "../../components/homepage/SupportOpenEcosystems";
import Explore from "../../components/homepage/Explore";

const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {

  console.log("data",data)
  return (
    <Layout>
      <div className="container mx-auto">
        <h3>platformable</h3>
        <button className="bg-blue-500 rounded-md p-5 text-white shadow-md ml-10">
          platformable
        </button>
        <SupportOpenEcosystems />
        <Explore />
      </div>
    </Layout>
  );
}


export async function getServerSideProps(ctx){

  try {
    const res = await fetch('http://localhost:1337/api/homepage?populate[hero_img]=*&populate[stakeholder_img_1]=*&populate[stakeholder_img_2]=*&populate[stakeholder_img_3]=*&populate[list_item_cards][populate][list_item_card_img]=*&populate[product_cards][populate][list_card_description_img]=*&populate[vertical_description_card]=*&populate[testimonials][populate][testimonials_img]=*')
    const data = await res.json()
    
    return {
      props:{
        data:data
      }
    }
  } catch (error) {
  
  return {
    props:{
      data:'No Data'
    }
  }
  }

 
}