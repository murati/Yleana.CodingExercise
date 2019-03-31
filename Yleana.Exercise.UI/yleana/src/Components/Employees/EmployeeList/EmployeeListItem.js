import React from 'react';

const employeeListItem = (props) => {
    return <tr className="table-primary">
        <td>{props.name}</td>
    </tr>
}

export default employeeListItem;
