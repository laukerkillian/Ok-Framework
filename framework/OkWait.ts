/**
 * pause during a time
 * @param time
 * time in ms
 */
function OkWait(time: number): Promise<void> {
    return new Promise(function (success) {
        setTimeout(() => {
            success();
        }, time);
    });
}

export {OkWait};