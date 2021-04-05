interface Options {
    /**
     * width, which will be contains in OkSize
     */
    width?: number;
    /**
     * height, which will be contains in OkSize
     */
    height?: number;
    /**
     * depth, which will be contains in OkSize
     */
    depth?: number;
}

class OkSize {
    /**
     * current width
     * @hidden
     * @private
     */
    private m_width: number = 0;
    /**
     * current height
     * @hidden
     * @private
     */
    private m_height: number = 0;
    /**
     * current depth
     * @hidden
     * @private
     */
    private m_depth: number = 0;

    /**
     * OkSize contains 3 variables which could be edit
     * @param options
     */
    constructor(options: Options) {
        if(options?.width) {
            this.setWidth(options.width);
        }
        if(options?.height) {
            this.setHeight(options.height)
        }
        if(options?.depth) {
            this.setDepth(options.depth);
        }
    }

    /**
     * return the current width
     */
    public width(): number {
        return this.m_depth;
    }

    /**
     * enable to set width
     * @param width
     */
    public setWidth(width: number): void {
        this.m_width = width
    }

    /**
     * return the current height
     */
    public height(): number {
        return this.m_height;
    }

    /**
     *
     * @param height
     */
    public setHeight(height: number): void {
        this.m_height = height;
    }

    public depth(): number {
        return this.m_depth;
    }

    public setDepth(depth: number): void {
        this.m_depth = depth;
    }
}

export {OkSize};