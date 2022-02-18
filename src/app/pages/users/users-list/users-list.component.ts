import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/service/user.service';

@Component({
  selector: 'crud-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void{
    this.UserService.getUsers().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('ERROR AO EXECUTAR', err.status);
    })
  }

  deleteUser(id: number): void {
    this.UserService.deleteUser(id).subscribe(response => {
      console.log(`Usuário Excluido!`)
    }, (err) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }

}
