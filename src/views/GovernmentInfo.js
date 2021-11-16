import React,{useState, useEffect} from 'react'
import SectionHeader from '../components/sections/partials/SectionHeader';
import classNames from 'classnames';
import Paper from '@mui/material/Paper';
import MaterialTable from "../components/elements/MaterialTable"
import VisibilityIcon from "@material-ui/icons/Visibility";
import { GET_GOVINFO_DATA } from "../graphql/queries/GovInfo";
import { useLazyQuery } from '@apollo/client';

const GovernmentInfo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const [newData, setNewData] = useState([]);
   
  const column = [
    { title: "Country", field: "Country" },
    { title: "Possession", field: "Possession" },
    { title: "Sale", field: "Sale" },
    { title: "Transport", field: "Transport" },
    { title: "Cultivation", field: "Cultivation" },
    { title: "Notes", field: "Notes" },
  ];

  const [getGovernmentInfo] = useLazyQuery(GET_GOVINFO_DATA, {
    fetchPolicy: "cache-and-network",
    onCompleted: (responseData) => {
      console.log("responseData", responseData.govInfos)
      // setNewData(responseData.govInfos)
      createTableDataObject(responseData.govInfos);
    },
  });

   const createTableDataObject = (data) => {
    let arr = [];

    if (data !== 0) {
      data.map((element, i) => {
        let obj = {};
        obj["id"] = element.id;
        obj["Country"] = element.Country;
        obj["Possession"] = element.Possession;
        obj["Sale"] = element.Sale;
        obj["Transport"] = element.Transport
        obj["Cultivation"] = element.Cultivation;
        obj["Notes"] = element.Notes;
        arr.push(obj);
      });
      setNewData(arr);
    }
  };

  useEffect(() => {
    getGovernmentInfo()
  }, [])

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Government Info',
    paragraph: 'LEGALITY OF CANNABIS BY COUNTRY.'
  };
  console.log("newData",newData)
  const onRowClick = () => {
    console.log("dssdsd")
  };

    return (
      <section
        {...props}
        className={outerClasses}
      >
      <div className="container">
        <div className={innerClasses}>
         
        </div> 
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          </div>
          <p className="m-0">
          The legal status of cannabis is evolving rapidly.  Many Countries are now seeing the benefits of Cannabis and have slowly but surely begun the process of legalizing its uses for certain Industrial and Medicinal purposes. The list below will be updated regularly as and when new developments with regards to Cannabis have taken place in a specific country.
          </p>
          <div className={innerClasses}>
          
          </div> 
          <Paper style={{borderRadius:'50px', padding:'50px',}}>
            <MaterialTable
                columns={column}
                data={newData}
                actions={[
                // {
                //     icon: () => <VisibilityIcon />,
                //     tooltip: "View Vulnerability Tests",
                //     onClick: (event, rowData, oldData) => {
                //     onRowClick(event, rowData, oldData, "RA");
                //     },
                // },
                ]}
                options={{
                headerStyle: {
                  background: "linear-gradient(#939496,#fef9f5)",
                  whiteSpace: "nowrap",
                  paddingLeft: "20px",
                  borderRadius:'50px',
                },
                rowStyle: {
                  // backgroundColor: '#EEE',
                  // background: "linear-gradient(#fef9f5,#fef9f5)",
                  whiteSpace: "wrap",
                  paddingLeft: "50px"
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
          </Paper>
          
      </div>
    </section>
    )
}

export default GovernmentInfo
