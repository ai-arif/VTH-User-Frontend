import Loader from "@/components/UI/Loader";
import axiosInstance from "@/utils/axiosInstance";
import {
  Document,
  PDFDownloadLink,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 12,
  },
  button: {
    marginTop: 10,
  },
});

const PrescriptionDocument = ({ prescription }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Prescription</Text>
        <Text style={styles.text}>
          Case No: {prescription?.appointment?.caseNo}
        </Text>
        <Text style={styles.text}>
          Total Animals: {prescription?.appointment?.numberOfAnimals}
        </Text>
        {/* Add more prescription details here */}
      </View>
    </Page>
  </Document>
);

const ViewPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

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

  const handleDownload = (prescription) => {
    const doc = new jsPDF();
    doc.text(
      `Prescription for Case No: ${prescription?.appointment?.caseNo}`,
      10,
      10,
    );
    doc.text(
      `Total Animals: ${prescription?.appointment?.numberOfAnimals}`,
      10,
      20,
    );
    // Add more prescription details as needed
    doc.save(`Prescription-${prescription?.appointment?.caseNo}.pdf`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tw-overflow-auto">
      <table className="table text-center">
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
                  onClick={() => setSelectedPrescription(prescription)}
                >
                  View
                </button>
                <PDFDownloadLink
                  document={
                    <PrescriptionDocument prescription={prescription} />
                  }
                  fileName={`Prescription-${prescription?.appointment?.caseNo}.pdf`}
                >
                  {({ loading }) =>
                    loading ? (
                      "Loading document..."
                    ) : (
                      <button className="btn btn-secondary">Download</button>
                    )
                  }
                </PDFDownloadLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPrescription && (
        <div className="tw-modal tw-flex tw-items-center tw-justify-center">
          <div className="tw-rounded tw-bg-white tw-p-4 tw-shadow-lg">
            <button
              className="tw-btn tw-btn-danger"
              onClick={() => setSelectedPrescription(null)}
            >
              Close
            </button>
            <PDFViewer width="600" height="800">
              <PrescriptionDocument prescription={selectedPrescription} />
            </PDFViewer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPrescription;
