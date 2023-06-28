import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import "@/styles/Homepage.module.css";
import SupportOpenEcosystems from "../../components/homepage/SupportOpenEcosystems";
import Explore from "../../components/homepage/Explore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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