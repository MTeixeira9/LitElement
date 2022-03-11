import { LitElement, html } from "@polymer/lit-element";

class MyComponent extends LitElement {

    static get properties() {
        return {
            heat: Number
        }
    }
    
    render() {
        return html`
            <div>
                ${'🌶️'.repeat(this.heat >= 0 ? this.heat : 0)}
            </div>
        `
    }
}

customElements.define("my-component", MyComponent);