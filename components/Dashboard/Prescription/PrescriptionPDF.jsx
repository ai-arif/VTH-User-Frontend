import jsPDF from "jspdf";

export const handleDownload = (prescription) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Prescription", 105, 10, null, null, "center"); // Centered heading
  doc.setFontSize(12);
  doc.text(`Case No: ${prescription?.appointment?.caseNo}`, 10, 30);
  doc.text(
    `Total Animals: ${prescription?.appointment?.numberOfAnimals}`,
    10,
    40,
  );

  // Add more prescription details as needed
  if (prescription?.details) {
    doc.text("Details:", 10, 50);
    prescription.details.forEach((detail, index) => {
      doc.text(`${index + 1}. ${detail}`, 10, 60 + index * 10);
    });
  }
  doc.save(`Prescription-${prescription?.appointment?.caseNo}.pdf`);
};
