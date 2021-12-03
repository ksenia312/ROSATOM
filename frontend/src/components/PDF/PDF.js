import {connect} from "react-redux";
import React from "react";
import style from './PDF.module.scss'
import {Document, Page, PDFViewer, StyleSheet, Text, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#ffffff',
    flexDirection:'row'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
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
    console.log(this.props.data)
    return (
      <div className={style.PDF__container}>
        <PDFViewer className={style.PDF}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>{this.props.data.time}</Text>
              </View>
              <View style={styles.section}>
                <Text>{this.props.data.date}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    )
  }
})
