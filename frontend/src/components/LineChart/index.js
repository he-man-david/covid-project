/** created by BJ Rutledge 
 * 12/20/21
 */
import React from "react";
import { useState, useCallback } from "react";
import {Bar} from 'react-chartjs-2';
    
const BarChart = ({data, options}) => {
    const data = useState(props.data);
    const options = {
        responsive: true,
        ledgend: {
            display: true
        },
        type: 'bar',
    };


    return (
        <>
            <Bar 
                data={data}
                width={null}
                height={null}
                options={props.options}
            />

        </>
    );
}