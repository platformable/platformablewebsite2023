import Image from "next/image";
export default function Collaborators({data}) {
    return (
        <section className="bg-white">
                <div className="container mx-auto py-6 lg:py-10">
                    <h4 className="text-xl font-bold text-[#FD27FF] text-center">{data?.collaborators?.heading}</h4>
                    <div className="grid grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-6 mt-5 lg:mt-8">
                        {data?.collaborators?.collaboratorLogo?.map((img, index) => (
                            <Image key={index} src={img.collaborator_img?.data?.attributes?.url} alt={'logo'} width={img.collaborator_img?.data?.attributes?.width} height={img.collaborator_img?.data?.attributes?.height}/>
                        ))}
                    </div>
                </div>
            </section>
    );
}
