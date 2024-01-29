import { Amplify } from "@aws-amplify/core";
import * as gen from "../constants/backend/generated";

Amplify.configure(gen.config);

export class MessageHandler {
  constructor(userId, onMessageReceived) {
    this.userId = userId;
    this.messages = [];
    this.uniquePersons = []; //list of people that the user has messaged
    this.peopleMessage = [];
    this.subscription = null; // to store the subscription

    // starts up websocket for userId and calls onMessageReceived when a message is received/sent
    this.subscribe(onMessageReceived);
    this.fetchMessages(onMessageReceived);
  }

  // starts the subscription
  subscribe(onMessageReceived) {
    this.subscription = gen.subscribe(this.userId, (data) => {
      onMessageReceived(data);
      this.addMessage(data);
    });
  }

  // fetches initial messages
  async fetchMessages(onMessageReceived) {
    try {
      const sent = await gen.listSender(this.userId);
      const received = await gen.listReceiver(this.userId);
      this.messages = [...sent, ...received];
      this.sortMessages();
      onMessageReceived("initial messages fetched"); //to let the component know that the messages have been fetched
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  }

  // adds a new message to the peopleMessage array
  addMessage(message) {
    let person =
      message.senderId === this.userId ? message.receiverId : message.senderId;
    if (!this.peopleMessage[person]) {
      this.peopleMessage[person] = [];
    }
    this.peopleMessage[person].push(message);
  }

  sortMessages() {
    // organizes messages into conversations per contact
    let peopleMessageHold = {};
    this.messages.forEach((message) => {
      let person =
        message.senderId === this.userId
          ? message.receiverId
          : message.senderId;
      if (!peopleMessageHold[person]) {
        peopleMessageHold[person] = [];
      }
      peopleMessageHold[person].push(message);
    });

    //sorts messages by date sent
    this.uniquePersons = Object.keys(peopleMessageHold);
    this.uniquePersons.forEach(
      (person) =>
        (this.peopleMessage[person] = peopleMessageHold[person].sort(
          (a, b) => a.dateSent - b.dateSent
        ))
    );

    //sorts the uniquePersons by the last message sent
    this.uniquePersons.sort((a, b) => {
      let lastA = this.peopleMessage[a][this.peopleMessage[a].length - 1];
      let lastB = this.peopleMessage[b][this.peopleMessage[b].length - 1];
      return lastB.dateSent - lastA.dateSent;
    });
  }

  // gets the organized messages
  getMessages() {
    return this.peopleMessage;
  }

  // gets all users that the user has messaged
  getContacts() {
    return this.uniquePersons;
  }

  // unsubscribes from the WebSocket when the component unmounts
  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
