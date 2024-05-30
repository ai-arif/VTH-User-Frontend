import Loader from "@/components/UI/Loader";
import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { handleDownload } from "./PrescriptionPDF";

const ViewPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const res = await axiosInstance.get("/user-prescription");
        setPrescriptions(res?.data?.data?.prescriptions);
      } catch (error) {
        console.error("Failed to fetch prescription:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescription();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tw-overflow-x-auto">
      <table className="tw-min-w-full tw-overflow-scroll tw-border tw-border-gray-300 tw-bg-white tw-text-center tw-text-xs lg:tw-text-base">
        <thead>
          <tr>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Case No.
            </th>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Owner Name
            </th>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Owner Name
            </th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr
              key={prescription?._id}
              className="tw-border tw-border-gray-300"
            >
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                {prescription?.appointment?.caseNo}
              </td>
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                {prescription?.appointment?.ownerName}
              </td>
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                <button
                  className="tw-rounded tw-border-0 tw-bg-blue-500 tw-px-3 tw-py-1 tw-text-white hover:tw-bg-blue-600"
                  onClick={() => handleDownload(prescription)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPrescription;
