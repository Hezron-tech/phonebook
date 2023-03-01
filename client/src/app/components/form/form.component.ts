import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacts } from 'src/app/interface/contactInterface';
import { ContactServicesService } from 'src/app/services/contact-services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectForms!: FormGroup;
  contacts: Contacts[] =[];
  singlecontact?: Contacts
  filterText:string=''

  constructor( private fb:FormBuilder, private contactservices:ContactServicesService) { }
  
  editMode:boolean=false

  ngOnInit(): void {

    this.getAllContacts()

    this.projectForms=this.fb.group({

      firstName:[null,[Validators.required]],
      
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      phoneNumber:[null,[Validators.required]], 
      address:[null,[Validators.required]], 
       

    })

  }
  getAllContacts(){

    this.contactservices.getContacts().subscribe({
      next:contacts=>{
        this.contacts=contacts
        console.log(typeof(this.contacts)); 
      }
    })
  }

 



  onSubmit() {

    if (this.projectForms.invalid) {
      return
    }
    var data = {
    
      firstName:this.projectForms.value.firstName,
      lastName:this.projectForms.value.lastName,
      email:this.projectForms.value.email,
      phoneNumber:this.projectForms.value.phoneNumber,
      address:this.projectForms.value.address
      

    }
  


    console.log(data);

    this.contactservices.addContacts(data).subscribe(
      {
        next:(data:any)=>{
          this.contacts=data

          console.log('data after adding', this.contacts);
          this.projectForms.reset()
          this.getAllContacts()
          
        },
error:(err:any)=>{
  console.log(err);
  
},
complete:()=>{
  console.log('completed');
  
}


      },
     
    )
    
  
  }
  

editContact(id:string){

  this.editMode=true
this.contactservices.get_contact_by_id(id).subscribe({
  next:(data:any)=>{
    this.singlecontact=data

    console.log("single contact", this.singlecontact);
    
    
    
  }
})



// show_single_parking_state(id:string){
//   this.parkingApi.get_single_parking_state(id).subscribe({
//     next: (data: any) => {
//       if (data) {
//         this.single_parking_state_data = data;
//         this.dataSource.data = this.single_parking_state_data.trans.payments
//         this.loading = false
//         // console.log(data);
//       }
//     },
//     error: (error) => {
//       // this.loading = false;

//       switch (error.status) {
//         case 401:
//         case 403:
//           /* handled in http interceptor */
//           break;
//         default:
//           const err_snackbar = this.snackbar.openSnackBar(
//             'Unknown Error. Could not retrieve  transaction.',
//             'Retry',
//             5
//           );

//           err_snackbar.onAction().subscribe(() => {
//             this.parkingApi.get_single_transaction(this.id);
//           });
//           break;
//       }
//     },
//     complete: () => {
//       // this.loading = false;
//     },
//   });

// }



















  }

  onSave(){
    this.editMode=false
  }


  // view_single_parking_state_details(id: string) {
  //   this.parkingApi.redirect('/parking/single-parking-state/' + id);
  // }

  deleteContact(id:string){
   
    this.contactservices.delete_contact_by_id(id).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.getAllContacts()
      }
    })
    
      }
}
