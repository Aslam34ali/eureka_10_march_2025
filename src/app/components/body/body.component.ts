import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { ParentComponent } from '../parent/parent.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeWorkComponent } from '../employee-work/employee-work.component';
import { EmployeeComponent } from '../employee/employee.component';
import { Demo1Component } from '../demo1/demo1.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import { FolderViewerComponent } from '../folder-viewer/folder-viewer.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Demo2Component } from '../demo2/demo2.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { UserCrudHttpComponent } from '../user-crud-http/user-crud-http.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';


@Component({
  selector: 'app-body',
  imports: [//DataBindingComponent,
    //MyModalComponent,
  //UserListComponent,
//ProductListComponent,
    //DirectivesComponent,
    //EmployeeCrudComponent,
    //UserTableComponent,
    //Demo1Component,
  //PipesComponent,
  //Child1Component,
  //Child2Component,
    //ParentComponent,
    //EmployeeAddComponent,
    //EmployeeTableComponent,
    //EmployeeWorkComponent,
    //EmployeeComponent,
    //HttpDemo1Component,
    //UserCrudComponent,
    //Demo2Component,
    //HttpDemo2Component,
    //Message1Component,
    //Message2Component,
    //UserCrudHttpComponent,
    //SubjectDemo1Component,
    //FolderViewerComponent,
    //ObservableDemo1Component,
    //ObservableDemo2Component,
    //ObservableDemo3Component,
    //SignalDemo1Component,
    SignalDemo2Component

    
],

  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
