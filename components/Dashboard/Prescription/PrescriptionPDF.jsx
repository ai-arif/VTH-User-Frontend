import jsPDF from "jspdf";

export const handleDownload = (prescription) => {
  const doc = new jsPDF();
  // const medicines = prescription?.medicines?.map((medicine) => medicine.name);
  // const tests = prescription?.tests?.map((test) => test.name);

  doc.setFontSize(18);
  doc.text("Prescription", 105, 10, null, null, "center"); // Centered heading
  doc.setFontSize(14);
  doc.text(
    "Veterinary Teaching Hospital, Mymensingh",
    105,
    15,
    null,
    null,
    "center",
  ); // Centered heading
  doc.setFontSize(12);
  doc.text(`Name: ${prescription?.appointment?.ownerName}`, 10, 20);
  doc.text(`District: ${prescription?.appointment?.district}`, 10, 30);
  doc.text(`Upazila: ${prescription?.appointment?.upazila}`, 10, 40);
  doc.text(`Address: ${prescription?.appointment?.address}`, 10, 50);
  doc.text(`Case No: ${prescription?.appointment?.caseNo}`, 10, 60);
  doc.text(
    `Total Animals: ${prescription?.appointment?.numberOfAnimals}`,
    10,
    70,
  );
  // doc.text(`Case No: ${medicines}`, 10, 80);
  // doc.text(`Case No: ${tests}`, 10, 90);

  // Add more prescription details as needed
  // if (prescription?.advice) {
  //   doc.text(`Advice: ${prescription?.appointment?.advice}`, 10, 100);
  // }
  // if (prescription?.diagnosis) {
  //   doc.text(`Diagnosis: ${prescription?.appointment?.diagnosis}`, 10, 110);
  // }

  doc.save(`Prescription-${prescription?.appointment?.caseNo}.pdf`);
};
