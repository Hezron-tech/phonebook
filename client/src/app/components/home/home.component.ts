import { Component, Input, OnInit } from '@angular/core';
import { ContactServicesService } from 'src/app/services/contact-services.service';
import {Contacts} from '.././../interface/contactInterface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() contacts!:Contacts[]

  constructor(private contactservice:ContactServicesService) { }

  ngOnInit(): void {
    // this.contacts=this.contactservice.getContacts()
  }

}
