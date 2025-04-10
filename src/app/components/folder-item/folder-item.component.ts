import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.css']
})
export class FolderItemComponent {
  @Input() node: any;
  expanded = false;

  
}
