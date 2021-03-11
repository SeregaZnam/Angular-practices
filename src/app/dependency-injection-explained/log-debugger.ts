import { ConsoleService } from './console.service';

export class LogDebugger {
  constructor(
    private readonly consoleService: ConsoleService,
    private readonly enabled: boolean
  ) {}

  debug(message: string): void {
    if (this.enabled) {
      this.consoleService.log(`DEBUG: ${message}`);
    }
  }
}
