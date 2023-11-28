import { Amplify } from '@aws-amplify/core';
import * as gen from '../constants/backend/generated';
import React from 'react';

Amplify.configure(gen.config);

export class MessageHandler {
  constructor(userId, onMessageReceived) {
    this.userId = userId;
    this.messages = [];
    this.peopleMessage = [];
    this.subscription = null; // to store the subscription

    // starts up websocket for userId and calls onMessageReceived when a message is received/sent
    this.subscribe(onMessageReceived);
    this.fetchMessages();
  }

  // starts the subscription
  subscribe(onMessageReceived) {
    this.subscription = gen.subscribe(this.userId, (data) => {
      onMessageReceived(data);
      this.addMessage(data);
    });
  }

  // fetches initial messages
  async fetchMessages() {
    try {
      const sent = await gen.listSender(this.userId);
      const received = await gen.listReceiver(this.userId);
      this.messages = [...sent, ...received];
      this.sortMessages();
    } catch (error) {
      console.error('Error fetching messages', error);
    }
  }

  // adds a new message to the peopleMessage array
  addMessage(message) {
    let person = message.senderId === this.userId ? message.receiverId : message.senderId;
    if (!this.peopleMessage[person]) {
      this.peopleMessage[person] = [];
    }
    this.peopleMessage[person].push(message);
  }

  // organizes messages into conversations per contact
  sortMessages() {
    this.messages.forEach((message) => {
      let person = message.senderId === this.userId ? message.receiverId : message.senderId;
      if (!this.peopleMessage[person]) {
        this.peopleMessage[person] = [];
      }
      this.peopleMessage[person].push(message);
    });
  }

  // gets the organized messages
  getMessages() {
    return this.peopleMessage;
  }

  // unsubscribes from the WebSocket when the component unmounts
  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
