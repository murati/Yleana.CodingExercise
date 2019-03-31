import React, { Component } from 'react';
import EmployeeListItem from './EmployeeListItem';
import { getEmployees } from '../../../store/actions'
import { connect } from 'react-redux'

class employeeList extends Component {
    state = ({ data: [], id: 0 });

    componentDidMount() {
        this.props.onFetchData();
    }

    render() {
        return (
            <div>
                {
                    this.props.data && <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.data.map((employeeName, index) => {
                                    return (<EmployeeListItem key={index} name={employeeName} />);
                                })
                            }
                        </tbody>
                    </table>
                };
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return { data: state.data, id: id };
}

const mapDispatchprops = (dispatch, props) => {
    const { id } = props.match.params;
    return { onFetchData: () => dispatch(getEmployees(id)) };
}

export default connect(mapStatetoProps, mapDispatchprops)(employeeList);