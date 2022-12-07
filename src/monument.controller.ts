import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { readFile } from 'fs';
import { MonumentService } from './monument.service';
import { BookDto } from './interface/Book.dto'
import { MonumentDto } from './interface/Monument.dto';

@Controller('/monuments')
export class MonumentController {
  constructor(private MonumentService: MonumentService) {}

  @Get()
  getAllMonuments(){
    return this.MonumentService.getAllMonuments();
  }
}

