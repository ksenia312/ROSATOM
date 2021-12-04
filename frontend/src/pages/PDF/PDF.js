import {connect} from "react-redux";
import React from "react";
import style from './PDF.module.scss'
import {Document, Page, PDFViewer, StyleSheet, Text} from '@react-pdf/renderer';

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  section: {
    marginLeft: 10,
    padding: 10,
  },
  large_section: {
    marginLeft: 35,
    padding: 5,
    fontWeight:700
  }
});
export default connect(
  (state) => ({
    pdfID: new URLSearchParams(state.router.location.query).get('accidentID'),
    accidents_data: state.accidents.getIn(['accidents_data']).toJS(),
    data: state.accidents.getIn(['dropdown']).toJS(),
  }),
  (dispatch) => ({})
)(class PDF extends React.Component {

  render() {
    return (
      <div className={style.PDF__container}>
        <PDFViewer className={style.PDF}>
          <Document>
            <Page size="A4" style={styles.page}>
              <Text style={styles.section}>Time: {this.props.data.time}</Text>
              <Text style={styles.section}>Date: {this.props.data.date}</Text>
              <Text style={styles.section}>Coordinates:</Text>
              <Text style={styles.large_section}>Lat: {this.props.data?.mark.lat}</Text>
              <Text style={styles.large_section}>Lng: {this.props.data?.mark.lng}</Text>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    )
  }
})
