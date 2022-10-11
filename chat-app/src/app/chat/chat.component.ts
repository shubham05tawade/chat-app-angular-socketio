import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Input() user: string = "";
  @Input() room: string = "";
  @Input() chats: any = [];
  @Output() chatToggler = new EventEmitter<{toggler: boolean}>();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  public onChatToggle(){
    this.chatToggler.emit({toggler: this.toggle})
  }

  sendMessage(sendForm: NgForm){
    this.chatService.sendMessage({
      user: this.user, 
      message: sendForm.form.value.message});
      sendForm.reset();
  }

}
