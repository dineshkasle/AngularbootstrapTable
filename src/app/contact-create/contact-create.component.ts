import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  createContact(){
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};
    this.router.navigate(['contact-list']);
  }
}
