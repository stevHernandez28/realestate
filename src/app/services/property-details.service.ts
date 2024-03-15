import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { PropertyDetailsContent } from '../data/Data.mockup';
@Injectable(  {
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor() { }

  GetAllDetails(id: number) : Observable<any>{
    const property = PropertyDetailsContent.find(p => p.id === id);
    return of(property);

  }

}
  