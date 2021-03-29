import React, { Component } from "react";
import HeaderWork from "../../components/headerWork/headerWork";
import Title from "../../components/title/title";
import "./Worklog.css";
import WorkList from "../../components/WorkList/WorkList";
import { connect } from "react-redux";
import { getWorklog } from "../../redux/actions/actionCreator";

class Worklog extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id || "";
    this.setState({id: +id})

    this.props.getWorklog()
  }

  render() {
    const { id } = this.state;
    const { worklog } = this.props;
    const filters = worklog.filter((item) => item.employee_id === id);
    return (
      <div className="Worklog">
        <Title title={"Рабочий журнал"} />
        <HeaderWork />
        <WorkList worklog={filters} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      worklog: state.worklog.worklog,
    };
  },
  { getWorklog }
)(Worklog);