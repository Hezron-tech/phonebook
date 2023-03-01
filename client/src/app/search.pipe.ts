import { Contacts } from './interface/contactInterface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Contacts[],filterText:string):Contacts[] {
    if(value.length===0 || filterText===''){
      return value
    }
    const filtered:Contacts[]=[]
      for(let stud of value){
        if(stud.firstName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1){
          filtered.push(stud)
        }
      }
      return filtered
  
  }

}
