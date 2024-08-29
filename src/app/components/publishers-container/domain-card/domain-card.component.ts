import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Domain } from "../../../types";
import { HttpService } from '../../../http.service';

@Component({
    selector: 'app-domain-card',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './domain-card.component.html',
    styleUrl: './domain-card.component.css'
})
export class DomainCardComponent {
    @Input() domain!: Domain;
    @Input() publisherName!: string;
    @Output() domainDeleted = new EventEmitter<string>();


    constructor(private httpService: HttpService) { }

    ngOnInit(): void { }

    updateDomain(domain: Domain): void {
        this.httpService.updateDomain(this.publisherName, domain.url, domain).subscribe({
            next: (updatedDomain: Domain) => {
                console.log('Domain updated:', updatedDomain);
            },
            error: (error) => {
                console.error('Failed to update domain', error);
            }
        });
    }

    deleteDomain(url: string): void {
        this.httpService.deleteDomain(this.publisherName, url).subscribe({
            next: (deletedDomain: Domain) => {
                console.log('Domain deleted:', deletedDomain);
                this.domainDeleted.emit(url);
            },
            error: (error) => {
                console.error('Failed to delete domain', error);
            }
        });
    }
};