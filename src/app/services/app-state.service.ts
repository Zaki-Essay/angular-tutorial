import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productsState :any={
    products:[],
    keyword:"",
    currentPage : 1,
    pageSize:4,
    totalPages:0,
    status :"",
    totalCount : 0,
    errorMessage :""
  }
  public authState:any={
    isAuthenticated :false,
    username:"",
    roles :[],
    token :"",
    status :"",
    errorMessage :"",
    openaiKey:"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"
  }
  constructor() { }

  public setProductState(state:any){
    this.productsState={...this.productsState, ...state}
  }
  public setAuthState(state:any){
    this.authState={errorMessage:"",...this.authState, ...state};
  }
}
