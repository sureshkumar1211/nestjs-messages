import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await fs.readFile('messages.json', { encoding: 'utf-8' });
    const parseMessages = JSON.parse(messages);
    return parseMessages[id];
  }

  async findAll() {
    const messages = await fs.readFile('messages.json', { encoding: 'utf-8' });
    const parseMessages = JSON.parse(messages);
    return parseMessages;
  }

  async create(body: any) {
    const messages = await fs.readFile('messages.json', { encoding: 'utf-8' });
    const parseMessages = JSON.parse(messages);
    const randomId = Math.floor(Math.random() * 999);
    parseMessages[randomId] = {
      id: randomId,
      content: body.content,
    };
    await fs.writeFile('messages.json', JSON.stringify(parseMessages));
    return parseMessages[randomId];
  }
}
