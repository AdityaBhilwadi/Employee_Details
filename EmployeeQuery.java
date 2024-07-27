package com.example.Employee.sqlquery;

import org.springframework.stereotype.Component;

@Component
public class EmployeeQuery {

	public String getAllEmployees() {
		String queryToGetAllEmployees = "Select * from employee";
		return queryToGetAllEmployees;
	}

	public String employeeId(Long id) {
		String sqlQueryForById = "Select * from employee where employeeid = " + id + "";
		System.out.println("query");
		return sqlQueryForById;
	}
}