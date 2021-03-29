import React, { Component } from "react";
import DocList from "../../components/DocList/DocList";
import Header from "../../components/header/header";
import Title from "../../components/title/title";
import "./EmployeesList.css";
import { connect } from "react-redux";
import { getEmployees } from "../../redux/actions/actionCreator";

class EmployeesList extends Component {

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { employees } = this.props;
    const sort = employees.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

    return (
      <div className="EmployeesList">
        <Title title={"Список сотрудников"} />
        <Header />
        <DocList employees={sort} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      employees: state.employees.employees,
    };
  },
  { getEmployees }
)(EmployeesList);

