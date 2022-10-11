import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';
  room: string = "Room 1";
  room1: string = "Room 1";
  room2: string = "Room 2";
  toggle = false;
  isLoggedIn = false;
  userName: string = "";
  chatList: string[] = [];

  constructor(private chatService: ChatService){
  }

  public panelToggle(room: string){
    this.toggle = !this.toggle;
    this.room = room;
  }

  ngOnInit(){

  }

  onChatToggle(eventData: {toggler: boolean}){
    this.toggle = !eventData.toggler;
  }

  openChat(){
    if(this.userName !== "" && this.userName.trim() !==""){
      this.isLoggedIn = true;
      this.chatService.getMessages().subscribe((data: any)=>{
        this.chatList.push(data)
        console.log(this.chatList)
      })
    }
  }

}
