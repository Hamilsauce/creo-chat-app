import { Injectable } from "@angular/core";
import Talk from "talkjs";

@Injectable({
  providedIn: "root"
})
export class TalkService {
  constructor() {}

    //@ts-ignore
  private currentTalkUser: Talk.User;

    //@ts-ignore
  async createTalkUser(applicationUser) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      photoUrl: applicationUser.profilePictureUrl
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    const user = {
      id: 1,
      username: "Alice",
      email: "demo@talkjs.com",
      photoUrl: "https://demo.talkjs.com/img/alice.jpg",
      welcomeMessage: "Hey there! How are you? :-)",
      role: "booker"
    };
    const currentTalkUser = await this.createTalkUser(user);
    const session = new Talk.Session({
      appId: "tJ6YkmUL",
      me: currentTalkUser
    });
    this.currentTalkUser = currentTalkUser;
    return session;
  }

  private async getOrCreateConversation(
    session: Talk.Session,
    //@ts-ignore
    otherApplicationUser
  ) {
    const otherTalkUser = await this.createTalkUser(otherApplicationUser);
    const conversationBuilder = session.getOrCreateConversation(
      Talk.oneOnOneId(this.currentTalkUser, otherTalkUser)
    );
    conversationBuilder.setParticipant(this.currentTalkUser);
    conversationBuilder.setParticipant(otherTalkUser);
    return conversationBuilder;
  }

  async createInbox(session: Talk.Session) {
    const otherApplicationUser = {
      id: 5,
      username: "Jake",
      email: "demo@talkjs.com",
      photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
      welcomeMessage: "Hey, how can I help?",
      role: "booker"
    };
    const conversationBuilder = await this.getOrCreateConversation(
      session,
      otherApplicationUser
    );
    return session.createInbox({ selected: conversationBuilder });
  }
}
