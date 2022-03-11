import { LitElement, html } from "@polymer/lit-element";

class AboutView extends LitElement {
    
    render() {
        return html`
            <div>
                About
            </div>
        `
    }
}

customElements.define("about-view", AboutView);