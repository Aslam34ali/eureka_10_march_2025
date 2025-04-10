import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  @Input() employee: any = { id: 0, name: '', email: '', salary: '', phone: '', address: { city: '' } }; // Salary as string
  @Output() employeeChange = new EventEmitter<any>();
  @Output() add = new EventEmitter<void>();

  addEmployee() {
    this.add.emit();
    new Snackbar('Employee Added Successfully', {
      position: 'top-center',
      theme: 'light',
      timeout: 3000,
      actionText: 'X'
    });
  }
}