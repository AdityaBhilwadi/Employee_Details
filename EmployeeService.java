package com.example.Employee.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import com.example.Employee.DTO.EmployeeDTO;
import com.example.Employee.DTO.GetEmployeeDTO;
import com.example.Employee.entity.Employee;
import com.example.Employee.repo.EmployeeRepository;
import com.example.Employee.sqlquery.EmployeeQuery;

@Service
public class EmployeeService {

	@Autowired
	JdbcTemplate jdbcTemplete;

	@Autowired
	EmployeeRepository employeeRepo;

	@Autowired
	EmployeeQuery employeeQuery;

	public List<GetEmployeeDTO> getAllEmployees() {

		RowMapper<GetEmployeeDTO> mapper = new RowMapper<GetEmployeeDTO>() {

			@Override
			public GetEmployeeDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				GetEmployeeDTO empDto = new GetEmployeeDTO();
				empDto.setSlID(rs.getLong("slid"));
				empDto.setEmployeeID(rs.getLong("employeeID"));
				empDto.setFirstName(rs.getString("first_name"));
				empDto.setLastName(rs.getString("last_name"));
				empDto.setMiddleName(rs.getString("middle_name"));
				empDto.setPhoneNumber(rs.getLong("phone_number"));
				empDto.setEmailID(rs.getString("emailid"));
				empDto.setDesignation(rs.getString("designation"));
				empDto.setReportingManager(rs.getString("reporting_manager"));
				empDto.setEmployeeDepartment(rs.getString("employee_department"));
				empDto.setEmployeeStatus(rs.getString("employee_status"));
				empDto.setSalutation(rs.getString("salutation"));
				empDto.setGender(rs.getString("gender"));
				empDto.setBod(rs.getString("bod"));
				empDto.setExtension(rs.getString("extension"));
				empDto.setEmployeeGroup(rs.getString("employee_group"));
				empDto.setRelievingDate(rs.getString("relieving_date"));
				empDto.setReportingSite(rs.getString("reporting_site"));
				empDto.setCountry(rs.getString("country"));
				empDto.setState(rs.getString("state"));
				empDto.setCity(rs.getString("city"));
				empDto.setZipCode(rs.getLong("zip_code"));
				empDto.setAddressLine1(rs.getString("address_line1"));
				empDto.setAddressLine2(rs.getString("address_line2"));

				return empDto;
			}
		};

		List<GetEmployeeDTO> employeeList = jdbcTemplete.query(employeeQuery.getAllEmployees(), mapper);
		if (employeeList.isEmpty()) {
			System.out.println("Employee Not Found");
		}
		return employeeList;
	}

	public List<Employee> getEmployeebyId(Long id) {

		RowMapper<Employee> mapperForById = new RowMapper<Employee>() {

			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee emp = new Employee();
				emp.setEmployeeID(rs.getLong("employeeID"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setMiddleName(rs.getString("middle_name"));
				emp.setPhoneNumber(rs.getLong("phone_number"));
				emp.setEmailID(rs.getString("emailid"));
				emp.setDesignation(rs.getString("designation"));
				emp.setReportingManager(rs.getString("reporting_manager"));
				emp.setEmployeeDepartment(rs.getString("employee_department"));
				emp.setEmployeeStatus(rs.getString("employee_status"));
				emp.setSalutation(rs.getString("salutation"));
				emp.setGender(rs.getString("gender"));
				emp.setBod(rs.getString("bod"));
				emp.setExtension(rs.getString("extension"));
				emp.setEmployeeGroup(rs.getString("employee_group"));
				emp.setRelievingDate(rs.getString("relieving_date"));
				emp.setReportingSite(rs.getString("reporting_site"));
				emp.setCountry(rs.getString("country"));
				emp.setState(rs.getString("state"));
				emp.setCity(rs.getString("city"));
				emp.setZipCode(rs.getLong("zip_code"));
				emp.setAddressLine1(rs.getString("address_line1"));
				emp.setAddressLine2(rs.getString("address_line2"));
				return emp;
			}
		};

		List<Employee> employee = jdbcTemplete.query(employeeQuery.employeeId(id), mapperForById);
		if (employee.isEmpty()) {
			System.out.println("Employee Not Found");
		}
		System.out.println("Service");
		return employee;

	}

	public Employee createEmployee(EmployeeDTO employee) {
		Employee emp = new Employee(null, employee.getEmployeeID(), employee.getFirstName(), employee.getMiddleName(),
				employee.getLastName(), employee.getGender(), employee.getBod(), employee.getPhoneNumber(),
				employee.getExtension(), employee.getEmailID(), employee.getDesignation(), employee.getEmployeeGroup(),
				employee.getReportingManager(), employee.getEmployeeDepartment(), employee.getEmployeeStatus(),
				employee.getRelievingDate(), employee.getReportingSite(), employee.getCountry(), employee.getState(),
				employee.getCity(), employee.getZipCode(), employee.getAddressLine1(), employee.getAddressLine2(),
				employee.getSalutation());
		return employeeRepo.save(emp);
	}

	public Employee updateEmployee(EmployeeDTO employee) {
		Employee emp = new Employee(employee.getSlID(), employee.getEmployeeID(), employee.getFirstName(),
				employee.getMiddleName(), employee.getLastName(), employee.getGender(), employee.getBod(),
				employee.getPhoneNumber(), employee.getExtension(), employee.getEmailID(), employee.getDesignation(),
				employee.getEmployeeGroup(), employee.getReportingManager(), employee.getEmployeeDepartment(),
				employee.getEmployeeStatus(), employee.getRelievingDate(), employee.getReportingSite(),
				employee.getCountry(), employee.getState(), employee.getCity(), employee.getZipCode(),
				employee.getAddressLine1(), employee.getAddressLine2(), employee.getSalutation());
		return employeeRepo.save(emp);
	}

	public void deleteId(Long id) {
		employeeRepo.deleteById(id);
	}
}