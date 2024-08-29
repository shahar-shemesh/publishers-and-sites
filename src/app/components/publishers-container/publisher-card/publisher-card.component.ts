import { Component, Input, OnInit } from '@angular/core';
import { DomainCardComponent } from "../domain-card/domain-card.component";
import { CommonModule } from "@angular/common";
import { Domain, Publisher } from "../../../types";
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-publisher-card',
  standalone: true,
  imports: [
    DomainCardComponent,
    CommonModule
  ],
  templateUrl: './publisher-card.component.html',
  styleUrl: './publisher-card.component.css'
})
export class PublisherCardComponent implements OnInit {
  @Input() publisher!: Publisher;
  public domains: Domain[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadDomains();
  }

  loadDomains(): void {
    this.httpService.getDomainsByPublisher(this.publisher.publisher).subscribe({
      next: (data: Domain[]) => {
        this.domains = data;
      },
      error: (error) => {
        console.error('Failed to load domains', error);
      }
    });
  };

  onDomainDeleted(url: string): void {
    this.domains = this.domains.filter(domain => domain.url !== url);
  };
  
}