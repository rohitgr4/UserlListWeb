import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService, User } from '../user.service';
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ CommonModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSource = new MatTableDataSource<User>(); 
  displayedColumns: string[] = [ 'name', 'email'];
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data; 
      this.users = data;
    });
  }
}