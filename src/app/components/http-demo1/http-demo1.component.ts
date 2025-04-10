import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  isLoading: boolean = false;
  users: any[] = [];

  constructor(private httpClient: HttpClient) {}

 
  fetchUserData_angular() {
    this.isLoading = true;
    const api_url = 'https://jsonplaceholder.typicode.com/users';

    this.httpClient.get<any[]>(api_url).subscribe({
      next: (response) => {
        this.users = response;
        this.isLoading = false;
        console.log('Fetched Users:', response);
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
      }
    });
  }
}
