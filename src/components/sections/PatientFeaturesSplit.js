import React, {useState} from 'react'
import MaterialTable from "../elements/MaterialTable"
import VisibilityIcon from "@material-ui/icons/Visibility";
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Paper from '@mui/material/Paper';
import SectionHeader from '../sections/partials/SectionHeader';
const Patients = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    pushLeft,
    ...props
  })  => {
    const [newData, setNewData] = useState([]);
   
    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
      const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
      );
        
    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );
    const column = [
        { title: "Paitent Name", field: "name" },
        { title: "Target Name", field: "targetName" },
        { title: "Last Target Generated on", field: "lastReportGenerated" },
    ];
  
    const onRowClick = ()=>{
            console.log("dssdsd")
    }
    const sectionHeader = {
        title: 'List of all the Patients.',
    };
    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
            <div className={innerClasses}>
                <div className={splitClasses}>
            {/* <Paper style={{borderRadius:'10px'}}> */}
              <MaterialTable
                columns={column}
                data={newData}
                actions={[
                {
                    icon: () => <VisibilityIcon />,
                    tooltip: "View Vulnerability Tests",
                    onClick: (event, rowData, oldData) => {
                    onRowClick(event, rowData, oldData, "RA");
                    },
                },
                ]}
                options={{
                headerStyle: {
                    background: "linear-gradient(#fef9f5,#fef9f5)",
                    whiteSpace: "nowrap",
                    padding: "10px 10px 10px 50px" 
                },

                thirdSortClick: false,
                actionsColumnIndex: -1,
                paging: true,
                sorting: true,
                search: false,
                filter: true,
                draggable: false,
                pageSize: 25,
                pageSizeOptions: [25, 50, 75, 100], // rows selection options
                }}
              />
            {/* </Paper> */}
            </div>
          </div>
        </div>
        </section>
    )
}

export default Patients
