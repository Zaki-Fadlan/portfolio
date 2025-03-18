import React, { useState } from "react";
import Button from "../../ui/Button";
import Image from "next/image";
interface ProjectProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const images = [
  "/asset/image/p_iot/1000026487.jpg",
  "/asset/image/p_iot/1000026798.jpg",
  "/asset/image/p_iot/IMG_20240908_233214_976.jpg",
  "/asset/image/p_iot/IMG_20240908_233215_108.jpg",
  "/asset/image/p_iot/IMG_20240908_233252_559.jpg", // Gambar ke-5 (akan tersembunyi)
];
const ProjectATSAMF: React.FC<ProjectProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <h1 className="text-xl sm:text-2xl font-mono font-bold text-primary glow text-center">
        Smart Centralized ATS-AMF Power Management System
      </h1>
      <div className="overflow-auto flex items-center flex-col space-y-4 mt-4 mb-2">
        <Image
          className="rounded"
          src={"/asset/image/p_iot/IoT.jpeg"}
          width={400}
          height={400}
          alt="IOT"
        />
        <div className="sm:text-md text-sm font-mono text-accent glow-accent w-full mx-auto mb-2 px-2 space-y-2">
          <p className="text-justify">
            The Smart Centralized ATS-AMF Power Management System is an
            prototype automated system designed to manage and monitor power
            supply transitions between the main grid (PLN) and a generator
            (genset) across multiple locations. This system utilizes ESP8266 as
            the main microcontroller, ZMPT101B sensors for three-phase voltage
            monitoring, and relays for automatic power switching.
          </p>
          <h2 className="font-bold">Key Features:</h2>
          <ul>
            <li>
              ✅ Automatic Power Switching (ATS-AMF): Seamless transition
              between the main grid and the generator during power failures.
            </li>
            <li>
              ✅ Multi-Location Management: Manage and monitor multiple
              locations from a centralized platform.{" "}
            </li>
            <li>
              ✅ Three-Phase Voltage Monitoring: Uses ZMPT101B sensors to detect
              voltage stability.
            </li>
            <li>
              ✅ Remote Control via Website & Telegram Bot: Manage and monitor
              the system through a Spring Boot web app or a Telegram bot.
            </li>
            <li>
              ✅ Data Logging & Analysis: Stores voltage data in a database for
              performance analysis.{" "}
            </li>
            <li>
              ✅ Alerts & Notifications: Sends real-time notifications in case
              of unstable voltage or power disruptions.
            </li>
          </ul>
          <h2 className="font-bold">System Workflow:</h2>
          <ul>
            <li>
              1️⃣ Monitoring Main Voltage ZMPT101B sensors are installed on
              three-phase power lines to measure voltage levels. The data is
              processed by an ESP8266, which compares the readings to predefined
              voltage thresholds.
            </li>
            <li>
              2️⃣ Fault Detection and Power Source Switching If any phase
              experiences anomalies or voltage fluctuations, the system
              activates the ATS-AMF relay. The ATS automatically disconnects
              from the main power grid (PLN) and switches to the generator. Once
              the PLN voltage is stable, the system automatically switches back
              to the grid.{" "}
            </li>
            <li>
              3️⃣ Remote Monitoring and Control A Telegram bot and Spring
              Boot-based website provide real-time monitoring and control.
              Admins can view power status across multiple locations. If
              necessary, the generator can be manually turned on or off
              remotely.
            </li>
            <li>
              4️⃣ Data Logging and Analysis Every 10 minutes, voltage data from
              all locations is stored in a database for performance tracking.
              This data helps in monitoring power reliability and detecting
              potential issues in the power supply.
            </li>
          </ul>

          <h2 className="font-bold">Technologies Used:</h2>
          <ul>
            <li> Hardware: ESP8266, ZMPT101B, Relays </li>
            <li>
              Software: Spring Boot (Website), Postgresql (Database), Arduino
              IDE, Google App Script (Bot Telegram)
            </li>
            <li>Communication Protocols: WiFi, MQTT/HTTP for data exchange</li>
          </ul>
          <h2 className="font-bold">Benefits:</h2>
          <ul>
            <li>
              🔹 Monitor & control the system from anywhere via web or Telegram
              bot
            </li>
            <li>
              🔹 Manage power supply across multiple locations in a single
              centralized system
            </li>
            <li>
              🔹 Prevent equipment damage due to unstable voltage fluctuations
            </li>
            <li>🔹 Improve efficiency & safety of power management systems</li>
          </ul>
          <h2 className="font-bold">Galery:</h2>
          {/* <div>
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/rgNdeflYdYw?si=GdcVR4wWqPaXD0TW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div> */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {images.map((src, index) => (
              <div key={index} className="relative w-full h-40 sm:h-48">
                <Image
                  className="rounded object-cover"
                  src={src}
                  fill
                  alt="IOT"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-start mt-auto">
        <Button
          text="Project List"
          onClick={() => setActiveContent("projects")}
        />
      </div>
    </div>
  );
};

export default ProjectATSAMF;
