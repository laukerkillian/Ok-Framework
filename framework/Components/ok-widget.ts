import {OkSize} from "../OkSize";
import {OkUnit} from "../OkUnit";
import {css} from "../css";
import {OkEventsEmitter} from "../OkEventsEmitter";
import property = css.property;
import {OkWait} from "../OkWait";
import {OkMultipleExtends} from "../OkMultipleExtends";

enum Events {
    HTMLContentChange = "HTMLContentChange"
}

interface OkWidget extends HTMLElement, OkEventsEmitter {

}

class OkWidget extends OkMultipleExtends(HTMLElement, OkEventsEmitter) {

    constructor() {
        super(new Map([

        ]));
        this.applyCustomStyle();
        this.registerEvents()
        this.HTMLContentChangeObserver()
    }

    connectedCallback() {
        this.calledByConnectedCallback()
    }

    public on(event: Events | string, listener: (attr?:any) => any): void {
        if(event in Events) {
            super.on(event, listener);
        }else{
            throw new Error("The event send doesn't exist on this object!")
        }
    }

    private registerEvents(): void {
        this.on(Events.HTMLContentChange, () => {});
    }

    private HTMLContentChangeObserver() {

    }

    protected calledByConnectedCallback() {
        if(this.getAttribute("template")) {
            let templateId = this.getAttribute("template")
            if(document.getElementById(templateId) !== null && document.getElementById(templateId) instanceof HTMLTemplateElement) {
                let template = <HTMLTemplateElement>document.getElementById(templateId);
                let templateContent = template.content.cloneNode(true);
                let shadow = this.attachShadow({mode: 'closed'});
                shadow.append(templateContent)
            }else {
                throw new Error("We can't found template or isn't an instance of template element")
            }
        }
    }

    private applyCustomStyle(): void {
        this.setStyleProperty(css.property.display, "block");
    }

    public getAttributes(): NamedNodeMap {
        return this.attributes;
    }

    public size(): OkSize {
        let sizeRect = this.getClientRects()[0];
        return new OkSize({
            width: sizeRect.width,
            height: sizeRect.height
        })
    }

    public setStyleProperty(property: css.property, value: string): void {
        this.style.setProperty(property, value);
    }

    public setHTML(htmlString: string): void {
        this.innerHTML = htmlString;
    }

    /**
     * give style to elements
     * example :
     * ```ts
     * customElements.define("ok-widget", OkWidget)
     * let myObj = new OkWidget()
     * myObj.setStyle(new Map([
     *      [css.property["width"], "100%"], // width: 100%
     *      [css.property["height"], "500px"], // height: 100%
     *      [css.property["display"], "block"], // display : block
     *      [css.property["background"], "blue"]
     * ]));
     * document.body.append(myObj)
     * ```
     * @param styles
     */
    public setStyle(styles: Map<css.property, string>): void {
        for(const style of styles) {
            const key = style[0];
            const value = style[1];
            if(key === undefined) {
                throw Error("Undefined key")
            }else if(value === undefined) {
                throw Error("Undefined value")
            }

            this.setStyleProperty(key, value);
        }
    };

    public setSize(size: OkSize | {width?: number, height?: number}): void {
        let sizeOkType: OkSize;
        if(!(size instanceof OkSize)) {
            sizeOkType = new OkSize({
                width: size.width,
                height: size.height
            });
        }else{
            sizeOkType = size;
        }

        this.style.width = OkUnit(sizeOkType.width(), "px");
        this.style.height =  OkUnit(sizeOkType.height(), "px");
    }
}

interface OkWidget {

    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType.This properties always return 2.
     * @hidden
     */
    readonly ATTRIBUTE_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 2.
     * ⚠ this property was deleted in https://dom.spec.whatwg.org/
     * @hidden
     */
    readonly CDATA_SECTION_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType.
     * This properties always return 4.
     * @hidden
     */
    readonly COMMENT_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType
     * This properties always return 8.
     * @hidden
     */
    readonly DOCUMENT_FRAGMENT_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return
     * This properties will always return 11.
     * @hidden
     */
    readonly DOCUMENT_NODE: number;
    /**
     * That's a constant, which indicate the position of an element compared to an other element.
     * This properties always return 4.
     * ```html
     * <div id="element1">
     *     <div id="element2">
     *      </div>
     * </div>
     * ```
     *
     * ```typescript
     * let element1 = document.getElementById("element1");
     * let element2 = document.getElementById("element2");
     *
     * element2.compareDocumentPosition(element1); // return the number 4 which is symbolized by DOCUMENT_POSITION_CONTAINED_BY
     * ```
     *
     * @hidden
     */
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    /**
     * That's a constant, which indicate the position of an element compared to an other element.
     * This properties always return 16.
     * ```html
     * <div id="element1">
     *     <div id="element2">
     *      </div>
     * </div>
     * ```
     *
     * ```typescript
     * let element1 = document.getElementById("element1");
     * let element2 = document.getElementById("element2");
     *
     * element1.compareDocumentPosition(element2); // return the number 16 which is symbolized by DOCUMENT_POSITION_CONTAINED_BY
     * ```
     *
     * @hidden
     */
    readonly DOCUMENT_POSITION_CONTAINS: number;
    /**
     * That's a constant, which indicate the position of an element compared to an other element.
     * This properties always return 1. It seem there is no liaison between the two nodes
     * @hidden
     */
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    /**
     * That's a constant, which indicate the position of an element compared to an other element.
     * This properties always return 4.
     * ```html
     * <div id="element1"></div>
     * <div id="element2"></div>
     * ```
     * ```typescript
     * let element1 = document.getElementById("element1");
     * let element2 = document.getElementById("element2");
     *
     * element1.compareDocumentPosition(element2); // return the number 4 which is symbolized by DOCUMENT_POSITION_FOLLOWING
     * ```
     * @hidden
     */
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    /**
     * ???
     * @hidden
     */
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    /**
     * That's a constant, which indicate the position of an element compared to an other element.
     * This properties always return 32.
     * ```html
     * <div id="element1"></div>
     * <div id="element2"></div>
     * ```
     *
     * ```typescript
     * let element1 = document.getElementById("element1");
     * let element2 = document.getElementById("element2");
     *
     * element2.compareDocumentPosition(element1); // return the number 2 which is symbolized by DOCUMENT_POSITION_PRECEDING
     * ```
     * @hidden
     */
    readonly DOCUMENT_POSITION_PRECEDING: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 2.
     * @hidden
     */
    readonly DOCUMENT_TYPE_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 1.
     * @hidden
     */
    readonly ELEMENT_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 6.
     * ⚠ this property was deleted in https://dom.spec.whatwg.org/
     * @hidden
     */
    readonly ENTITY_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 5.
     * ⚠ this property was deleted in https://dom.spec.whatwg.org/
     * @hidden
     */
    readonly ENTITY_REFERENCE_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 12.
     * ⚠ this property was deleted in https://dom.spec.whatwg.org/
     * @hidden
     */
    readonly NOTATION_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 7.
     * @hidden
     */
    readonly PROCESSING_INSTRUCTION_NODE: number;
    /**
     * That's a constant which is not important for you. But, which is important for the system.
     * This constant symbolize the nodeType. This properties always return 3.
     * @hidden
     */
    readonly TEXT_NODE: number;
    /**
     * The HTMLElement.accessKey property sets the keystroke which a user can press to jump to a given element.
     * ⚠ Not really used, more features here : https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
     * @hidden
     */
    accessKey: string;

    /**
     * The accessKeyLabel property returns a String containing the element's browser-assigned access key (if any); otherwise it returns an empty string.
     * ⚠ Not really used, more features here : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/accessKeyLabel
     * @hidden
     */
    readonly accessKeyLabel: string;

    /**
     * ⚠ Experimental. Expect behavior to change in the future. more features here : https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot
     * @hidden
     */
    readonly assignedSlot: HTMLSlotElement;

    /**
     * Look's like an object which returns the attributes set on an object
     * ```html
     * <a id="link" href="hey.com" target="_blank" customAttribute="hello" title="redirect you to hey.com">Hey</a>
     * ```
     *
     * ```typescript
     * let link = document.getElementById("link");
     * console.log(link.attributes); // return all attributes {}
     * ```
     * @hidden
     */
    readonly attributes: NamedNodeMap;

    /**
     * @hidden
     */
    autocapitalize: string;

    /**
     * @hidden
     */
    autofocus: boolean;

    /**
     * @hidden
     */
    readonly baseURI: string;

    /**
     * @hidden
     */
    readonly childElementCount: number;

    /**
     * @hidden
     */
    readonly childNodes: NodeListOf<ChildNode>;

    /**
     * @hidden
     */
    readonly children: HTMLCollection;

    /**
     * @hidden
     */
    readonly classList: DOMTokenList;

    /**
     * @hidden
     */
    className: string;

    /**
     * @hidden
     */
    readonly clientHeight: number;

    /**
     * @hidden
     */
    readonly clientLeft: number;

    /**
     * @hidden
     */
    readonly clientTop: number;

    /**
     * @hidden
     */
    readonly clientWidth: number;

    /**
     * @hidden
     */
    contentEditable: string;

    /**
     * @hidden
     */
    readonly dataset: DOMStringMap;

    /**
     * @hidden
     */
    dir: string;

    /**
     * @hidden
     */
    draggable: boolean;

    /**
     * @hidden
     */
    enterKeyHint: string;

    /**
     * @hidden
     */
    readonly firstChild: ChildNode;

    /**
     * @hidden
     */
    readonly firstElementChild: Element;

    /**
     * @hidden
     */
    hidden: boolean;

    /**
     * @hidden
     */
    id: string;

    /**
     * @hidden
     */
    innerHTML: string;

    /**
     * @hidden
     */
    innerText: string

    /**
     * @hidden
     */
    inputMode: string

    /**
     * @hidden
     */
    readonly isConnected: boolean

    /**
     * @hidden
     */
    readonly isContentEditable: boolean

    /**
     * @hidden
     */
    lang: string

    /**
     * @hidden
     */
    readonly lastChild: ChildNode

    /**
     * @hidden
     */
    readonly lastElementChild: Element

    /**
     * @hidden
     */
    readonly localName: string

    /**
     * @hidden
     */
    readonly namespaceURI: string

    /**
     * @hidden
     */
    readonly nextElementSibling: Element

    /**
     * @hidden
     */
    readonly nextSibling: ChildNode

    /**
     * @hidden
     */
    readonly nodeName: string

    /**
     * @hidden
     */
    readonly nodeType: number

    /**
     * @hidden
     */
    nodeValue: string

    /**
     * @hidden
     */
    readonly nonce: string

    /**
     * @hidden
     */
    readonly offsetHeight: number

    /**
     * @hidden
     */
    readonly offsetLeft: number

    /**
     * @hidden
     */
    readonly offsetParent: Element

    /**
     * @hidden
     */
    readonly offsetTop: number

    /**
     * @hidden
     */
    readonly offsetWidth: number

    /**
     * @hidden
     */
    onabort: (ev: UIEvent) => any

    /**
     * @hidden
     */
    onanimationcancel: (ev: AnimationEvent) => any

    /**
     * @hidden
     */
    onanimationend: (ev: AnimationEvent) => any

    /**
     * @hidden
     */
    onanimationiteration: (ev: AnimationEvent) => any

    /**
     * @hidden
     */
    onanimationstart: (ev: AnimationEvent) => any

    /**
     * @hidden
     */
    onauxclick: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onblur: (ev: FocusEvent) => any

    /**
     * @hidden
     */
    oncancel: (ev: Event) => any

    /**
     * @hidden
     */
    oncanplay: (ev: Event) => any

    /**
     * @hidden
     */
    oncanplaythrough: (ev: Event) => any

    /**
     * @hidden
     */
    onchange: (ev: Event) => any

    /**
     * @hidden
     */
    onclick: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onclose: (ev: Event) => any

    /**
     * @hidden
     */
    oncontextmenu: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    oncopy: (ev: ClipboardEvent) => any

    /**
     * @hidden
     */
    oncuechange: (ev: Event) => any

    /**
     * @hidden
     */
    oncut: (ev: ClipboardEvent) => any

    /**
     * @hidden
     */
    ondblclick: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    ondrag: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondragend: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondragenter: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondragexit: (ev: Event) => any

    /**
     * @hidden
     */
    ondragleave: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondragover: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondragstart: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondrop: (ev: DragEvent) => any

    /**
     * @hidden
     */
    ondurationchange: (ev: Event) => any

    /**
     * @hidden
     */
    onemptied: (ev: Event) => any

    /**
     * @hidden
     */
    onended: (ev: Event) => any

    /**
     * @hidden
     */
    onerror: OnErrorEventHandlerNonNull

    /**
     * @hidden
     */
    onfocus: (ev: FocusEvent) => any

    /**
     * @hidden
     */
    onfullscreenchange: (ev: Event) => any

    /**
     * @hidden
     */
    onfullscreenerror: (ev: Event) => any

    /**
     * @hidden
     */
    ongotpointercapture: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    oninput: (ev: Event) => any

    /**
     * @hidden
     */
    oninvalid: (ev: Event) => any

    /**
     * @hidden
     */
    onkeydown: (ev: KeyboardEvent) => any

    /**
     * @hidden
     */
    onkeypress: (ev: KeyboardEvent) => any

    /**
     * @hidden
     */
    onkeyup: (ev: KeyboardEvent) => any

    /**
     * @hidden
     */
    onload: (ev: Event) => any

    /**
     * @hidden
     */
    onloadeddata: (ev: Event) => any

    /**
     * @hidden
     */
    onloadedmetadata: (ev: Event) => any

    /**
     * @hidden
     */
    onloadstart: (ev: Event) => any

    /**
     * @hidden
     */
    onlostpointercapture: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onmousedown: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmouseenter: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmouseleave: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmousemove: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmouseout: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmouseover: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onmouseup: (ev: MouseEvent) => any

    /**
     * @hidden
     */
    onpaste: (ev: ClipboardEvent) => any

    /**
     * @hidden
     */
    onpause: (ev: Event) => any

    /**
     * @hidden
     */
    onplay: (ev: Event) => any

    /**
     * @hidden
     */
    onplaying: (ev: Event) => any

    /**
     * @hidden
     */
    onpointercancel: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerdown: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerenter: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerleave: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointermove: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerout: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerover: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onpointerup: (ev: PointerEvent) => any

    /**
     * @hidden
     */
    onprogress: (ev: ProgressEvent<EventTarget>) => any

    /**
     * @hidden
     */
    onratechange: (ev: Event) => any

    /**
     * @hidden
     */
    onreset: (ev: Event) => any

    /**
     * @hidden
     */
    onresize: (ev: UIEvent) => any

    /**
     * @hidden
     */
    onscroll: (ev: Event) => any

    /**
     * @hidden
     */
    onsecuritypolicyviolation: (ev: SecurityPolicyViolationEvent) => any

    /**
     * @hidden
     */
    onseeked: (ev: Event) => any

    /**
     * @hidden
     */
    onseeking: (ev: Event) => any

    /**
     * @hidden
     */
    onselect: (ev: Event) => any

    /**
     * @hidden
     */
    onselectionchange: (ev: Event) => any

    /**
     * @hidden
     */
    onselectstart: (ev: Event) => any

    /**
     * @hidden
     */
    onstalled: (ev: Event) => any

    /**
     * @hidden
     */
    onsubmit: (ev: Event) => any

    /**
     * @hidden
     */
    onsuspend: (ev: Event) => any

    /**
     * @hidden
     */
    ontimeupdate: (ev: Event) => any

    /**
     * @hidden
     */
    ontoggle: (ev: Event) => any

    /**
     * @hidden
     */
    ontouchcancel: (ev: TouchEvent) => any

    /**
     * @hidden
     */
    ontouchend: (ev: TouchEvent) => any

    /**
     * @hidden
     */
    ontouchmove: (ev: TouchEvent) => any

    /**
     * @hidden
     */
    ontouchstart: (ev: TouchEvent) => any

    /**
     * @hidden
     */
    ontransitioncancel: (ev: TransitionEvent) => any

    /**
     * @hidden
     */
    ontransitionend: (ev: TransitionEvent) => any

    /**
     * @hidden
     */
    ontransitionrun: (ev: TransitionEvent) => any

    /**
     * @hidden
     */
    ontransitionstart: (ev: TransitionEvent) => any;

    /**
     * @hidden
     */
    onvolumechange: (ev: Event) => any

    /**
     * @hidden
     */
    onwaiting: (ev: Event) => any

    /**
     * @hidden
     */
    onwheel: (ev: WheelEvent) => any

    /**
     * @hidden
     */
    outerHTML: string

    /**
     * @hidden
     */
    readonly ownerDocument: Document;

    /**
     * @hidden
     */
    readonly parentElement: HTMLElement

    /**
     * @hidden
     */
    readonly parentNode: Node & ParentNode
    /**
     * @hidden
     */
    readonly prefix: string
    /**
     * @hidden
     */
    readonly previousElementSibling: Element
    /**
     * @hidden
     */
    readonly previousSibling: ChildNode

    /**
     * @hidden
     */
    readonly scrollHeight: number;

    /**
     * @hidden
     */
    scrollLeft: number

    /**
     * @hidden
     */
    scrollTop: number

    /**
     * @hidden
     */
    readonly scrollWidth: number;

    /**
     * @hidden
     */
    readonly shadowRoot: ShadowRoot;

    /**
     * @hidden
     */
    slot: string;

    /**
     * @hidden
     */
    spellcheck: boolean

    /**
     * @hidden
     */
    readonly style: CSSStyleDeclaration;

    /**
     * @hidden
     */
    tabIndex: number

    /**
     * @hidden
     */
    readonly tagName: string;

    /**
     * @hidden
     */
    textContent: string;

    /**
     * @hidden
     */
    title: string;

    /**
     * @hidden
     */
    translate: boolean;

    /**
     * Default components which is inherited by all of OK Components
     */

    /**
     *
     * @hidden
     * @param type
     * @param listener
     * @param options
     */
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;

    /**
     *
     * @hidden
     * @param type
     * @param listener
     * @param options
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;

    /**
     *
     * @hidden
     * @param nodes
     */
    after(...nodes: (string | Node)[]): void

    /**
     *
     * @hidden
     * @param keyframes
     * @param options
     */
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: number | KeyframeAnimationOptions): Animation

    /**
     *
     * @hidden
     * @param nodes
     */
    append(...nodes: (string | Node)[]): void

    /**
     *
     * @hidden
     * @param newChild
     */
    appendChild<T>(newChild: T): T

    /**
     *
     * @hidden
     * @param init
     */
    attachShadow(init: ShadowRootInit): ShadowRoot

    /**
     *
     * @hidden
     * @param nodes
     */
    before(...nodes: (string | Node)[]): void

    /**
     *
     * @hidden
     */
    blur(): void

    /**
     *
     * @hidden
     */
    click(): void

    /**
     *
     * @hidden
     * @param deep
     */
    cloneNode(deep?: boolean): Node

    /**
     *
     * @hidden
     * @param selector
     */
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;

    /**
     *
     * @hidden
     * @param selector
     */
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;

    /**
     *
     * @hidden
     * @param selector
     */
    closest<E extends Element = Element>(selector: string): E | null;

    /**
     *
     * @hidden
     * @param other
     */
    compareDocumentPosition(other: Node): number

    /**
     *
     * @hidden
     * @param other
     */
    contains(other: Node): boolean

    /**
     *
     * @hidden
     * @param event
     */
    dispatchEvent(event: Event): boolean

    /**
     *
     * @hidden
     * @param options
     */
    focus(options?: FocusOptions): void

    /**
     *
     * @hidden
     */
    getAnimations(): Animation[]

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    getAttribute(qualifiedName: string): string

    /**
     *
     * @hidden
     * @param namespace
     * @param localName
     */
    getAttributeNS(namespace: string, localName: string): string

    /**
     *
     * @hidden
     */
    getAttributeNames(): string[]

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    getAttributeNode(qualifiedName: string): Attr

    /**
     *
     * @hidden
     * @param namespace
     * @param localName
     */
    getAttributeNodeNS(namespace: string, localName: string): Attr

    /**
     *
     * @hidden
     */
    getBoundingClientRect(): DOMRect

    /**
     *
     * @hidden
     */
    getClientRects(): DOMRectList

    /**
     *
     * @hidden
     * @param classNames
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>

    /**
     *
     * @hidden
     * @param classNames
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;

    /**
     *
     * @hidden
     * @param namespaceURI
     * @param localName
     */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;

    /**
     *
     * @hidden
     * @param namespaceURI
     * @param localName
     */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;

    /**
     *
     * @hidden
     * @param namespaceURI
     * @param localName
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;

    /**
     *
     * @hidden
     * @param options
     */
    getRootNode(options?: GetRootNodeOptions): Node

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    hasAttribute(qualifiedName: string): boolean

    /**
     *
     * @hidden
     * @param namespace
     * @param localName
     */
    hasAttributeNS(namespace: string, localName: string): boolean

    /**
     *
     * @hidden
     */
    hasAttributes(): boolean

    /**
     *
     * @hidden
     */
    hasChildNodes(): boolean

    /**
     *
     * @hidden
     * @param pointerId
     */
    hasPointerCapture(pointerId: number): boolean

    /**
     *
     * @hidden
     * @param position
     * @param insertedElement
     */
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element

    /**
     *
     * @hidden
     * @param where
     * @param html
     */
    insertAdjacentHTML(where: InsertPosition, html: string): void

    /**
     *
     * @hidden
     * @param where
     * @param text
     */
    insertAdjacentText(where: InsertPosition, text: string): void

    /**
     *
     * @hidden
     * @param newChild
     * @param refChild
     */
    insertBefore<T>(newChild: T, refChild: Node): T

    /**
     *
     * @hidden
     * @param namespace
     */
    isDefaultNamespace(namespace: string): boolean

    /**
     *
     * @hidden
     * @param otherNode
     */
    isEqualNode(otherNode: Node): boolean

    /**
     *
     * @hidden
     * @param otherNode
     */
    isSameNode(otherNode: Node): boolean

    /**
     *
     * @hidden
     * @param prefix
     */
    lookupNamespaceURI(prefix: string): string

    /**
     *
     * @hidden
     * @param namespace
     */
    lookupPrefix(namespace: string): string

    /**
     *
     * @hidden
     * @param selectors
     */
    matches(selectors: string): boolean

    /**
     *
     * @hidden
     */
    msGetRegionContent(): any

    /**
     *
     * @hidden
     */
    normalize(): void

    /**
     *
     * @hidden
     * @param nodes
     */
    prepend(...nodes: (string | Node)[]): void

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelector<E extends Element = Element>(selectors: string): E | null;

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;

    /**
     *
     * @hidden
     * @param selectors
     */
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;

    /**
     *
     * @hidden
     * @param pointerId
     */
    releasePointerCapture(pointerId: number): void

    /**
     *
     * @hidden
     */
    remove(): void

    /**
     *
     * @hidden
     * @param qualifiedName
     */
    removeAttribute(qualifiedName: string): void

    /**
     *
     * @hidden
     * @param namespace
     * @param localName
     */
    removeAttributeNS(namespace: string, localName: string): void

    /**
     *
     * @hidden
     * @param attr
     */
    removeAttributeNode(attr: Attr): Attr

    /**
     *
     * @hidden
     * @param oldChild
     */
    removeChild<T>(oldChild: T): T

    /**
     *
     * @hidden
     * @param type
     * @param listener
     * @param options
     */
    removeEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;

    /**
     *
     * @hidden
     * @param type
     * @param listener
     * @param options
     */
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;

    /**
     *
     * @hidden
     * @param newChild
     * @param oldChild
     */
    replaceChild<T>(newChild: Node, oldChild: T): T

    /**
     *
     * @hidden
     * @param nodes
     */
    replaceWith(...nodes: (string | Node)[]): void

    /**
     *
     * @hidden
     * @param options
     */
    requestFullscreen(options?: FullscreenOptions): Promise<void>

    /**
     *
     * @hidden
     */
    requestPointerLock(): void

    /**
     *
     * @hidden
     * @param options
     */
    scroll(options?: ScrollToOptions): void

    /**
     *
     * @hidden
     * @param x
     * @param y
     */
    scroll(x: number, y: number): void

    /**
     *
     * @hidden
     * @param options
     */
    scrollBy(options?: ScrollToOptions): void

    /**
     *
     * @hidden
     * @param x
     * @param y
     */
    scrollBy(x: number, y: number): void

    /**
     *
     * @hidden
     * @param arg
     */
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void

    /**
     *
     * @hidden
     * @param options
     */
    scrollTo(options?: ScrollToOptions): void

    /**
     *
     * @hidden
     * @param x
     * @param y
     */
    scrollTo(x: number, y: number): void

    /**
     *
     * @hidden
     * @param qualifiedName
     * @param value
     */
    setAttribute(qualifiedName: string, value: string): void

    /**
     *
     * @hidden
     * @param attr
     */
    setAttributeNode(attr: Attr): Attr

    /**
     * @hidden
     * @param attr
     */
    setAttributeNodeNS(attr: Attr): Attr


    /**
     *
     * @hidden
     * @param namespace
     * @param qualifiedName
     * @param value
     */
    setAttributeNS(namespace: string, qualifiedName: string, value: string): void

    /**
     *
     * @hidden
     * @param pointerId
     */
    setPointerCapture(pointerId: number): void

    /**
     *
     * @hidden
     * @param qualifiedName
     * @param force
     */
    toggleAttribute(qualifiedName: string, force?: boolean): boolean

    /**
     *
     * @hidden
     * @param selectors
     */
    webkitMatchesSelector(selectors: string): boolean
}

export {OkWidget, Events}