import { Component, Input, Output, inject, signal } from '@angular/core';
import { WebApiClientService } from '../../web-api-client.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-machine.component.html',
  styleUrl: './view-machine.component.css',
})
export class ViewMachineComponent {
  private route = inject(ActivatedRoute);
  private webClient = inject(WebApiClientService);
}
