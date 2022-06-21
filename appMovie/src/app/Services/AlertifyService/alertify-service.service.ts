import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})


export class AlertifyService {

  constructor() { }

  success(message:string)
  {
    alertify.success(message+ " Add to List");
  }

  error(message:string)
  {
    alertify.error(message+ " Remove from List");
  }

  warning(message:string)
  {
    alertify.warning(message+ " Update List");
  }
}
