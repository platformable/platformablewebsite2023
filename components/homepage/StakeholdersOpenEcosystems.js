import React, { useEffect, useState } from "react";
import styles from "@/styles/Homepage.module.css";
export default function StakeholdersOpenEcosystems({ videos, title }) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.data?.attributes?.url);
  const [sourceError, setSourceError] = useState(false);


  const changeVideo = ( new_video_src) => {
    if (!new_video_src) return setSourceError(true);
    
    const videoElement = document.getElementById('video')
    videoElement.pause();
    setSelectedVideo(new_video_src);
    videoElement.load();
    videoElement.play();

  };

  const arrayOfVideos = [
    {
      label: "For governments and regulators",
      video_src: videos[0]?.data?.attributes?.url,
    },
    {
      label: "For bussineses and organizations",
      video_src: videos[1]?.data?.attributes?.url,
    },
    {
      label: "For citizens",
      video_src: videos[2]?.data?.attributes?.url,
    },
  ];


  return (
    <section className="py-10">
     <div className="container mx-auto mb-7">
        <div className="flex gap-x-5 items-center">
        <h2 className={`text-[#5B24EC] md:flex hidden font-bold font-karla ${styles["titles-icon"]} md:leading-10 leading-8`}>{title}</h2>
          <h2 className={`text-[#5B24EC] font-bold font-karla md:hidden flex md:leading-10 leading-10`}>{title}</h2>
        </div>
      </div>
      <div className="container mx-auto  md:flex flex-col  gap-10 ">
        <div className="flex flex-col md:flex-row md:items-center px-7 mb-7 md:mb-10 justify-between gap-10">
          {arrayOfVideos?.map((video, i) => (
            <label className="flex items-center gap-5" key={i}>
              <input
                type="radio"
                className={styles.custom_radio_button}
                name="stakeholder_flow"
                onChange={(e) => changeVideo(video.video_src)}
                defaultChecked={i === 0}
              />
              <p className="font-bold">{video.label}</p>
            </label>
          ))}
        </div>
        {!sourceError ? (
          <video autoPlay muted loop id="video">
          <source src={selectedVideo} type="video/mp4" />
        </video>
        ) : (
          <div className="h-[600px] flex items-center justify-center">
              <p className="opacity-80">Video not found</p>
          </div>
        )}
      </div>
    </section>
  );
}
