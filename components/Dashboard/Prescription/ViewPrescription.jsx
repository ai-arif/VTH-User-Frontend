import Loader from "@/components/UI/Loader";
import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";

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
    <div className="tw-overflow-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Case No.</th>
            <th scope="col">Total Animals.</th>
            <th scope="col">View Prescription</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription?._id}>
              <td>{prescription?.appointment?.caseNo}</td>
              <td>{prescription?.appointment?.numberOfAnimals}</td>
              <td>
                <button className="btn btn-primary">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPrescription;
