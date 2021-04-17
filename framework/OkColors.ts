class OkColors {
    #currentColor: string;
    constructor(color: string) {

    }

    public transformColors(color: string) {
        if(color.startsWith("#")) {
            return OkColors.transformFromHexToRgba(color);
        }else if(color.startsWith("rgb")) {

        }else if(color.startsWith("rgba")) {

        }
    }

    public static transformFromHexToRgba(hexColor: string): string {
        let rgbaColor;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor)){
            rgbaColor= hexColor.substring(1).split('');
            if(rgbaColor.length== 3){
                rgbaColor= [rgbaColor[0], rgbaColor[0], rgbaColor[1], rgbaColor[1], rgbaColor[2], rgbaColor[2]];
            }
            rgbaColor = '0x'+rgbaColor.join('');
            rgbaColor = Number.parseInt(rgbaColor)
            return 'rgba('+[(rgbaColor>>16)&255, (rgbaColor>>8)&255, rgbaColor&255].join(',')+',1)';
        }
        throw new Error('Bad Hex');
    }

    toHex() {

    }
}

export {OkColors}