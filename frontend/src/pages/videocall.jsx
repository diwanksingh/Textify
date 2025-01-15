import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len = 5) {
  let result = "";
  const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  const maxPos = chars.length;

  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return result;
}

export function getUrlParams(url = window.location.href) {
  const urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

const appID = parseInt(import.meta.env.VITE_ZEGO_APP_ID, 10); // Ensure `appID` is a number
const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

export default function MeetingRoom () {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = () => {
      if (!appID || !serverSecret) {
        console.error("App ID or Server Secret is missing. Check your .env file.");
        return;
      }

      // Generate Kit Token
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5),
        randomID(5)
      );

      // Create and join the room
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Personal link",
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // For 1-on-1 calls, use `ZegoUIKitPrebuilt.OneONoneCall`.
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
   
    ></div>
  );
}