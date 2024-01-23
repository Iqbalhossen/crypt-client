import React from 'react';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {
    const tradeDate = data?.InTime
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{data?.Crypto}</td>
                <td>{data?.Amount}$</td>
                <td>
                    {data?.HighLow === "High"
                        ?
                        <span class="badge bg-success">High</span>
                        :
                        <span class="badge bg-danger">Low</span>
                    }
                </td>
                <td>
                    {data?.Result === null
                        ?
                        <span class="badge bg-warning ">Pending</span>
                        :
                        ''
                    }
                    {data?.Result === 'Win'
                        ?
                        <span class="badge bg-success">Win</span>
                        :
                        ''
                    }
                    {data?.Result === 'Loss'
                        ?
                        <span class="badge bg-danger">Loss</span>
                        :
                        ''
                    }
                    {data?.Result === 'Draw'
                        ?
                        <span class="badge bg-dark">Draw</span>
                        :
                        ''
                    }
                </td>
                <td>
                {data?.Result === null
                        ?
                        <span class="badge bg-warning ">Running</span>
                        :
                        <span class="badge bg-success">Completed</span>
                    }
                </td>
                <td>
              {dateFormat(tradeDate, "dd-mm-yyyy h:MM:ss TT")}
                </td>
            </tr>
        </>
    );
};

export default SingleItem;