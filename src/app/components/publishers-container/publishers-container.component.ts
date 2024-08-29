import { Component, OnInit } from '@angular/core';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { CommonModule } from '@angular/common';
import { Publisher } from '../../types';
import { HttpService } from '../../http.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-publishers-container',
    standalone: true,
    imports: [PublisherCardComponent, CommonModule, FormsModule],
    templateUrl: './publishers-container.component.html',
    styleUrl: './publishers-container.component.css',
})
export class PublishersContainerComponent implements OnInit {
    constructor(private httpService: HttpService) { }

    public publishers: Array<Publisher> = [];
    public newPublisher: string = '';


    ngOnInit(): void {
        this.loadPublishers();
    }

    loadPublishers(): void {
        this.httpService.getPublishers().subscribe({
            next: (data: Array<Publisher>) => {
                this.publishers = data;
            },
            error: (error) => {
                console.error('Failed to load publishers', error);
            },
            complete: () => console.log("load Publishers Completed.")
        });
    };

    addPublisher(): void {
        this.httpService.addPublisher(this.newPublisher).subscribe({
            next: (publisher: Publisher) => {
                this.publishers.push(publisher);
            },
            error: (error) => {
                console.error('Failed to add publisher', error);
            }
        });
    };



} 
