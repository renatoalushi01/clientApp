import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { MailBox } from 'src/app/models/app.models';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})

export class ClientInfoComponent implements OnInit {
  mailbox: any;
  constructor(private client: ClientService) { }

  ngOnInit(): void {
    this.client.getAllData().subscribe((data: any) => {
      console.log(data);
      debugger;
      this.mailbox = data;
    });
  }

}
