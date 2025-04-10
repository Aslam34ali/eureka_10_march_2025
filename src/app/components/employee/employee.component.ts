import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedFilter: string = 'allEmployees';
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.filterEmployees();
  }

  filterEmployees(): void {
    if (this.selectedFilter === 'allEmployees') {
      this.employees = this.employeeService.getAllEmployees();
    } else if (this.selectedFilter === 'maleEmployees') {
      this.employees = this.employeeService.getMaleEmployees();
    } else if (this.selectedFilter === 'femaleEmployees') {
      this.employees = this.employeeService.getFemaleEmployees();
    }
  }
}
