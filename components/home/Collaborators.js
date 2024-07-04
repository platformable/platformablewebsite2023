import Image from "next/image";
export default function Collaborators({data}) {
    const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--purple'));
    console.log(gapWidth)
    return (
        <section className="bg-white">
                <div className="container mx-auto py-6 lg:py-10">
                    <h2 className="text-xl font-bold text-[#FD27FF] text-center">{data?.collaborators?.heading}</h2>
                    <div className="grid grid-cols-2 items-center justify-between  lg:gap-0 lg:grid-cols-7 mt-5 lg:mt-8">
                        {data?.collaborators?.collaboratorLogo?.map((img, index) => (
                            <center key={index}><img  src={img.collaborator_img?.data?.attributes?.url} alt={'logo'} className="object-fill p-0 m-0" width={140} height={300}/></center>
                        ))}
                    </div>
                </div>

                <div class="carousel" aria-live="polite" aria-label="Image Carousel" className="overflow-hidden w-full">
                    <div class="carousel-track" className="flex">
                        {slidesData.map((slide, index) => (
                            <>
                            <div className="bg-red-500/60">

                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
    );
}

const slidesData = [
    { src: './images/img1.jpg', description: 'Description 1' },
    { src: './images/img2.jpg', description: 'Description 2' },
    { src: './images/img3.jpg', description: 'Description 3' },
    { src: './images/img4.jpg', description: 'Description 4' },
    { src: './images/img5.jpg', description: 'Description 5' },
    { src: './images/img6.jpg', description: 'Description 6' },
    { src: './images/img7.jpg', description: 'Description 7' },
    { src: './images/img8.jpg', description: 'Description 8' },
    { src: './images/img9.jpg', description: 'Description 9' }
  ];
