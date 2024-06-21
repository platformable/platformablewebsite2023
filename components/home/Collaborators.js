import Image from "next/image";
export default function Collaborators({data}) {
    return (
        <section className="bg-white">
                <div className="container mx-auto py-6 lg:py-10">
                    <h4 className="text-xl font-bold text-[#FD27FF] text-center">{data?.collaborators?.heading}</h4>
                    <div className="grid grid-cols-2 items-center justify-between gap-3 lg:gap-3 lg:grid-cols-6 mt-5 lg:mt-8 bg-red-50">
                        {data?.collaborators?.collaboratorLogo?.map((img, index) => (
                            <center key={index}><img  src={img.collaborator_img?.data?.attributes?.url} alt={'logo'} className="object-fill p-0 m-0" width={140} height={300}/></center>
                        ))}
                    </div>
                </div>
            </section>
    );
}
