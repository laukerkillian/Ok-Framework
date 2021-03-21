/*
 * Author : KILLIAN KERLAU
 * Title : OkRequest
 * Description : OkRequest is a function to make http request
 */


export class OkEventsEmitter {

    /**
     * @hidden
     * @private
     */
    private m_events: {[index: string]:any} = {}; // contains all events
    /**
     * This class contains all you need to made event emitter
     */
    constructor() {

    }

    /**
     * this method register an event
     * @param event
     * @param listener
     * @public
     */
    public on(event: string, listener: (arg?:any) => any): void {
        if (!this.m_events[event]) {
            this.m_events[event] = [];
        }
        this.m_events[event].push(listener);
    }

    /**
     * this method remove an event registered if this event doesn't exist that throw an error
     * @param event
     * @param listenerToRemove
     * @public
     */
    public removeListener(event: string, listenerToRemove: (arg?:any) => any): void {
        if (!this.m_events[event]) {
            throw new Error(`Can't remove a listener. Event "${event}" doesn't exits.`);
        }

        const filterListeners = (listener: (arg?:any) => any) => listener !== listenerToRemove;

        this.m_events[event] = this.m_events[event].filter(filterListeners);
    }

    /**
     * This method is used to emit an event if this event doesn't exist that throw an error
     * @param event
     * @param data
     * @protected
     */
    protected emit(event: string, data: any) {
        if (!this.m_events[event]) {
            throw new Error(`Can't emit an event. Event "${event}" doesn't exits.`);
        }

        const fireCallbacks = (callback: (arg?:any) => any) => {
            callback(data);
        };

        this.m_events[event].forEach(fireCallbacks);
    }
}