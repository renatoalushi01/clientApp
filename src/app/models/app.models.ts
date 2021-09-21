import { NgModule } from '@angular/core';

export interface MailBox {
    sender: string,
    receiver: string,
    sublect: string,
    message: string,
    date: any,
  }