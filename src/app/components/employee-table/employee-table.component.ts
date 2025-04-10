import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  @Input() employees: any[] = [];
  @Output() delete = new EventEmitter<any>();
  @Output() view = new EventEmitter<any>();

  onDelete(emp: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete ${emp.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete.emit(emp);
        Swal.fire('Deleted!', 'Employee removed.', 'success');
      }
    });
  }

  onView(emp: any) {
    this.view.emit(emp);
  }
}