import React, { useState } from "react";
import Button from "../../ui/Button";
import Image from "next/image";
interface ProjectProps {
  activeContent: string;
  setActiveContent: (content: string) => void;
}
const images = [
  "/portfolio/asset/image/p_backoffice/Screenshot 2025-03-18 123110.png",
  "/portfolio/asset/image/p_backoffice/Screenshot 2025-03-18 123122.png",
  "/portfolio/asset/image/p_backoffice/Screenshot 2025-03-18 123201.png",
  "/portfolio/asset/image/p_backoffice/Screenshot 2025-03-18 123235.png",
];
const ProjectBackOffice: React.FC<ProjectProps> = ({ setActiveContent }) => {
  return (
    <div className="w-full flex flex-col h-[55vh] sm:p-8 p-2 backdrop-blur-sm">
      <h1 className="text-xl sm:text-2xl font-mono font-bold text-primary glow text-center">
        Backoffice Order Management System for ISP
      </h1>
      <div className="overflow-auto flex items-center flex-col space-y-4 mt-4 mb-2">
        <Image
          className="rounded"
          src={"/portfolio/asset/image/p_backoffice/backoffice.jpeg"}
          width={400}
          height={400}
          alt="IOT"
        />
        <div className="sm:text-md text-sm font-mono text-accent glow-accent w-full mx-auto mb-2 px-2 space-y-2">
          <p className="text-justify">
            The Order Management Backoffice System for ISP is a web-based
            platform designed to streamline and automate the process of managing
            customer orders for an Internet Service Provider (ISP). This system
            integrates multiple roles, including Sales, Inputer/SPP, Helpdesk,
            and Technicians, ensuring efficient order processing from customer
            registration to service installation and validation.
          </p>
          <h2 className="font-bold">Key Features:</h2>
          <ul>
            <li>
              ✅ Automated Order Handling – Orders are initiated via a Telegram
              bot for Sales and then processed through the system.
            </li>
            <li>
              ✅ Role-based Workflow – Each role has specific tasks, from order
              validation to technician dispatch and service activation.
            </li>
            <li>
              ✅ Technician Dispatch via Telegram – Helpdesk assigns tasks to
              available technicians, who receive notifications through a
              Telegram bot.
            </li>
            <li>
              ✅ Real-time Monitoring and Updates – Order status is updated
              dynamically to reflect each stage of processing.
            </li>
            <li>
              ✅ Multi-platform Access – Web interface built with CodeIgniter
              for Inputer/SPP & Helpdesk, while Sales and Technicians use
              Telegram bots.
            </li>
            <li>
              ✅ Database Integration – Stores and tracks customer and order
              details using MySQL.
            </li>
          </ul>
          <h2 className="font-bold">System Workflow:</h2>
          <ul>
            <li>
              1️⃣ Order Creation by Sales Sales agents register new customer
              orders via a Telegram bot, sending the data to the system. Orders
              are initially marked as "New" in the database.
            </li>
            <li>
              2️⃣ Order Validation by Inputer/SPP Inputer/SPP reviews and
              validates customer data. If valid, the order status changes to
              "Validated", and additional required data is added.
            </li>
            <li>
              3️⃣ Helpdesk Assigns Technician for Site Survey & Installation The
              Helpdesk team checks available technicians and assigns one for a
              site survey and installation. The selected technician receives a
              dispatch notification via a Telegram bot.
            </li>
            <li>
              4️⃣ Technician Conducts Survey & Installation The technician visits
              the customer location. If installation is successful, the
              technician updates the order status through the Telegram bot.
            </li>
            <li>
              5️⃣ Helpdesk Finalizes the Installation Process Helpdesk performs
              final configuration and validation. Order status is updated
              accordingly.
            </li>
            <li>
              6️⃣ Final Validation by Inputer/SPP The Inputer/SPP team performs a
              final verification before marking the order as "Completed".
            </li>
          </ul>

          <h2 className="font-bold">Technologies Used:</h2>
          <ul>
            <li>Backend: CodeIgniter (PHP framework)</li>
            <li>Frontend: Bootstrap</li>
            <li>Database: MySQL</li>
            <li>Bot Integration: Python</li>
            <li>Hosting: V1:VPS AWS, V2: VPS Google Cloud Platform</li>
          </ul>
          <h2 className="font-bold">Benefits:</h2>
          <ul>
            <li>
              ✅ Improved Efficiency – Reduces manual work by automating order
              processing and technician assignments.
            </li>
            <li>
              ✅ Seamless Communication – Integrated Telegram bots ensure smooth
              communication between departments.
            </li>
            <li>
              ✅ Real-time Order Tracking – Provides up-to-date status on all
              orders, reducing delays and errors.
            </li>
            <li>
              ✅ Scalability – Supports multiple locations and a growing number
              of orders.
            </li>
            <li>
              ✅ User-friendly Interface – Intuitive web dashboard for
              Inputer/SPP & Helpdesk with minimal training required.
            </li>
            <li>
              ✅ Remote Access & Monitoring – Sales, technicians, and helpdesk
              teams can manage orders anytime, anywhere.
            </li>
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

export default ProjectBackOffice;
