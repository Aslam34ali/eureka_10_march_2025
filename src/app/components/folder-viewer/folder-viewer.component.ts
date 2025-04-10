import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../services/folder.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FolderItemComponent } from '../folder-item/folder-item.component';

@Component({
  selector: 'app-folder-viewer',
  standalone: true,
  imports: [CommonModule, FolderItemComponent],
  templateUrl: './folder-viewer.component.html',
  styleUrls: ['./folder-viewer.component.css']
})
export class FolderViewerComponent implements OnInit {
  folder$!: Observable<any>;

  constructor(private folderService: FolderService) {}

  ngOnInit() {
    this.folder$ = this.folderService.getFolderStructure();
  }
}
