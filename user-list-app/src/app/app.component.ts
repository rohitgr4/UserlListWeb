import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,CommonModule, MatListModule, MatCardModule,MatTableModule,CdkTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-list-app';
}
