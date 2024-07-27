package com.example.Employee.DTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {
	
	
	private Long slID;
	private Long employeeID;
	private String firstName;
	private String middleName;
	private String lastName;
	private String gender;
	private String bod;
	private Long phoneNumber;
	private String extension;
	private String emailID;
	private String designation;
	private String employeeGroup;
	private String reportingManager;
	private String employeeDepartment;
	private String employeeStatus;
	private String relievingDate;
	private String reportingSite;
	private String country;
	private String state;
	private String city;
	private Long zipCode;
	private String addressLine1;
	private String addressLine2;
	private String salutation;

}