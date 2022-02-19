import { MessagesService } from './messages.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Get()
  listAll() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log(body);
    return this.messageService.create(body);
  }
}
