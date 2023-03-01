import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Contacts} from '../interface/contactInterface'
import { Observable, tap, map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {
  baseurl='http://localhost:5000'
  private httpOptions:any

  constructor(private http:HttpClient,private router:Router) {  
  }

  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.baseurl}/api/contacts`)
    .pipe(
      tap(data=>
        console.log('all:' + JSON.stringify(data))
        )
    )
  }

  addContacts(data:any):Observable<Contacts[]>{
     return this.http.post<Contacts[]>(`${this.baseurl}/api/contacts`,data)
    
  }
  

redirect(url: string) {
     console.log(url);

    this.router.navigate([url]);

  }




}
