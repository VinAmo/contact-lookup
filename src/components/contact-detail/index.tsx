"use client";

import Error from "@/app/error";
import Image from "next/image";

// template refer to https://tailwindcomponents.com/component/profile-card-2
const ContactDetail = () => {
  const data = JSON.parse(localStorage.getItem("contactData") || "{}");
  if (!data) return Error({ message: "No data found" });

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <Image
              className="rounded-full mx-auto"
              width={100}
              height={100}
              src={data.avatarImage}
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {data.firstName} {data.lastName}
            </h3>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{data.phone}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{data.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
