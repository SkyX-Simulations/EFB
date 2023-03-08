import { FSComponent, DisplayComponent, VNode, ComponentProps } from 'msfssdk';
import './EFB.css';

interface EFBProps extends ComponentProps {
    name: String;
}

export class Splash extends DisplayComponent<EFBProps> {
    public render(): VNode | null {
        return (
            <div class="splash">Hello { this.props.name }!</div>
        );
    }
}