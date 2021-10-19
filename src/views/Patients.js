import React, {useState} from 'react'
import MaterialTable from "../components/elements/MaterialTable"
import VisibilityIcon from "@material-ui/icons/Visibility";
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
import Paper from '@mui/material/Paper';
import SectionHeader from '../components/sections/partials/SectionHeader';
import PatientFeaturesTiles from '../components/sections/PatientFeaturesTiles';
import PatientFeaturesSplit from '../components/sections/PatientFeaturesSplit';

const Patients = ()  => {
  
    return (
      <>
        <PatientFeaturesTiles />
        <PatientFeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      </>
    )
}

export default Patients
