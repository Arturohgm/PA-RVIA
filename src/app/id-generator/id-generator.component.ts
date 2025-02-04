import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class IdGeneratorComponent {
  id: string | null = null;
  syncProgress: number = 0;
  asyncProgress: number = 0;

  constructor() {}

  generateSyncID(): void {
    this.id = `sync-${Date.now()}`;
    this.syncProgress = 0;
    this.updateProgress('sync');
  }

  generateAsyncID(): void {
    this.id = `async-${Date.now()}`;
    this.asyncProgress = 0;
    this.updateProgress('async');
  }

  updateProgress(type: 'sync' | 'async'): void {
    const interval = setInterval(() => {
      if (type === 'sync') {
        this.syncProgress += 10;
        if (this.syncProgress >= 100) {
          clearInterval(interval);
        }
      } else {
        this.asyncProgress += 10;
        if (this.asyncProgress >= 100) {
          clearInterval(interval);
        }
      }
    }, 1000);
  }

  consultarProceso(pid: string): void {
    alert("Consultando proceso para: " + pid);
    // Aquí puedes agregar la lógica para consultar el proceso real
  }
}