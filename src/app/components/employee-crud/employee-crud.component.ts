import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import userData from './users';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent {
  employees = [...userData];
  selectedEmployee: any = null;

  newEmployee = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    address: { city: '' }
  };

  // View details in modal
  viewDetails(emp: any) {
    this.selectedEmployee = emp;
    const modalElement = document.getElementById('empModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Delete employee
  deleteEmployee(emp: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete ${emp.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(e => e.id !== emp.id);
        Swal.fire('Deleted!', 'Employee removed.', 'success');
      }
    });
  }

  // Add new employee (called from modal)
  addEmployeeFromModal() {
    const maxId = this.employees.length > 0 ? Math.max(...this.employees.map(emp => emp.id)) : 0;
    const newEmp = { ...this.newEmployee, id: maxId + 1 };
    this.employees.push(newEmp);

    this.newEmployee = {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      address: { city: '' }
    };

    // Hide modal
    const modalEl = document.getElementById('addEmpModal');
    if (modalEl) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    }

    new Snackbar('Employee Added Successfully', {
      position: 'top-center',
      theme: 'light',
      timeout: 3000,
      actionText: 'X'
    });
  }
}
