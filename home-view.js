import { LitElement, html } from "@polymer/lit-element";
import '@vaadin/vaadin-date-picker';

class HomeView extends LitElement {
    
    render() {
        return html`
            <div>
                Home
                <vaadin-date-picker></vaadin-date-picker>
            </div>
        `
    }
}

customElements.define("home-view", HomeView);