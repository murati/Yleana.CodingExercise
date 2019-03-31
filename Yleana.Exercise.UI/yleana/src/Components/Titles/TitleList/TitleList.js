import React, { Component } from 'react';
import TitleListItem from './TitleListItem';
import { getTitles } from '../../../store/actions';
import { connect } from 'react-redux';

class TitleList extends Component {
    state = ({ data: [] });

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
                                <th scope="col">Employee Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.data.map((title, index) => {
                                    return (<TitleListItem key={index} title={title} />);
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}


const mapStatetoProps = (state) => {
    return { data: state.data };
}

const mapDispatchprops = (dispatch) => {
    return { onFetchData: () => dispatch(getTitles()) };
}

export default connect(mapStatetoProps, mapDispatchprops)(TitleList);
