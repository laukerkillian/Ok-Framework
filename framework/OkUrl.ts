class OkUrl {
    private m_url: string;
    private m_request: Response;

    constructor(url: string) {
        this.setUrl(url);
    }

    public toString(): string {
        return this.m_url;
    }

    public setUrl(url: string): void {
        this.m_url = url;
        this.m_request = undefined;
    }

    public async exist(): Promise<boolean> {
        if(!this.m_request) {
            const request = await fetch(this.m_url);
            this.m_request = request;
        }

        const res = this.m_request.ok;
        return res;
    }

    public async getContent(): Promise<string> {
        if(!this.m_request) {
            const request = await fetch(this.m_url);
            this.m_request = request;
        }

        const res = await this.m_request.text();
        return res;
    }

    public async request(): Promise<Response> {
        if(!this.m_request) {
            const request = await fetch(this.m_url);
            this.m_request = request;
        }

        return this.m_request;
    }
}

export {OkUrl}