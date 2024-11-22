import Image from "next/image";
import { useEffect, useRef, useState} from "react";
import styles from '@/styles/LogoSlider.module.css';

export default function Collaborators({data}) {
    const logos = [...data.collaborators?.collaboratorLogo, ...data.collaborators?.collaboratorLogo.slice(0,5)]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000);

        return () => {
        clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (currentIndex === (logos.length) / 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, 500); // Tiempo de la transición
        }
      }, [currentIndex]);
    return (
        <section className="bg-white">
                <div className="container mx-auto py-6 lg:py-10">
                    <h2 className="text-xl font-bold text-[#FD27FF] text-center mb-14">{data?.collaborators?.heading}</h2>
                    {/* <div className="grid grid-cols-2 items-center justify-between  lg:gap-0 lg:grid-cols-7 mt-5 lg:mt-8">
                        {data?.collaborators?.collaboratorLogo?.map((img, index) => (
                            <center key={index}><img  src={img.collaborator_img?.data?.attributes?.url} alt={'logo'} className="object-fill p-0 m-0" width={140} height={300}/></center>
                        ))}
                    </div> */}
                     <div className={styles.sliderContainer}>
                    <div
                         className={`${styles.slider} ${isTransitioning ? styles.transition : ''}`}
                         style={{
                           transform: `translateX(-${1.75*((currentIndex * 100) / logos.length)}%)`,
                         }}
                    >
                        {logos.map((logo, index) => (
                        <div className={styles.slide} key={index}>
                            <img src={logo.collaborator_img.data?.attributes?.url} alt={logo.collaborator_img.data?.attributes?.alternativeText} className={styles.logo} />
                        </div>
                        ))}
                    </div>
                </div>
                </div>
               
                
            </section>
    );
}

