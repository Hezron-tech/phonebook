import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Contacts} from '../interface/contactInterface'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {
  baseurl='http://localhost:5000'
  private httpOptions:any

  constructor(private http:HttpClient) {  
  }

  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.baseurl}/api/contacts`)
  }
}
