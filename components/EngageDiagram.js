import Link from "next/link"
import styles from '@/styles/Engagepage.module.css'

export const EngageDiagram = ({title}) => {
    const higlightSection = async (e) => {
        const heading_rect = document.getElementsByName(e.target.id)
        heading_rect[0].style.stroke = '#fff'
        heading_rect[0].style.strokeWidth = '3px'

     
    }
    const unhighlightSection = (e) => {
        const heading_rect = document.getElementsByName(e.target.id)
        heading_rect[0].style.stroke = ''

   

    }
    return (
        <section className={`${styles.bg_engage_diagram} py-10`}>
            <div className='container mx-auto'>
            <p className="mb-10 text-white font-bold">{title}</p>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="-2 0 1510.307 1845.096">
  <defs>
    <filter id="Rectangle_2391" x="367.112" y="169.172" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2508" x="1128.112" y="0.172" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2403" x="367.112" y="1096.892" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-3"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2407" x="367.112" y="1489.588" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-4"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-4"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2397" x="367.112" y="501.359" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-5"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-5"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2405" x="747.112" y="1489.621" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-6"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-6"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#9b72ff"/>
    </linearGradient>
    <clipPath id="clip-path">
      <rect id="Rectangle_1399" data-name="Rectangle 1399" width="37.664" height="36.88" fill="#fff"/>
    </clipPath>
    <linearGradient id="linear-gradient-2" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#06de8b"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#0062ff"/>
    </linearGradient>
    <filter id="Rectangle_2393" x="747.112" y="0" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-7"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-7"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2402" x="747.112" y="927.719" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-8"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-8"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2510" x="1127.928" y="927.719" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-9"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-9"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2406" x="747.112" y="1320.416" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-10"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-10"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2396" x="747.112" y="332.188" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-11"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-11"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2509" x="1128.114" y="332.188" width="378.17" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-12"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-12"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2394" x="367.112" y="0.172" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-13"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-13"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2404" x="367.112" y="927.891" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-14"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-14"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2408" x="367.112" y="1320.588" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-15"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-15"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Rectangle_2398" x="367.112" y="332.359" width="378.172" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-16"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-16"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-9" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#ff9d00"/>
    </linearGradient>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_1400" data-name="Rectangle 1400" width="79.474" height="82.381" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
    </clipPath>
    <linearGradient id="linear-gradient-18" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#9b71ff"/>
    </linearGradient>
    <clipPath id="clip-path-6">
      <rect id="Rectangle_1399-2" data-name="Rectangle 1399" width="33.27" height="32.577" fill="#fff"/>
    </clipPath>
    <clipPath id="clip-path-7">
      <rect id="Rectangle_1404" data-name="Rectangle 1404" width="26.088" height="35.268" fill="#bba4ff"/>
    </clipPath>
    <clipPath id="clip-path-8">
      <rect id="Rectangle_1404-2" data-name="Rectangle 1404" width="26.088" height="35.268" fill="#c85fff"/>
    </clipPath>
    <linearGradient id="linear-gradient-19" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#856eff"/>
    </linearGradient>
    <clipPath id="clip-path-9">
      <rect id="Rectangle_1404-3" data-name="Rectangle 1404" width="21.331" height="27.021" fill="#bba4ff"/>
    </clipPath>
    <linearGradient id="linear-gradient-20" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#f157ff"/>
      <stop offset="1" stopColor="#846eff"/>
    </linearGradient>
    <clipPath id="clip-path-12">
      <rect id="Rectangle_1404-6" data-name="Rectangle 1404" width="25.21" height="34.081" fill="#3001aa"/>
    </clipPath>
    <filter id="Rectangle_2410" x="1127.928" y="1320.01" width="382.379" height="139" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-17"/>
      <feFlood floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur-17"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <clipPath id="clip-path-13">
      <rect id="Rectangle_1385" data-name="Rectangle 1385" width="58.826" height="84.201" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-15">
      <rect id="Rectangle_1379" data-name="Rectangle 1379" width="51.905" height="76.128" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="Diagram" transform="translate(0 6)">
    <path id="Path_3620" data-name="Path 3620" d="M-10501.22,11853.27v55.116h-216.09" transform="translate(11057.418 -11759.828)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3628" data-name="Path 3628" d="M-10501.22,11853.27v55.116h-216.09" transform="translate(11057.418 -10832.108)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3635" data-name="Path 3635" d="M-10501.22,11853.27v55.116h-216.09" transform="translate(11057.418 -10439.412)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3626" data-name="Path 3626" d="M-10501.22,11853.27v55.116h-216.09" transform="translate(11057.418 -11427.641)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3621" data-name="Path 3621" d="M-10531.437,11853.27v55.116H-11143" transform="translate(11467.635 -11759.828)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3629" data-name="Path 3629" d="M-10531.437,11853.27v55.116H-11143" transform="translate(11467.635 -10832.108)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3633" data-name="Path 3633" d="M-10531.437,11853.27v55.116H-11143" transform="translate(11467.635 -10439.412)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3624" data-name="Path 3624" d="M-10531.437,11853.27v55.116H-11143" transform="translate(11467.635 -11427.641)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3622" data-name="Path 3622" d="M-10501.22,11907.469v-54.2h-216.09" transform="translate(11057.418 -11704.713)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3630" data-name="Path 3630" d="M-10501.22,11907.469v-54.2h-216.09" transform="translate(11057.418 -10776.993)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3636" data-name="Path 3636" d="M-10501.22,11907.469v-54.2h-216.09" transform="translate(11057.418 -10384.297)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3627" data-name="Path 3627" d="M-10501.22,11907.469v-54.2h-216.09" transform="translate(11057.418 -11372.525)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3623" data-name="Path 3623" d="M-10150.437,11808.916v44.354H-11143" transform="translate(11467.635 -11704.713)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3631" data-name="Path 3631" d="M-10146.557,11806.345v45.992l-996.447.934" transform="translate(11467.635 -10776.993)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3634" data-name="Path 3634" d="M-10531.437,11907.469v-54.2H-11143" transform="translate(11467.635 -10384.297)" fill="none" stroke="#fff" strokeWidth="2"/>
    <path id="Path_3625" data-name="Path 3625" d="M-10156.218,11790.256v63.015H-11143" transform="translate(11467.635 -11372.525)" fill="none" stroke="#fff" strokeWidth="2"/>
    
    
    
    {/* CHILD'S HEADER RECTANGLES */}
    <rect id="Rectangle_2388" name="Rectangle Data governance" data-name="Rectangle 2388" width="346.078" height="121" rx="12" transform="translate(0 87.351)" fill="#5b24ec"/>
    <rect id="Rectangle_2389" name="Rectangle API governance" data-name="Rectangle 2389" width="346.078" height="121" rx="12" transform="translate(0 420.245)" fill="#5b24ec"/>
    <rect id="Rectangle_2399" name="Rectangle Open ecosystem consultancy" data-name="Rectangle 2399" width="1497.284" height="121" rx="12" transform="translate(0 724.883)" fill="#5b24ec"/>
    <rect id="Rectangle_2411" name="Rectangle Speaker engagement" data-name="Rectangle 2411" width="1501.307" height="121" rx="12" transform="translate(0 1718.096)" fill="#5b24ec"/>
    <rect id="Rectangle_2400" name="Rectangle Data products" data-name="Rectangle 2400" width="346.078" height="121" rx="12" transform="translate(0 1012.322)" fill="#5b24ec"/>
    <rect id="Rectangle_2409" name="Rectangle Datasets" data-name="Rectangle 2409" width="346.078" height="121" rx="12" transform="translate(0 1405.019)" fill="#5b24ec"/>
    
    
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2391)">
      <rect id="Rectangle_2391-2" data-name="Rectangle 2391" width="360.172" height="121" rx="12" transform="translate(376.11 175.17)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2508)">
      <rect id="Rectangle_2508-2" data-name="Rectangle 2508" width="360.172" height="121" rx="12" transform="translate(1137.11 6.17)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2403)">
      <rect id="Rectangle_2403-2" data-name="Rectangle 2403" width="360.172" height="121" rx="12" transform="translate(376.11 1102.89)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2407)">
      <rect id="Rectangle_2407-2" data-name="Rectangle 2407" width="360.172" height="121" rx="12" transform="translate(376.11 1495.59)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2397)">
      <rect id="Rectangle_2397-2" data-name="Rectangle 2397" width="360.172" height="121" rx="12" transform="translate(376.11 507.36)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2405)">
      <rect id="Rectangle_2405-2" data-name="Rectangle 2405" width="360.17" height="121" rx="12" transform="translate(756.11 1495.62)" fill="#5b24ec"/>
    </g>
    <text id="Data_Governance" data-name="Data 
Governance" transform="translate(115.307 114.14)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">Data </tspan><tspan x="0" y="55">Governance</tspan></text>
    <g id="icon02_sec_02" transform="translate(17.307 106.449)">
      <g id="Group_2313" data-name="Group 2313" transform="translate(0)">
        <g id="Group_1255" data-name="Group 1255" transform="translate(0.002 55.278)">
          <path id="Subtraction_21" data-name="Subtraction 21" d="M28.333,27.1C12.71,27.1,0,22.99,0,17.935a3.028,3.028,0,0,1,.025-.4H0V0H.062C.535,2.336,3.685,4.508,8.933,6.116a68.825,68.825,0,0,0,19.4,2.505,68.837,68.837,0,0,0,19.4-2.505c5.248-1.608,8.4-3.78,8.872-6.116h.062V17.536h-.028a2.657,2.657,0,0,1,.028.4C56.669,22.99,43.957,27.1,28.333,27.1Z" transform="translate(0 0)" fill="#bba4ff"/>
        </g>
        <g id="Group_1254" data-name="Group 1254" transform="translate(0.001 33.566)">
          <path id="Subtraction_20" data-name="Subtraction 20" d="M28.334,27.1A67.771,67.771,0,0,1,8.3,24.418C2.948,22.686,0,20.383,0,17.934a3.064,3.064,0,0,1,.025-.4H0V0C0,2.628,2.951,5.1,8.308,6.966A63.292,63.292,0,0,0,28.334,9.856C43.958,9.856,56.67,5.435,56.67,0V17.535h-.027a3.161,3.161,0,0,1,.027.4c0,2.45-2.948,4.753-8.3,6.484A67.786,67.786,0,0,1,28.334,27.1Z" transform="translate(0 0)" fill="#bba4ff"/>
        </g>
        <path id="Subtraction_22" data-name="Subtraction 22" d="M28.337,27.1C12.712,27.1,0,22.991,0,17.934a2.716,2.716,0,0,1,.028-.4H0V0H.062c.471,2.336,3.621,4.508,8.87,6.117A68.839,68.839,0,0,0,28.337,8.623a68.821,68.821,0,0,0,19.4-2.507c5.248-1.608,8.4-3.781,8.87-6.117h.062V17.537h-.028a2.843,2.843,0,0,1,.028.4C56.671,22.991,43.961,27.1,28.337,27.1Z" transform="translate(0 13.088)" fill="#bba4ff"/>
        <path id="Path_2623" data-name="Path 2623" d="M28.335,0C43.984,0,56.67,4.137,56.67,9.24s-12.686,9.24-28.335,9.24S0,14.343,0,9.24,12.686,0,28.335,0Z" transform="translate(0.001)" fill="#bba4ff"/>
      </g>
      <g id="Group_2314" data-name="Group 2314" transform="translate(31.887 32.81)">
        <path id="Path_2478" data-name="Path 2478" d="M115.946,53.35A24.785,24.785,0,1,1,91.161,28.565,24.786,24.786,0,0,1,115.946,53.35" transform="translate(-66.376 -28.565)" stroke="#fff" strokeWidth="3" fill="url(#linear-gradient)"/>
        <g id="Group_2426" data-name="Group 2426" transform="translate(5.953 6.345)">
          <g id="Group_2299" data-name="Group 2299" clipPath="url(#clip-path)">
            <path id="Path_2450" data-name="Path 2450" d="M32.171,15.021A14.525,14.525,0,0,0,30.6,11.434L32.957,6.5,26.79,1.794,22.644,5.381a15.117,15.117,0,0,0-3.924-.56L15.469,0,8.295,2.915l1.121,5.6a13.163,13.163,0,0,0-2.69,3.475l-5.717.337L0,19.953l5.493,1.905a14.571,14.571,0,0,0,1.569,3.588L4.709,30.378l6.165,4.709L15.021,31.5a15.055,15.055,0,0,0,3.923.561L22.2,36.88l7.174-2.914L28.248,28.36a13.209,13.209,0,0,0,2.691-3.474l5.716-.337,1.009-7.623Zm-6.837,8.407a8.239,8.239,0,1,1-13.116-9.976,8.239,8.239,0,1,1,13.116,9.976" transform="translate(0 0)" fill="#fff"/>
          </g>
        </g>
      </g>
    </g>
    <text id="Data_Governance_Mentoring_Support" data-name="Data Governance 
Mentoring Support" transform="translate(472.13 202.756)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Data Governance </tspan><tspan x="0" y="51">Mentoring Support</tspan></text>
    <text id="Virtual_Learning_Management_System" data-name="Virtual Learning
Management System" transform="translate(1233.13 17.013)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Virtual Learning</tspan><tspan x="0" y="51">Management </tspan><tspan x="0" y="79">System</tspan></text>
    <text id="API_Industry_Trends_Report" data-name="API Industry 
Trends Report" transform="translate(472.13 1130.476)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">API Industry </tspan><tspan x="0" y="51">Trends Report</tspan></text>
    <text id="Open_Health" data-name="Open Health" transform="translate(472.13 1535.855)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Open Health</tspan></text>
    <text id="Privacy_Technology" data-name="Privacy Technology" transform="translate(852.945 1532.012)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Privacy Technology</tspan></text>
    <text id="API_Governance_Mentoring_Support" data-name="API Governance 
Mentoring Support" transform="translate(472.13 534.943)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">API Governance </tspan><tspan x="0" y="51">Mentoring Support</tspan></text>
    <g id="Component_65_2" data-name="Component 65 – 2" transform="translate(399.065 203.172)">
      <g id="Rectangle_2365" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_12" data-name="Component 65 – 12" transform="translate(1160.065 34.172)">
      <g id="Rectangle_2365-2" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-2" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-2" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-2" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-2" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_67_2" data-name="Component 67 – 2" transform="translate(399.065 1130.892)">
      <g id="Rectangle_2364" data-name="Rectangle 2364" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-4)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3654" data-name="Group 3654" transform="translate(-451.104 -74.338)">
        <g id="Group_1-3" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-3" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-3" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_67_3" data-name="Component 67 – 3" transform="translate(399.065 1523.588)">
      <g id="Rectangle_2364-2" data-name="Rectangle 2364" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-4)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3654-2" data-name="Group 3654" transform="translate(-451.104 -74.338)">
        <g id="Group_1-4" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-4" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-4" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_7" data-name="Component 65 – 7" transform="translate(399.065 535.359)">
      <g id="Rectangle_2365-3" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-3" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-5" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-5" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-5" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_10" data-name="Component 65 – 10" transform="translate(778.494 1521.246)">
      <g id="Rectangle_2365-4" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-4" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-6" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-6" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-6" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2393)">
      <rect id="Rectangle_2393-2" data-name="Rectangle 2393" width="360.17" height="121" rx="12" transform="translate(756.11 6)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2402)">
      <rect id="Rectangle_2402-2" data-name="Rectangle 2402" width="360.17" height="121" rx="12" transform="translate(756.11 933.72)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2510)">
      <rect id="Rectangle_2510-2" data-name="Rectangle 2510" width="360.17" height="121" rx="12" transform="translate(1136.93 933.72)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2406)">
      <rect id="Rectangle_2406-2" data-name="Rectangle 2406" width="360.17" height="121" rx="12" transform="translate(756.11 1326.42)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2396)">
      <rect id="Rectangle_2396-2" data-name="Rectangle 2396" width="360.17" height="121" rx="12" transform="translate(756.11 338.19)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2509)">
      <rect id="Rectangle_2509-2" data-name="Rectangle 2509" width="360.17" height="121" rx="12" transform="translate(1137.11 338.19)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2394)">
      <rect id="Rectangle_2394-2" data-name="Rectangle 2394" width="360.172" height="121" rx="12" transform="translate(376.11 6.17)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2404)">
      <rect id="Rectangle_2404-2" data-name="Rectangle 2404" width="360.172" height="121" rx="12" transform="translate(376.11 933.89)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2408)">
      <rect id="Rectangle_2408-2" data-name="Rectangle 2408" width="360.172" height="121" rx="12" transform="translate(376.11 1326.59)" fill="#5b24ec"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2398)">
      <rect id="Rectangle_2398-2" data-name="Rectangle 2398" width="360.172" height="121" rx="12" transform="translate(376.11 338.36)" fill="#5b24ec"/>
    </g>
    
    <text id="Self-paced_Learning_Management_System" data-name="Self-paced Learning
Management System" transform="translate(472.13 16.99)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Self-paced Learning</tspan><tspan x="0" y="51">Management </tspan><tspan x="0" y="79">System</tspan></text>
    <text id="Open_Banking_Open_Finance_Trends_Report" data-name="Open Banking/Open Finance Trends Report" transform="translate(472.13 961.715)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Open Banking/Open </tspan><tspan x="0" y="51">Finance Trends </tspan></text>
    <text id="Open_Banking_Open_Finance" data-name="Open Banking/Open Finance" transform="translate(472.13 1350.588)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Open Banking/Open </tspan><tspan x="0" y="51">Finance</tspan></text>
    <text id="Self-paced_Learning_Management_System-2" data-name="Self-paced Learning
Management System" transform="translate(472.13 348.865)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Self-paced Learning</tspan><tspan x="0" y="51">Management </tspan><tspan x="0" y="79">System</tspan></text>
    <g id="Component_65_1" data-name="Component 65 – 1" transform="translate(399.312 34.172)">
      <g id="Rectangle_2365-5" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-5" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-7" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-7" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-7" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_66_2" data-name="Component 66 – 2" transform="translate(399.312 961.892)">
      <g id="Path_3632" data-name="Path 3632" fill="url(#linear-gradient-9)">
        <path d="M 51 52.5 L 3 52.5 C 1.621500015258789 52.5 0.5 51.37850189208984 0.5 50 L 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 L 51 0.5 C 52.37850189208984 0.5 53.5 1.621500015258789 53.5 3 L 53.5 50 C 53.5 51.37850189208984 52.37850189208984 52.5 51 52.5 Z" stroke="none"/>
        <path d="M 3 1 C 1.897201538085938 1 1 1.897201538085938 1 3 L 1 50 C 1 51.10279846191406 1.897201538085938 52 3 52 L 51 52 C 52.10279846191406 52 53 51.10279846191406 53 50 L 53 3 C 53 1.897201538085938 52.10279846191406 1 51 1 L 3 1 M 3 0 L 51 0 C 52.6568489074707 0 54 1.343151092529297 54 3 L 54 50 C 54 51.6568489074707 52.6568489074707 53 51 53 L 3 53 C 1.343151092529297 53 0 51.6568489074707 0 50 L 0 3 C 0 1.343151092529297 1.343151092529297 0 3 0 Z" stroke="none" fill="#fff"/>
      </g>
      <g id="Group_3653" data-name="Group 3653" transform="translate(-451.104 -74.62)">
        <g id="Group_1-8" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-8" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-8" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_66_7" data-name="Component 66 – 7" transform="translate(399.312 1354.588)">
      <g id="Path_3632-2" data-name="Path 3632" fill="url(#linear-gradient-9)">
        <path d="M 51 52.5 L 3 52.5 C 1.621500015258789 52.5 0.5 51.37850189208984 0.5 50 L 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 L 51 0.5 C 52.37850189208984 0.5 53.5 1.621500015258789 53.5 3 L 53.5 50 C 53.5 51.37850189208984 52.37850189208984 52.5 51 52.5 Z" stroke="none"/>
        <path d="M 3 1 C 1.897201538085938 1 1 1.897201538085938 1 3 L 1 50 C 1 51.10279846191406 1.897201538085938 52 3 52 L 51 52 C 52.10279846191406 52 53 51.10279846191406 53 50 L 53 3 C 53 1.897201538085938 52.10279846191406 1 51 1 L 3 1 M 3 0 L 51 0 C 52.6568489074707 0 54 1.343151092529297 54 3 L 54 50 C 54 51.6568489074707 52.6568489074707 53 51 53 L 3 53 C 1.343151092529297 53 0 51.6568489074707 0 50 L 0 3 C 0 1.343151092529297 1.343151092529297 0 3 0 Z" stroke="none" fill="#fff"/>
      </g>
      <g id="Group_3653-2" data-name="Group 3653" transform="translate(-451.104 -74.62)">
        <g id="Group_1-9" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-9" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-9" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_8" data-name="Component 65 – 8" transform="translate(399.312 366.359)">
      <g id="Rectangle_2365-6" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-6" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-10" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-10" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-10" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <text id="Data_Governance_Systems_App" data-name="Data Governance 
Systems App" transform="translate(852.945 32.766)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Data Governance </tspan><tspan x="0" y="51">Systems App</tspan></text>
    <text id="Open_Banking_Open_finance_API_product_pricing_tool" data-name="Open Banking/ Open finance API product 
pricing tool" transform="translate(851.313 942.669)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Open Banking/ Open </tspan><tspan x="0" y="51">finance API product </tspan><tspan x="0" y="79">pricing tool</tspan></text>
    <text id="Open_Banking_Regulation_Tracker" data-name="Open Banking 
Regulation Tracker" transform="translate(1233.761 962.106)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Open Banking </tspan><tspan x="0" y="48">Regulation Tracker</tspan></text>
    <text id="Government_APIs" data-name="Government APIs" transform="translate(852.945 1364.808)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Government APIs</tspan></text>
    <text id="API_Governance_Systems_App" data-name="API Governance 
Systems App" transform="translate(852.945 365.715)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">API Governance </tspan><tspan x="0" y="51">Systems App</tspan></text>
    <text id="Virtual_Learning_Management_System-2" data-name="Virtual Learning
Management System" transform="translate(1233.947 348.865)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">Virtual Learning</tspan><tspan x="0" y="51">Management </tspan><tspan x="0" y="79">System</tspan></text>
    <g id="Component_65_3" data-name="Component 65 – 3" transform="translate(778.494 36.81)">
      <g id="Rectangle_2365-7" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-7" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-11" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-11" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-11" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_66_3" data-name="Component 66 – 3" transform="translate(778.494 964.529)">
      <g id="Path_3632-3" data-name="Path 3632" fill="url(#linear-gradient-9)">
        <path d="M 51 52.5 L 3 52.5 C 1.621500015258789 52.5 0.5 51.37850189208984 0.5 50 L 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 L 51 0.5 C 52.37850189208984 0.5 53.5 1.621500015258789 53.5 3 L 53.5 50 C 53.5 51.37850189208984 52.37850189208984 52.5 51 52.5 Z" stroke="none"/>
        <path d="M 3 1 C 1.897201538085938 1 1 1.897201538085938 1 3 L 1 50 C 1 51.10279846191406 1.897201538085938 52 3 52 L 51 52 C 52.10279846191406 52 53 51.10279846191406 53 50 L 53 3 C 53 1.897201538085938 52.10279846191406 1 51 1 L 3 1 M 3 0 L 51 0 C 52.6568489074707 0 54 1.343151092529297 54 3 L 54 50 C 54 51.6568489074707 52.6568489074707 53 51 53 L 3 53 C 1.343151092529297 53 0 51.6568489074707 0 50 L 0 3 C 0 1.343151092529297 1.343151092529297 0 3 0 Z" stroke="none" fill="#fff"/>
      </g>
      <g id="Group_3653-3" data-name="Group 3653" transform="translate(-451.104 -74.62)">
        <g id="Group_1-12" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-12" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-12" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_66_8" data-name="Component 66 – 8" transform="translate(1159.31 964.529)">
      <g id="Path_3632-4" data-name="Path 3632" fill="url(#linear-gradient-9)">
        <path d="M 51 52.5 L 3 52.5 C 1.621500015258789 52.5 0.5 51.37850189208984 0.5 50 L 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 L 51 0.5 C 52.37850189208984 0.5 53.5 1.621500015258789 53.5 3 L 53.5 50 C 53.5 51.37850189208984 52.37850189208984 52.5 51 52.5 Z" stroke="none"/>
        <path d="M 3 1 C 1.897201538085938 1 1 1.897201538085938 1 3 L 1 50 C 1 51.10279846191406 1.897201538085938 52 3 52 L 51 52 C 52.10279846191406 52 53 51.10279846191406 53 50 L 53 3 C 53 1.897201538085938 52.10279846191406 1 51 1 L 3 1 M 3 0 L 51 0 C 52.6568489074707 0 54 1.343151092529297 54 3 L 54 50 C 54 51.6568489074707 52.6568489074707 53 51 53 L 3 53 C 1.343151092529297 53 0 51.6568489074707 0 50 L 0 3 C 0 1.343151092529297 1.343151092529297 0 3 0 Z" stroke="none" fill="#fff"/>
      </g>
      <g id="Group_3653-4" data-name="Group 3653" transform="translate(-451.104 -74.62)">
        <g id="Group_1-13" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-13" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-13" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_9" data-name="Component 65 – 9" transform="translate(778.494 1357.226)">
      <g id="Rectangle_2365-8" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-8" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-14" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-14" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-14" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_6" data-name="Component 65 – 6" transform="translate(778.494 368.997)">
      <g id="Rectangle_2365-9" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-9" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-15" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-15" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-15" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Component_65_13" data-name="Component 65 – 13" transform="translate(1159.496 368.997)">
      <g id="Rectangle_2365-10" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-10" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-16" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-16" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-16" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <text id="API_Governance" data-name="API 
Governance" transform="translate(115.307 451.187)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">API </tspan><tspan x="0" y="55">Governance</tspan></text>
    <text id="Open_Ecosystem_Consultancy" data-name="Open Ecosystem Consultancy" transform="translate(115.307 768.883)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">Open Ecosystem Consultancy</tspan></text>
    <text id="Speaker_Engagement" data-name="Speaker Engagement" transform="translate(115.307 1762.096)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">Speaker Engagement</tspan></text>
    <text id="Data_Products" data-name="Data Products" transform="translate(115.307 1056.322)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">Data Products</tspan></text>
    <g id="icon05_sec02" transform="translate(15.307 439.555)">
      <g id="Group_2343" data-name="Group 2343" transform="translate(0 0)">
        <path id="Path_2451" data-name="Path 2451" d="M23.309,8.544,12.841,14.778l-2.52-7.542,7.948-4.727Z" transform="translate(6.056 1.472)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2452" data-name="Path 2452" d="M23.309,8.544,12.841,14.778l-2.52-7.542,7.948-4.727Z" transform="translate(6.056 1.472)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2453" data-name="Path 2453" d="M8.256,32.739,14.266,43.6,7,46.215,2.441,37.969Z" transform="translate(1.432 19.211)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2454" data-name="Path 2454" d="M8.256,32.739,14.266,43.6,7,46.215,2.441,37.969Z" transform="translate(1.432 19.211)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2455" data-name="Path 2455" d="M12.841,41.675,23.309,47.91l-5.04,6.035-7.948-4.727Z" transform="translate(6.056 24.455)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2456" data-name="Path 2456" d="M12.841,41.675,23.309,47.91l-5.04,6.035-7.948-4.727Z" transform="translate(6.056 24.455)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2457" data-name="Path 2457" d="M21.254,46.365l1.454,7.844h9.111l1.454-7.844Z" transform="translate(12.472 27.207)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <g id="Group_2304" data-name="Group 2304">
          <g id="Group_2303" data-name="Group 2303" clipPath="url(#clip-path-2)">
            <path id="Path_2458" data-name="Path 2458" d="M21.255,46.365H33.273L31.82,54.209H22.708Z" transform="translate(12.473 27.207)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
          </g>
        </g>
        <path id="Path_2459" data-name="Path 2459" d="M31.578,47.91l10.468-6.235,2.52,7.542-7.948,4.727Z" transform="translate(18.53 24.455)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2460" data-name="Path 2460" d="M31.578,47.91l10.468-6.235,2.52,7.542-7.948,4.727Z" transform="translate(18.53 24.455)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2461" data-name="Path 2461" d="M40.191,43.6,46.2,32.74l5.816,5.229L47.46,46.215Z" transform="translate(23.584 19.212)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2462" data-name="Path 2462" d="M40.191,43.6,46.2,32.74l5.816,5.229L47.46,46.215Z" transform="translate(23.584 19.212)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2463" data-name="Path 2463" d="M44.711,34.5V22.028l7.561,1.509V32.99Z" transform="translate(26.237 12.926)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <g id="Group_2306" data-name="Group 2306">
          <g id="Group_2305" data-name="Group 2305" clipPath="url(#clip-path-2)">
            <path id="Path_2464" data-name="Path 2464" d="M44.711,34.5V22.028l7.561,1.509V32.99Z" transform="translate(26.237 12.926)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
          </g>
        </g>
        <path id="Path_2465" data-name="Path 2465" d="M46.2,24.16,40.191,13.3l7.269-2.615,4.556,8.245Z" transform="translate(23.585 6.27)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2466" data-name="Path 2466" d="M46.2,24.16,40.191,13.3l7.269-2.615,4.556,8.245Z" transform="translate(23.585 6.27)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2467" data-name="Path 2467" d="M42.046,14.778,31.578,8.544l5.04-6.035,7.948,4.727Z" transform="translate(18.53 1.472)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2468" data-name="Path 2468" d="M42.046,14.778,31.578,8.544l5.04-6.035,7.948,4.727Z" transform="translate(18.53 1.472)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <path id="Path_2469" data-name="Path 2469" d="M22.708.608,21.255,8.452H33.273L31.82.608Z" transform="translate(12.472 0.356)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <g id="Group_2308" data-name="Group 2308">
          <g id="Group_2307" data-name="Group 2307" clipPath="url(#clip-path-2)">
            <path id="Path_2470" data-name="Path 2470" d="M33.274,8.452H21.255L22.709.609H31.82Z" transform="translate(12.473 0.356)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
          </g>
        </g>
        <path id="Path_2471" data-name="Path 2471" d="M14.266,13.3,8.257,24.16,2.441,18.931,7,10.685Z" transform="translate(1.432 6.269)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
        <path id="Path_2472" data-name="Path 2472" d="M14.266,13.3,8.257,24.16,2.441,18.931,7,10.685Z" transform="translate(1.432 6.269)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
        <g id="Group_2310" data-name="Group 2310">
          <g id="Group_2309" data-name="Group 2309" clipPath="url(#clip-path-2)">
            <path id="Path_2473" data-name="Path 2473" d="M57.038,26.17c6.4,11.565,2.618,26.347-8.529,32.985a22.828,22.828,0,0,1-31.793-8.85C10.319,38.74,14.1,23.958,25.246,17.32a22.826,22.826,0,0,1,31.792,8.85M20.884,9.476C5.57,18.628.335,38.942,9.156,54.831S37.557,76.151,52.871,67,73.42,37.534,64.6,21.644,36.2.325,20.884,9.476" transform="translate(2.859 2.952)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
            <path id="Path_2474" data-name="Path 2474" d="M57.038,26.17c6.4,11.565,2.618,26.347-8.529,32.985a22.828,22.828,0,0,1-31.793-8.85C10.319,38.74,14.1,23.958,25.246,17.32A22.826,22.826,0,0,1,57.038,26.17ZM20.884,9.476C5.57,18.628.335,38.942,9.156,54.831S37.557,76.151,52.871,67,73.42,37.534,64.6,21.644,36.2.325,20.884,9.476Z" transform="translate(2.859 2.952)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
            <path id="Path_2475" data-name="Path 2475" d="M8.169,22.029V34.5L.608,32.991V23.538Z" transform="translate(0.357 12.926)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1"/>
            <path id="Path_2476" data-name="Path 2476" d="M8.169,22.029V34.5L.608,32.991V23.538Z" transform="translate(0.357 12.926)" fill="#bba4ff" stroke="#bba4ff" strokeWidth="1.216"/>
          </g>
        </g>
      </g>
      <path id="Path_2601" data-name="Path 2601" d="M116.5,53.625a25.06,25.06,0,1,1-25.06-25.06,25.061,25.061,0,0,1,25.06,25.06" transform="translate(-51.699 -12.436)" stroke="#fff" strokeWidth="3" fill="url(#linear-gradient-18)"/>
      <g id="Group_2344" data-name="Group 2344" transform="translate(23.102 24.901)">
        <g id="Group_2299-2" data-name="Group 2299" transform="translate(0 0)" clipPath="url(#clip-path-6)">
          <path id="Path_2450-2" data-name="Path 2450" d="M28.418,13.269A12.83,12.83,0,0,0,27.032,10.1l2.08-4.356L23.665,1.585,20,4.753a13.354,13.354,0,0,0-3.466-.495L13.664,0,7.327,2.575l.99,4.95A11.627,11.627,0,0,0,5.942,10.6l-5.05.3L0,17.625l4.852,1.683a12.872,12.872,0,0,0,1.386,3.169L4.159,26.834l5.446,4.159,3.664-3.169a13.3,13.3,0,0,0,3.465.5l2.872,4.257L25.943,30l-.99-4.951a11.668,11.668,0,0,0,2.377-3.069l5.049-.3.891-6.734ZM22.378,20.7a7.278,7.278,0,1,1-11.586-8.812A7.278,7.278,0,0,1,22.378,20.7" transform="translate(0 0)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="icon06_sec_02" transform="translate(17.307 744.192)">
      <g id="Group_2335" data-name="Group 2335" transform="translate(48.636 43.699)">
        <g id="Group_2318" data-name="Group 2318" transform="translate(0 0)" clipPath="url(#clip-path-7)">
          <path id="Path_2482" data-name="Path 2482" d="M11.8,0A8.7,8.7,0,1,1,3.1,8.7,8.7,8.7,0,0,1,11.8,0" transform="translate(1.248 2.222)" fill="#bba4ff"/>
          <path id="Path_2483" data-name="Path 2483" d="M26.088,27.308A13.044,13.044,0,1,0,0,27.308" transform="translate(0 7.961)" fill="#bba4ff"/>
        </g>
      </g>
      <g id="Group_2336" data-name="Group 2336" transform="translate(4.126 43.699)">
        <g id="Group_2318-2" data-name="Group 2318" transform="translate(0 0)" clipPath="url(#clip-path-8)">
          <path id="Path_2482-2" data-name="Path 2482" d="M11.8,0A8.7,8.7,0,1,1,3.1,8.7,8.7,8.7,0,0,1,11.8,0" transform="translate(1.248 2.222)" fill="#c85fff"/>
          <path id="Path_2483-2" data-name="Path 2483" d="M26.088,27.308A13.044,13.044,0,1,0,0,27.308" transform="translate(0 7.961)" fill="#c85fff"/>
        </g>
      </g>
      <path id="Path_2590" data-name="Path 2590" d="M201,268.236c0,7.586,8.01,13.758,17.852,13.758a22.452,22.452,0,0,0,6.361-.91l.434-.128,1.962,6.4,3.043-8.815.333-.239c3.633-2.6,5.716-6.273,5.716-10.067,0-7.586-8.01-13.758-17.85-13.758S201,260.65,201,268.236" transform="translate(-160.901 -243.659)" fill="#bba4ff"/>
      <path id="Path_2589" data-name="Path 2589" d="M250.066,273.385c0,10.426-11.008,18.908-24.534,18.908a30.859,30.859,0,0,1-8.742-1.251l-.6-.176-4.855,7.034-2.024-10.352-.458-.328C203.864,283.642,201,278.6,201,273.385c0-10.425,11.008-18.907,24.532-18.907s24.534,8.482,24.534,18.907" transform="translate(-201.001 -254.478)" stroke="#fff" strokeWidth="2" fill="url(#linear-gradient-19)"/>
      <text id="_" data-name="?" transform="translate(57.634 8.82)" fill="#fff" fontSize="27" fontFamily="Karla" fontWeight="700"><tspan x="-6" y="25">?</tspan></text>
      <g id="Group_2337" data-name="Group 2337" transform="translate(11.954 5.022)">
        <g id="Group_1-17" data-name="Group 1" transform="translate(0 0)">
          <path id="Path_1-17" data-name="Path 1" d="M13,0,10.4,2.6,2.6,10.4,0,13l2.6,2.6L13,26l2.6-2.6L5.2,13,13,5.2,20.8,13l-5.2,5.2,2.6,2.6,5.2-5.2L26,13l-2.6-2.6L15.6,2.6Z" fill="#fff"/>
          <rect id="Rectangle_5-17" data-name="Rectangle 5" width="4.045" height="4.045" transform="translate(10.142 13.002) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="icon03_sec_02" transform="translate(13.851 1738.965)">
      <g id="Group_2345" data-name="Group 2345" transform="translate(9.951 52.241)">
        <g id="Group_2318-3" data-name="Group 2318" transform="translate(0 0)" clipPath="url(#clip-path-9)">
          <path id="Path_2482-3" data-name="Path 2482" d="M10.211,0A7.111,7.111,0,1,1,3.1,7.11,7.11,7.11,0,0,1,10.211,0" transform="translate(0.455 0.001)" fill="#bba4ff"/>
          <path id="Path_2483-3" data-name="Path 2483" d="M21.331,24.93A10.666,10.666,0,0,0,0,24.93" transform="translate(0 2.092)" fill="#bba4ff"/>
        </g>
      </g>
      <g id="Group_2346" data-name="Group 2346" transform="translate(59.447 52.241)">
        <g id="Group_2318-4" data-name="Group 2318" transform="translate(0 0)" clipPath="url(#clip-path-9)">
          <path id="Path_2482-4" data-name="Path 2482" d="M10.211,0A7.111,7.111,0,1,1,3.1,7.11,7.11,7.11,0,0,1,10.211,0" transform="translate(0.455 0.001)" fill="#bba4ff"/>
          <path id="Path_2483-4" data-name="Path 2483" d="M21.331,24.93A10.666,10.666,0,0,0,0,24.93" transform="translate(0 2.092)" fill="#bba4ff"/>
        </g>
      </g>
      <g id="Group_2347" data-name="Group 2347" transform="translate(34.44 52.241)">
        <g id="Group_2318-5" data-name="Group 2318" transform="translate(0 0)" clipPath="url(#clip-path-9)">
          <path id="Path_2482-5" data-name="Path 2482" d="M10.211,0A7.111,7.111,0,1,1,3.1,7.11,7.11,7.11,0,0,1,10.211,0" transform="translate(0.455 0.001)" fill="#bba4ff"/>
          <path id="Path_2483-5" data-name="Path 2483" d="M21.331,24.93A10.666,10.666,0,0,0,0,24.93" transform="translate(0 2.092)" fill="#bba4ff"/>
        </g>
      </g>
      <g id="Rectangle_1422" data-name="Rectangle 1422" stroke="#fff" strokeWidth="2" fill="url(#linear-gradient-20)">
        <rect width="83.737" height="42.222" rx="4" stroke="none"/>
        <rect x="1" y="1" width="81.737" height="40.222" rx="3" fill="none"/>
      </g>
      <g id="Group_2348" data-name="Group 2348" transform="translate(10.668 6.228)">
        <g id="Group_2324" data-name="Group 2324" transform="translate(0 6.031)">
          <g id="Group_2318-6" data-name="Group 2318" clipPath="url(#clip-path-12)">
            <path id="Path_2482-6" data-name="Path 2482" d="M11.5,0A8.4,8.4,0,1,1,3.1,8.4,8.4,8.4,0,0,1,11.5,0" transform="translate(1.101 2.148)" fill="#3001aa"/>
            <path id="Path_2483-6" data-name="Path 2483" d="M25.21,26.869a12.605,12.605,0,0,0-25.21,0" transform="translate(0 7.213)" fill="#3001aa"/>
          </g>
        </g>
        <rect id="Rectangle_1406" data-name="Rectangle 1406" width="5.443" height="7.442" transform="translate(34.417 22.325)" fill="#fff"/>
        <rect id="Rectangle_1407" data-name="Rectangle 1407" width="5.443" height="22.326" transform="translate(42.582 7.441)" fill="#fff"/>
        <rect id="Rectangle_1408" data-name="Rectangle 1408" width="5.443" height="14.884" transform="translate(50.747 14.884)" fill="#5b24ec"/>
        <rect id="Rectangle_1409" data-name="Rectangle 1409" width="5.443" height="29.767" transform="translate(58.912)" fill="#5b24ec"/>
      </g>
    </g>
    <g id="icon04_sec02" transform="translate(17.307 1031.632)">
      <g id="Group_2313-2" data-name="Group 2313" transform="translate(0 1)">
        <g id="Group_1255-2" data-name="Group 1255" transform="translate(0.002 54.278)">
          <path id="Subtraction_21-2" data-name="Subtraction 21" d="M28.333,27.1C12.71,27.1,0,22.99,0,17.935a3.028,3.028,0,0,1,.025-.4H0V0H.062C.535,2.336,3.685,4.508,8.933,6.116a68.825,68.825,0,0,0,19.4,2.505,68.837,68.837,0,0,0,19.4-2.505c5.248-1.608,8.4-3.78,8.872-6.116h.062V17.536h-.028a2.657,2.657,0,0,1,.028.4C56.669,22.99,43.957,27.1,28.333,27.1Z" transform="translate(0 0)" fill="#bba4ff"/>
        </g>
        <g id="Group_1254-2" data-name="Group 1254" transform="translate(0.001 32.566)">
          <path id="Subtraction_20-2" data-name="Subtraction 20" d="M28.334,27.1A67.771,67.771,0,0,1,8.3,24.418C2.948,22.686,0,20.383,0,17.934a3.064,3.064,0,0,1,.025-.4H0V0C0,2.628,2.951,5.1,8.308,6.966A63.292,63.292,0,0,0,28.334,9.856C43.958,9.856,56.67,5.435,56.67,0V17.535h-.027a3.161,3.161,0,0,1,.027.4c0,2.45-2.948,4.753-8.3,6.484A67.786,67.786,0,0,1,28.334,27.1Z" transform="translate(0 0)" fill="#bba4ff"/>
        </g>
        <path id="Subtraction_22-2" data-name="Subtraction 22" d="M28.337,27.1C12.712,27.1,0,22.991,0,17.934a2.716,2.716,0,0,1,.028-.4H0V0H.062c.471,2.336,3.621,4.508,8.87,6.117A68.839,68.839,0,0,0,28.337,8.623a68.821,68.821,0,0,0,19.4-2.507c5.248-1.608,8.4-3.781,8.87-6.117h.062V17.537h-.028a2.843,2.843,0,0,1,.028.4C56.671,22.991,43.961,27.1,28.337,27.1Z" transform="translate(0 12.088)" fill="#bba4ff"/>
        <path id="Path_2623-2" data-name="Path 2623" d="M28.335,0C43.984,0,56.67,4.137,56.67,9.24s-12.686,9.24-28.335,9.24S0,14.343,0,9.24,12.686,0,28.335,0Z" transform="translate(0.001 -1)" fill="#bba4ff"/>
      </g>
      <g id="Group_2314-2" data-name="Group 2314" transform="translate(31.887 32.81)">
        <path id="Path_2478-2" data-name="Path 2478" d="M115.946,53.35A24.785,24.785,0,1,1,91.161,28.565,24.786,24.786,0,0,1,115.946,53.35" transform="translate(-66.376 -28.565)" stroke="#fff" strokeWidth="3" fill="url(#linear-gradient)"/>
        <path id="Path_2479" data-name="Path 2479" d="M97.305,76.887,82.757,68.45V50.992L97.305,59.43Z" transform="translate(-72.205 -36.546)" fill="#bba4ff"/>
        <path id="Path_2480" data-name="Path 2480" d="M111.853,46.331,97.305,37.893,82.757,46.331l14.548,8.437Z" transform="translate(-72.205 -31.885)" fill="#fff"/>
        <path id="Path_2481" data-name="Path 2481" d="M105.342,76.887,119.89,68.45V50.992L105.342,59.43Z" transform="translate(-80.243 -36.546)" fill="#5b23ec"/>
      </g>
    </g>
    <path id="Path_3637" data-name="Path 3637" d="M-10120.6,11853.27v55.116H-11143" transform="translate(11567.635 -10439.412)" fill="none" stroke="#fff" strokeWidth="2"/>
    <g transform="matrix(1, 0, 0, 1, 0, -6)" filter="url(#Rectangle_2410)">
      <rect id="Rectangle_2410-2" data-name="Rectangle 2410" width="364.379" height="121" rx="12" transform="translate(1136.93 1326.01)" fill="#5b24ec"/>
    </g>
    <text id="API_Industry" data-name="API Industry" transform="translate(1232.945 1364.059)" fill="#fff" fontSize="22" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600"><tspan x="0" y="23">API Industry</tspan></text>
    <g id="Component_65_11" data-name="Component 65 – 11" transform="translate(1159.881 1354.01)">
      <g id="Rectangle_2365-11" data-name="Rectangle 2365" stroke="#fff" strokeWidth="1" fill="url(#linear-gradient-2)">
        <rect width="54" height="53" rx="3" stroke="none"/>
        <rect x="0.5" y="0.5" width="53" height="52" rx="2.5" fill="none"/>
      </g>
      <g id="Group_3655-11" data-name="Group 3655" transform="translate(-451.104 -74.619)">
        <g id="Group_1-18" data-name="Group 1" transform="translate(463.105 86.213)">
          <path id="Path_1-18" data-name="Path 1" d="M14.907,0,11.926,2.981,2.981,11.926,0,14.907l2.981,2.981L14.907,29.814l2.981-2.981L5.963,14.907l8.944-8.944,8.944,8.944L17.889,20.87l2.981,2.981,5.963-5.963,2.981-2.981-2.981-2.981L17.889,2.981Z" fill="#fff"/>
          <rect id="Rectangle_5-18" data-name="Rectangle 5" width="4.638" height="4.638" transform="translate(11.628 14.907) rotate(-45)" fill="#fff"/>
        </g>
      </g>
    </g>
   
    <text id="Datasets" transform="translate(115.307 1449.929)" fill="#fff" fontSize="24" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="25">Datasets</tspan></text>
    <g id="icon01_sec_02" transform="translate(26.307 1424.328)">
      <g id="Group_2260" data-name="Group 2260" clipPath="url(#clip-path-13)">
        <g id="Group_2259" data-name="Group 2259" transform="translate(0 0)">
          <g id="Group_2258" data-name="Group 2258" clipPath="url(#clip-path-13)">
            <g id="Group_2257" data-name="Group 2257" transform="translate(0 8.074)">
              <g id="Group_2256" data-name="Group 2256">
                <g id="Group_2255" data-name="Group 2255" clipPath="url(#clip-path-15)">
                  <path id="Path_2418" data-name="Path 2418" d="M2.307,12.16H49.6A2.307,2.307,0,0,1,51.9,14.467V85.98A2.307,2.307,0,0,1,49.6,88.288H2.307A2.307,2.307,0,0,1,0,85.98V14.467A2.307,2.307,0,0,1,2.307,12.16" transform="translate(0 -12.16)" fill="#fff"/>
                </g>
              </g>
            </g>
            <path id="Path_2419" data-name="Path 2419" d="M49.745,100.915,45.259,105.4a6.324,6.324,0,0,1,1.858,4.486h6.344a12.648,12.648,0,0,0-3.716-8.972" transform="translate(-15.209 -33.912)" fill="#3423c9"/>
            <path id="Path_2420" data-name="Path 2420" d="M40.161,101.857a6.33,6.33,0,0,1,3.384,1.761l4.486-4.486a12.655,12.655,0,0,0-6.769-3.522Z" transform="translate(-13.496 -32.13)" fill="#f157ff"/>
            <path id="Path_2421" data-name="Path 2421" d="M34.284,95.512a12.678,12.678,0,0,0-14.891,12.494h6.343a6.341,6.341,0,0,1,7.446-6.247Z" transform="translate(-6.517 -32.03)" fill="#7c41ff"/>
            <rect id="Rectangle_1380" data-name="Rectangle 1380" width="4.614" height="6.308" transform="translate(12.876 32.765)" fill="#7c41ff"/>
            <rect id="Rectangle_1381" data-name="Rectangle 1381" width="4.614" height="18.924" transform="translate(19.796 20.149)" fill="#7c41ff"/>
            <rect id="Rectangle_1382" data-name="Rectangle 1382" width="4.614" height="12.616" transform="translate(26.718 26.457)" fill="#f157ff"/>
            <rect id="Rectangle_1383" data-name="Rectangle 1383" width="4.614" height="25.232" transform="translate(33.638 13.841)" fill="#3423c9"/>
            <path id="Path_2422" data-name="Path 2422" d="M60.022,0H12.731a2.307,2.307,0,0,0-2.307,2.307V5.767H55.408a2.307,2.307,0,0,1,2.307,2.307V76.128h2.307a2.307,2.307,0,0,0,2.307-2.307V2.307A2.307,2.307,0,0,0,60.022,0" transform="translate(-3.503 0)" fill="#bba4ff"/>
            <path id="Path_2423" data-name="Path 2423" d="M33.543,74.376l3.3,3.3,5-5L43.7,74.536,36.84,81.4l-3.3-3.295-5,5L26.68,81.24" transform="translate(-8.966 -24.421)" fill="#3423c9"/>
            <path id="Path_2424" data-name="Path 2424" d="M45.486,70.071l7.618-2.04-2.04,7.618" transform="translate(-15.285 -22.861)" fill="#3423c9"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <Link href="/products/data-governance">
                    <rect   onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} className={styles.rectangle_parent_product} id="Rectangle Data governance" width="100%" height="300" rx="12" fill="#ffffff00"  >
                        {/* Data Governance */}
                    </rect>

                       
                </Link>
                 <Link href="/products/api-governance">
                    <rect onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} id="Rectangle API governance" y="330" width="100%" height="300" rx="12" fill="#ffffff00"  >
                        {/* API Governance */}
                    </rect>
                </Link>
                <Link href="/products/open-ecosystem-consultancy">
                    <rect onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} id="Rectangle Open ecosystem consultancy" y="710" width="100%" height="150" rx="12" fill="#ffffff00"  >
                        {/* Open ecosystem consultancy */}
                    </rect>
                </Link>
                
                <Link href="/products/data-products">
                    <rect onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} id="Rectangle Data products" y="920" width="100%" height="300" rx="12" fill="transparent" pointerEvents='fill' >
                        {/* Data Products */}
                    </rect>
                </Link>
                
                <Link href="/products/datasets">
                    <rect onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} id="Rectangle Datasets" y="1315" width="100%" height="300" rx="12" fill="none" pointerEvents='all' >
                     
                    </rect>
                </Link>

                <Link href="/products/speaker-engagement">
                    <rect onMouseEnter={higlightSection} onMouseLeave={unhighlightSection} id="Rectangle Speaker engagement" y="1700" width="100%" height="170" rx="12" fill="#ffffff00"   >
                        {/* Speaker engagement */}
                    </rect>
                </Link>
</svg>

            </div>
        </section>
        

    )
}

