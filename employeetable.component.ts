import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { GetEmployeeDTO } from './GetEmployeeDTO';
import { Observable } from 'rxjs/internal/Observable';
// import { enableDebugTools } from '@angular/platform-browser';
// import { employeeDTO } from '../employeeform/employeeDTO';
import id from '@angular/common/locales/id';
import { Router } from '@angular/router';
import { GetEmployeeDTO } from './getemployeeDTO';
import 'primeflex/primeflex.css';


interface salutation {
  name: string;
}
interface gender {
  name: string;
}
interface designation {
  name: string;
}
interface employeegroup {
  name: string;
}
interface reportingmanager {
  name: string;
}
interface employeeDepartment {
  name: string;
}
interface employeestatus {
  name: string;
}
interface reportingsite {
  name: string;
}
interface country {
  name: string;
}
interface state {
  name: string;
}
interface city {
  name: string;
}
interface zipcode {
  name: string;
}
interface extension {
  name: string;
}

const url = 'http://localhost:8080/api/employees/';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css',
})
export class EmployeetableComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeList: any[] = [];
  employeeUpdate: any[] = [];
  employee: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  visible: boolean = false;
  visible1: boolean = false;

  date1: any;
  date2: any;
  value: any;
  value1: string | undefined;
  value2: string | undefined;
  mainId!: any;
  isElementVisible = true;

  salutation: salutation[] = [];
  gender: gender[] = [];
  designation: designation[] = [];
  employeegroup: employeegroup[] = [];
  reportingmanager: reportingmanager[] = [];
  employeedepartment: employeeDepartment[] = [];
  employeestatus: employeestatus[] = [];
  reportingsite: reportingsite[] = [];
  country: country[] = [];
  state: state[] = [];
  city: city[] = [];
  zipcode: zipcode[] = [];
  extension: extension[] = [];
  employeeDepartment: employeeDepartment[] = [];

  ngOnInit(): void {
    this.salutation = [{ name: 'Mr' }, { name: 'Mrs' }];
    this.gender = [{ name: 'Male' }, { name: 'Female' }, { name: 'Others' }];
    this.designation = [
      { name: 'Java Developer' },
      { name: 'React Developer' },
      { name: 'Full Stack Developer' },
      { name: 'Developer' },
    ];
    this.employeegroup = [{ name: 'V1' }, { name: 'V2' }];
    this.reportingmanager = [
      { name: 'Virat' },
      { name: 'Dhoni' },
      { name: 'Tata' },
    ];
    this.employeeDepartment = [
      { name: 'Development' },
      { name: 'Testing' },
      { name: 'Devops' },
    ];
    this.employeestatus = [{ name: 'Active' }, { name: 'In Active' }];
    this.reportingsite = [
      { name: 'BEL Road' },
      { name: 'JP Nagar' },
      { name: 'Vijay Nagar' },
    ];
    this.country = [{ name: 'India' }, { name: 'England' }];
    this.state = [{ name: 'Karnataka' }, { name: 'Tamil Nadu' }];
    this.city = [{ name: 'Bangalore' }, { name: 'Hosur' }];
    this.zipcode = [{ name: '567401' }, { name: '501901' }];
    this.extension = [{ name: '+91' }, { name: '+41' }];

    this.employeeForm = this.fb.group({
      slID: [''],
      employeeId: [''],
      salutation: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      gender: [''],
      bod: [''],
      phoneNumber: [''],
      emailID: [''],
      designation: [''],
      employeeGroup: [''],
      reportingManager: [''],
      employeeDepartment: [''],
      employeeStatus: [''],
      relievingDate: [''],
      reportingSite: [''],
      country: [''],
      state: [''],
      city: [''],
      zipCode: [''],
      addressLine1: [''],
      addressLine2: [''],
      extension: [''],
    });
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.http.get<any[]>(url).subscribe(
      (data: any[]) => {
        this.employeeList = data;
        console.log('Employee List:', this.employeeList);
      },
      (error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      }
    );
  }

  showDialog(employee: any): any {
    console.log(employee);
    this.mainId = employee.slID;
    this.salutation.forEach((ele) => {
      if (ele.name === employee.salutation) {
        this.employeeForm.patchValue({
          salutation: ele,
        });
      }
    });

    this.gender.forEach((ele) => {
      if (ele.name === employee.gender) {
        this.employeeForm.patchValue({
          gender: ele,
        });
      }
    });

    this.designation.forEach((elem) => {
      if (elem.name === employee.designation) {
        this.employeeForm.patchValue({
          designation: elem,
        });
      }
    });

    this.employeegroup.forEach((ele) => {
      if (ele.name === employee.employeeGroup) {
        this.employeeForm.patchValue({
          employeeGroup: ele,
        });
      }
    });

    this.employeestatus.forEach((ele) => {
      if (ele.name === employee.employeeStatus) {
        this.employeeForm.patchValue({
          employeeStatus: ele,
        });
      }
    });

    this.reportingsite.forEach((ele) => {
      if (ele.name === employee.reportingSite) {
        this.employeeForm.patchValue({
          reportingSite: ele,
        });
      }
    });

    this.country.forEach((ele) => {
      if (ele.name === employee.country) {
        this.employeeForm.patchValue({
          country: ele,
        });
      }
    });

    this.extension.forEach((ele) => {
      if (ele.name === employee.extension) {
        this.employeeForm.patchValue({
          extension: ele,
        });
      }
    });

    this.reportingmanager.forEach((elep) => {
      if (elep.name === employee.reportingManager) {
        this.employeeForm.patchValue({
          reportingManager: elep,
        });
      }
    });

    this.employeeDepartment.forEach((ele) => {
      if (ele.name === employee.employeeDepartment) {
        this.employeeForm.patchValue({
          employeeDepartment: ele,
        });
      }
    });

    this.employeeForm.patchValue({
      employeeId: employee.employeeID,
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      bod: new Date(employee.bod),
      phoneNumber: employee.phoneNumber,
      emailID: employee.emailID,
      relievingDate: new Date(employee.relievingDate),
      state: employee.state,
      city: employee.city,
      zipCode: employee.zipCode,
      addressLine1: employee.addressLine1,
      addressLine2: employee.addressLine2,
    });

    this.visible = true;
  }

  onClear() {
    this.employeeForm.reset();
  }

  onUpdate(): any {
    let emp: GetEmployeeDTO = new GetEmployeeDTO();
    emp.slID = this.mainId;
    emp.country = this.employeeForm.value?.country?.name ?? '';
    emp.city = this.employeeForm.value?.city?.name ?? '';
    emp.state = this.employeeForm.value?.state?.name ?? '';
    emp.zipCode = this.employeeForm.value?.zipCode?.name ?? '';
    emp.employeeDepartment =
      this.employeeForm.value?.employeeDepartment?.name ?? '';
    emp.employeeStatus = this.employeeForm.value?.employeeStatus?.name ?? '';
    emp.reportingSite = this.employeeForm.value?.reportingSite?.name ?? '';
    emp.designation = this.employeeForm.value?.designation?.name ?? '';
    emp.employeeGroup = this.employeeForm.value?.employeeGroup?.name ?? '';
    emp.reportingManager =
      this.employeeForm.value?.reportingManager?.name ?? '';
    emp.gender = this.employeeForm.value?.gender?.name ?? '';
    emp.extension = this.employeeForm.value?.extension?.name ?? '';
    emp.salutation = this.employeeForm.value?.salutation?.name ?? '';

    emp.firstName = this.employeeForm.value?.firstName ?? '';
    emp.middleName = this.employeeForm.value?.middleName ?? '';
    emp.lastName = this.employeeForm.value?.lastName ?? '';
    emp.bod = this.employeeForm.value?.bod ?? '';
    emp.phoneNumber = this.employeeForm.value?.phoneNumber ?? '';
    emp.emailID = this.employeeForm.value?.emailID ?? '';
    emp.employeeID = this.employeeForm.value?.employeeId ?? '';
    emp.relievingDate = this.employeeForm.value?.relievingDate ?? '';
    emp.addressLine1 = this.employeeForm.value?.addressLine1 ?? '';
    emp.addressLine2 = this.employeeForm.value?.addressLine2 ?? '';

    if (confirm('Are you sure?')) {
      this.http
        .put(
          `http://localhost:8080/api/employees/update/${emp.employeeID}`,
          emp
        )
        .subscribe(
          (response) => {
            console.log(response);
            this.visible = false;
            this.fetchEmployees();
          },
          (error) => {
            console.error('There was an error!', error);
          }
        );
    }
  }

  delete(slID: number) {
    this.http
      .delete(`http://localhost:8080/api/employees/delete/${slID}`)
      .subscribe((response) => {
        console.log(response);
        alert('Are you sure?');
        this.fetchEmployees();
      });
  }
  closeDialog() {
    this.visible = false;
  }
  closeAddDialog() {
    this.visible1 = false;
  }
  addEmployee() {
     this.employeeForm.reset();
    this.visible1 = true;
  }
  onSubmit(): any {
    let emp: GetEmployeeDTO = new GetEmployeeDTO();
 emp.country = this.employeeForm.value?.country?.name ?? '';
 emp.city = this.employeeForm.value?.city?.name ?? '';
 emp.state = this.employeeForm.value?.state?.name ?? '';
 emp.zipCode = this.employeeForm.value?.zipCode?.name ?? '';
 emp.employeeDepartment =
   this.employeeForm.value?.employeeDepartment?.name ?? '';
 emp.employeeStatus = this.employeeForm.value?.employeeStatus?.name ?? '';
 emp.reportingSite = this.employeeForm.value?.reportingSite?.name ?? '';
 emp.designation = this.employeeForm.value?.designation?.name ?? '';
 emp.employeeGroup = this.employeeForm.value?.employeeGroup?.name ?? '';
 emp.reportingManager = this.employeeForm.value?.reportingManager?.name ?? '';
 emp.gender = this.employeeForm.value?.gender?.name ?? '';
 emp.extension = this.employeeForm.value?.extension?.name ?? '';
 emp.salutation = this.employeeForm.value?.salutation?.name ?? '';

 emp.firstName = this.employeeForm.value?.firstName ?? '';
 emp.middleName = this.employeeForm.value?.middleName ?? '';
 emp.lastName = this.employeeForm.value?.lastName ?? '';
 emp.bod = this.employeeForm.value?.bod ?? '';
 emp.phoneNumber = this.employeeForm.value?.phoneNumber ?? '';
 emp.emailID = this.employeeForm.value?.emailID ?? '';
 emp.employeeID = this.employeeForm.value?.employeeId ?? '';
 emp.relievingDate = this.employeeForm.value?.relievingDate ?? '';
 emp.addressLine1 = this.employeeForm.value?.addressLine1 ?? '';
 emp.addressLine2 = this.employeeForm.value?.addressLine2 ?? '';
    console.log(emp);
    this.http
      .post('http://localhost:8080/api/employees/add', emp)
      .subscribe((response) => {
        console.log(response);
        this.visible1 = false;
       this.fetchEmployees(); 
      });
  }

  onClose() {
    this.isElementVisible = false;
  }
}