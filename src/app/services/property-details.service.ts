import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { PropertyDetailsContent, ProperyDetailsCarrusel } from '../data/Data.mockup';
@Injectable(  {
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor() { }

  GetPropertyDetailsContentById(id: number) : Observable<any>{
    const property = PropertyDetailsContent.find(p => p.id === id);
    return of(property);

  }
  GetPropertyDetailCarruselById(id: number) : Observable<any>{
    const images = ProperyDetailsCarrusel.find(p=> p.id === id);
    return of(images);
  }
}
  