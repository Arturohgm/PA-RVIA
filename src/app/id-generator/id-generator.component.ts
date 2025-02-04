import { Component } from '@angular/core';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css']
})
export class IdGeneratorComponent {
  id: string | null = null;
  syncProgress: number = 0;
  asyncProgress: number = 0;
  syncLogs: string[] = [];
  asyncLogs: string[] = [];

  constructor() {}

  generateSyncID(): void {
    for (let i = 0; i < 10000; i++) {
      const newId = `sync-${Date.now()}-${i}`;
      this.syncLogs.push(newId);
    }
    this.syncProgress = 0;
    this.updateProgress('sync');
  }

  generateAsyncID(): void {
    for (let i = 0; i < 10000; i++) {
      const newId = `async-${Date.now()}-${i}`;
      this.asyncLogs.push(newId);
    }
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

  consultarProceso(type: 'sync' | 'async'): void {
    const logs = type === 'sync' ? this.syncLogs : this.asyncLogs;
    alert(`Consultando proceso para: ${logs.join(', ')}`);
  }
}