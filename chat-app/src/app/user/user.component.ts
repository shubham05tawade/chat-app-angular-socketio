import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() chats: any;
  @Input() room: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
