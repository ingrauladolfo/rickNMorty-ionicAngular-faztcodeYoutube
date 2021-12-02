import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
  characters =[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(resp=>{
      console.log(resp)
      this.characters = resp.results;
    })
  }

}
