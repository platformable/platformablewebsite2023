

export default function OurMission({data}) {
  return (
     <>
     <div id="ourMission" className={`text-white pb-10 container mx-auto `}>
     <div id="header" className="flex gap-3 mb-10">
          <img src="/logo_icon_white.png" alt="Platofrmable logo" />
          <h4 className="font-bold">{'Our Mission'}</h4>
        </div>
          <div className="grid gap-7">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.ourMission,
              }}
              className="text-[30px] font-bold"
            />

            <div className="grid lg:grid-cols-3 gap-y-14 lg:gap-x-7 text-white">
              <div className="flex gap-3 items-center">
                <img src={data?.ourMission1_img?.data.attributes.url} alt="about us logo" width={90} />
                <p>{data?.ourMission1_text}</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={data?.ourMission2_img?.data.attributes.url}alt="about us logo" width={90} />
                 <p>{data?.ourMission2_text}</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={data?.ourMission3_img?.data.attributes.url}alt="about us logo" width={90} />
                 <p>{data?.ourMission3_text}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
