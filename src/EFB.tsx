import { FSComponent } from 'msfssdk';
import { Splash } from './Splash'; 

class EFB extends BaseInstrument {
    get templateID(): string {
      return 'EFB';
    }

    public connectedCallback(): void {
      super.connectedCallback();

      FSComponent.render(<Splash name='Helbert' />, document.getElementById('InstrumentContent'));
    }
  }
  
  registerInstrument('efb', EFB);