export class General {

    static sleep: (ms?: number) => Promise<boolean> = async (ms) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, ms ?? 1500);
        });
    }

}