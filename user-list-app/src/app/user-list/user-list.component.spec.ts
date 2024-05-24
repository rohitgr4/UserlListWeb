import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService, User } from '../user.service';
import { of } from 'rxjs';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  const mockUsers = [
    { name: 'Albert Miguel', email: 'albert.miguel@example.com' },
    { name: 'Jona', email: 'jane.smith@example.com' },
    { name: 'Michael Johnson', email: 'michael.johnson@example.com' },
    { name: 'Emily Ross', email: 'emily.ross@example.com' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],      
      providers: [ UserService ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService); 
    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch and display users', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(mockUsers)); 

    component.ngOnInit(); 

    expect(userService.getUsers).toHaveBeenCalled(); 
    expect(component.users).toEqual(mockUsers); 
  });
});
