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

  const handlePayment = async (id) => {
    try {
      const res = await axiosInstance.post(`/user-appointment/payment/${id}`);
      if (res.status === 200) {
        const { url } = res.data;
        window.location.href = url; // Redirect to the URL from the response
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tw-overflow-x-auto">
      <table className="tw-min-w-full tw-overflow-scroll tw-border tw-border-gray-300 tw-bg-white tw-text-xs lg:tw-text-base">
        <thead>
          <tr>
            <th
              className="tw-whitespace-nowrap tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Case No.
            </th>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Date & Time
            </th>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Department
            </th>
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Status
            </th>
            {/* to do */}
            <th
              className="tw-border tw-border-gray-300 tw-px-4 tw-py-2"
              scope="col"
            >
              Payment
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment?._id} className="tw-border tw-border-gray-300">
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                {appointment?.caseNo}
              </td>
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                {formatDate(appointment.date)}
              </td>
              <td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">
                {appointment?.department?.name}
              </td>
              <td
                className={`tw-border tw-border-gray-300 tw-px-4 tw-py-2 tw-capitalize ${appointment.status === "approved" ? "tw-text-green-500" : "tw-text-red-500"}`}
              >
                {appointment?.status}
              </td>
              <td className="tw-text-center">
                {appointment?.payment === "unpaid" ? (
                  <button
                    className="tw-rounded tw-border-0 tw-bg-blue-500 tw-px-3 tw-py-1 tw-text-white hover:tw-bg-blue-600"
                    type="btn"
                    onClick={() => {
                      handlePayment(appointment?._id);
                    }}
                  >
                    Pay
                  </button>
                ) : (
                  <p className="tw-text-center tw-text-green-600">Paid</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="tw-flex tw-justify-end tw-pt-4 lg:tw-pt-6">
        <div>
          <ul className="tw-flex tw-list-none tw-p-0">
            <li className="tw-mx-1">
              <a
                className="tw-block tw-rounded tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1 tw-text-gray-700 hover:tw-bg-gray-200"
                href="#"
              >
                Previous
              </a>
            </li>
            <li className="tw-mx-1">
              <a
                className="tw-block tw-rounded tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1 tw-text-gray-700 hover:tw-bg-gray-200"
                href="#"
              >
                1
              </a>
            </li>
            <li className="tw-mx-1">
              <a
                className="tw-block tw-rounded tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1 tw-text-gray-700 hover:tw-bg-gray-200"
                href="#"
              >
                2
              </a>
            </li>
            <li className="tw-mx-1">
              <a
                className="tw-block tw-rounded tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1 tw-text-gray-700 hover:tw-bg-gray-200"
                href="#"
              >
                3
              </a>
            </li>
            <li className="tw-mx-1">
              <a
                className="tw-block tw-rounded tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1 tw-text-gray-700 hover:tw-bg-gray-200"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
