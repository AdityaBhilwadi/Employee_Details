package com.example.Employee.controller;

import com.example.Employee.DTO.EmployeeDTO;
import com.example.Employee.DTO.GetEmployeeDTO;
import com.example.Employee.entity.Employee;
import com.example.Employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
//@CrossOrigin(origins = "http://localhost:49923")
@CrossOrigin("*")

@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@GetMapping
	public List<GetEmployeeDTO> getAllEmployee() {
		return employeeService.getAllEmployees();
	}

	@GetMapping("/{id}")
	public List<Employee> getEmployeebyId(@PathVariable Long id) {

		return employeeService.getEmployeebyId(id);
	}

	@PostMapping("/add")
	public Employee createEmployee(@RequestBody EmployeeDTO employee) {
		return employeeService.createEmployee(employee);
	}

	@PutMapping("/update/{id}")
	public Employee updateEmployee(@RequestBody EmployeeDTO employee) {
//		return employeeService.updateEmployee(employee, id);
		return employeeService.updateEmployee(employee);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteId(@PathVariable Long id) {
		System.out.println("controller");
		this.employeeService.deleteId(id);
	}
}
