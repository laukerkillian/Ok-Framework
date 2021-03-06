/**
 * pause during a time
 * ```typescript
 *  await OkWait(500); // wait 500ms
 * ```
 * @param time
 * time in ms
 */
async function OkWait(time: number): Promise<void> {
    return new Promise(function (success) {
        setTimeout(() => {
            success();
        }, time);
    });
}

export {OkWait};