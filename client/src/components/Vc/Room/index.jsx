// import React from "react";
// import {useParams} from "react-router-dom"
// import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
// import './RoomPage.css';

// const RoomPage = ()=>{
//     const {roomId} = useParams();
    

//     const myMeeting = async (element)=>{
//         const appID =1285734754;
//         const serverSecret = "54a959c62890c2d2faa90b216c0cca6b"
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(), "Piyush Garg");
//         const zc = ZegoUIKitPrebuilt.create(kitToken);
//         zc.joinRoom({
//             container:element,
//             sharedLinks:[{
//                 name:"Copy Link",
//                 url:`http://localhost:3000/room/${roomId}`,
//             }],
//             scenario:{
//                 mode: ZegoUIKitPrebuilt.OneONoneCall,
//             },
//             showScreenSharingButton:true,

//         });
//     }

//     return <div>
//         <div ref={myMeeting}/>
//     </div>
// };

// export default RoomPage;







// import React from "react";
// import { useParams } from "react-router-dom";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// const RoomPage = () => {
//   const { roomId } = useParams();

//   const myMeeting = async (element) => {
//     const appID = 1285734754;
//     const serverSecret = "54a959c62890c2d2faa90b216c0cca6b";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomId,
//       Date.now().toString(),
//       "Piyush Garg"
//     );
//     const zc = ZegoUIKitPrebuilt.create(kitToken);
//     zc.joinRoom({
//       container: element,
//       sharedLinks: [
//         {
//           name: "Copy Link",
//           url: `http://localhost:3000/room/${roomId}`,
//         },
//       ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.OneONoneCall,
//       },
//       showScreenSharingButton: true,
//     });
//   };

//   return (
//     <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Segoe UI, sans-serif",backgroundColor:"#D1B8FF"}}>
//       {/* Hero Section */}
//       <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
//         {/* <img
//           src="https://images.unsplash.com/photo-1612831455543-3e5fbb6b8cb1?auto=format&fit=crop&w=1500&q=80"
//           alt="Meeting"
//           style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
//         /> */}
//         <div
//         //   style={{
//         //     position: "absolute",
//         //     inset: 0,
//         //     background: "linear-gradient(to right, black, purple, black)",
//         //     opacity: 0.7,
//         //   }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
            
//             alignItems: "center",
//             textAlign: "center",
//             padding: "1rem",
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem",marginTop:"-5px" }}>Welcome to the Video Room</h1>
//           <p style={{ fontSize: "1.2rem", color: "black", maxWidth: "600px" , marginBottom:"-20px"}}>
//             Share the link and start your secure one-on-one video call.
//           </p>
//         </div>
//       </div>

//       {/* Room Section */}
//       <div style={{ display: "flex", justifyContent: "center", padding: "2rem 1rem", marginTop:"10px" }}>
//         <div
//           style={{
//             backgroundColor: "#2d2d2d",
//             borderRadius: "1rem",
//             padding: "2rem",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 0 30px rgba(128, 0, 128, 0.4)",
//           }}
//         >
//           <h2 style={{ color: "#d4bfff", marginBottom: "1rem" }}>Room ID: {roomId}</h2>
//           <div
//             style={{
//               height: "600px",
//               borderRadius: "0.75rem",
//               overflow: "hidden",
//               border: "1px solid #555",
//             }}
//             ref={myMeeting}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomPage;



import Navbar from '../../Navbar'; // adjust this path based on actual location

import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import './RoomPage.css';

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 1285734754;
    const serverSecret = "54a959c62890c2d2faa90b216c0cca6b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Piyush Garg"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <>
      <Navbar />
      <div className="room-page">
        <div className="hero">
          <div className="hero-overlay" />
          <div className="hero-text">
            <h1>Welcome to the Video Room</h1>
            <p>Share the link and start your secure one-on-one video call.</p>
          </div>
        </div>
  
        <div className="room-container">
          <div className="room-card">
            <h2 className="room-id">Room ID: {roomId}</h2>
            <div className="video-box" ref={myMeeting} />
          </div>
        </div>
      </div>
    </>
  );
  
};

export default RoomPage;
