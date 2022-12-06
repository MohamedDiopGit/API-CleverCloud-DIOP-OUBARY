import { Injectable, OnModuleInit } from '@nestjs/common';
import { BookDto } from './interface/Book.dto';
import { readFile } from 'fs/promises';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { tap, map, Observable } from 'rxjs';
import { ApiCloud } from './interface/ApiCloud.dto';
import { MonumentDto } from './interface/Monument.dto';
import { readFileSync } from 'fs';

@Injectable()
export class BookService implements OnModuleInit {
    private books: BookDto[] =[];
    private monuments: MonumentDto[] = [];

    constructor(private readonly httpService: HttpService) {}

    private async loadFromFile() : Promise<void> {
        try{
            let data = await readFile('./src/perelachaise_data.json');  
            this.books = JSON.parse(data.toString());  
        }
        catch (err) {
            console.log('Err: $(err)');
        }
    }
    private async loadBooksFromFile() : Promise<void> {
        try{
            let data = await readFile('./src/perelachaise_data.json');  
            this.books = JSON.parse(data.toString());  
        }
        catch (err) {
            console.log('Err: $(err)');
        }
    }

    private async loadBooksFromAPI(): Promise<void> {
        try{

            this.httpService.get<ApiCloud[]>('https://www.data.gouv.fr/s/resources/monuments-et-tombes-de-personnalites-du-cimetiere-du-pere-lachaise/20141103-215847/perelachaise_data.json')
            .pipe(
                map( (response) => {return response.data}),
                tap( (apicloud) => { 
                    apicloud.forEach( (e) => {
                        
                        // this.books.push(
                        //     {
                        //         title: e.title,
                        //         author : e.authors, 
                        //         date : e.publication_date.toString()
                        //     }
                        // )
                        this.monuments.push( 
                            { 
                                image_principale: e.image_principale,
                                personnes : e.personnalites,
                                monuments : e.monuments
                            }
                        )
                        console.log("Success")
                        console.log(this.monuments)
                        }
                    )}
                ) 
            
            ).subscribe();
            
        }

        
        catch (err) {
            console.log('Err: $(err)');
        }
    }

    async onModuleInit() : Promise<void>{
        // await Promise.all( [ this.loadBooksFromAPI ] );
        // console.log("Hey test");
        // console.log(this.books);
    }

    addBook(book: BookDto){
        if(!this.books.find((value) => value.title === book.title)){ 
            this.books.push(book); 
        }
        return book;
    }
    getAllBooks() 
    {
        // return this.books.sort((a,b)=>{
        //     return a.title.localeCompare(b.title);
        // })
        const fs = require('fs');
        
        fs.readFile('./src/perelachaise_data.json', (err, data) => {
            if (err) throw err;
            let dataMon =  JSON.parse(data);
            this.monuments.push(dataMon)
            // console.log(dataMon);
            
        });
        return this.monuments[0];
    }

    getBook(name: string){
        const book = this.books.find((value) => value.title === name);
        if(!book){
            throw new Error(`BookDto not found: ${name}`);
        } 
        return book;
    }

    getBooksOf(author: string) : BookDto[]{
        return this.books.filter((value) => value.author === author);    // return all books of the author
    }


    deleteBook(title: string){
        for( var i = 0; i < this.books.length; i++){ 
    
            if ( this.books[i].title === title ) { 
        
                this.books.splice(i, 1); 
            }
        
        }
    }

}
