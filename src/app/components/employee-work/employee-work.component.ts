import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import userData from './users';

@Component({
  selector: 'app-employee-work',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeTableComponent, EmployeeAddComponent],
  templateUrl: './employee-work.component.html',
  styleUrls: ['./employee-work.component.css']
})
export class EmployeeWorkComponent {
  employees = userData.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    salary: user.salary, // Use salary from userData
    phone: user.phone,
    address: user.address
  }));

  selectedEmployee: any = null;
  newEmployee = { id: 0, name: '', email: '', salary: '', phone: '', address: { city: '' } }; // Salary as string to match userData

  viewDetails(emp: any) {
    this.selectedEmployee = emp;
    const modalElement = document.getElementById('empModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  deleteEmployee(emp: any) {
    this.employees = this.employees.filter(e => e.id !== emp.id);
  }

  addEmployee() {
    const maxId = this.employees.length > 0 ? Math.max(...this.employees.map(emp => emp.id)) : 0;
    this.newEmployee.id = maxId + 1;
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { id: 0, name: '', email: '', salary: '', phone: '', address: { city: '' } }; // Reset salary as string

    const modalEl = document.getElementById('addEmpModal');
    if (modalEl) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    }
  }
}