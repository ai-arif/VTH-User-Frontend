import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

const PrescriptionPDF = ({ prescriptions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>Prescriptions</Text>
      </View>
      {prescriptions.map((prescription, index) => (
        <View key={index} style={styles.section}>
          <Text>Case No: {prescription.appointment.caseNo}</Text>
          <Text>Total Animals: {prescription.appointment.numberOfAnimals}</Text>
          {/* Add more prescription details here */}
        </View>
      ))}
    </Page>
  </Document>
);

export default PrescriptionPDF;
