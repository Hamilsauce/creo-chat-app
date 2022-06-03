import { Component, OnInit } from "@angular/core";
import Talk from "talkjs";
import { TalkService } from "../shared/services/talk.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  title = "client";
  //@ts-ignore
  private inbox: Talk.Inbox;
  //@ts-ignore
  private session: Talk.Session;

  constructor(private talkService: TalkService) { }

  ngOnInit() {
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(document.getElementById("talkjs-container"));
  }
}
