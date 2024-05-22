import Loader from "@/components/UI/Loader";
import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { handleDownload } from "./PrescriptionPDF";

const ViewPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(prescriptions);

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
    <div className="table-responsive">
      <table className="table text-center tw-overflow-scroll tw-text-xs lg:tw-text-base">
        <thead>
          <tr>
            <th scope="col">Case No.</th>
            <th scope="col">Total Animals</th>
            <th scope="col">View Prescription</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription?._id}>
              <td>{prescription?.appointment?.caseNo}</td>
              <td>{prescription?.appointment?.numberOfAnimals}</td>
              <td>
                <button
                  className="btn btn-primary"
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
