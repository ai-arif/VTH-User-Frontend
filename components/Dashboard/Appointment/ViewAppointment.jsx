import Loader from "@/components/UI/Loader";
import axiosInstance from "@/utils/axiosInstance";
import { formatDate } from "@/utils/formatDate";
import React, { useEffect, useState } from "react";

const ViewAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get("/user-appointment");
        setAppointments(res?.data?.data?.appointments);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tw-overflow-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Case No.</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Department</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment?._id}>
              <td>{appointment?.caseNo}</td>
              <td>{formatDate(appointment.date)}</td>
              <td>{appointment?.department?.name}</td>
              <td
                className={`text-capitalize ${appointment.status === "approved" ? "text-success " : "text-danger"}`}
              >
                {appointment?.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end pt-2">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ViewAppointment;
