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
  syncExecutionTime: number = 0;
  asyncExecutionTime: number = 0;

  constructor() {}

  generateSyncID(): void {
    const startTime = performance.now();
    this.syncLogs = [];
    for (let i = 0; i < 1000000; i++) {
      const newId = `sync-${Date.now()}-${i}`;
      this.syncLogs.push(newId);
    }
    this.syncProgress = 0;
    this.updateProgress('sync');
    this.downloadFile(this.syncLogs, 'sync-ids.txt');
    const endTime = performance.now();
    this.syncExecutionTime = endTime - startTime;
  }

  generateAsyncID(): void {
    const startTime = performance.now();
    this.asyncLogs = [];
    for (let i = 0; i < 1000000; i++) {
      const newId = `async-${Date.now()}-${i}`;
      this.asyncLogs.push(newId);
    }
    this.asyncProgress = 0;
    this.updateProgress('async');
    this.downloadFile(this.asyncLogs, 'async-ids.txt');
    const endTime = performance.now();
    this.asyncExecutionTime = endTime - startTime;
  }

  generateBothIDs(): void {
    this.generateSyncID();
    this.generateAsyncID();
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

  downloadFile(data: string[], filename: string): void {
    const blob = new Blob([data.join('\n')], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}