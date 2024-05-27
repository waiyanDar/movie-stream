import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptDecrpytService {
    privateKey = "6w4LOME6M5F9WWfTpp1STML8lEAIpDvCgjeEv+PNlkEkEbO6KoA+GK9fA8/lZ8/GcBsSeFjbiyCjZHs0qDJZv5QiGsnR4xLabVqh7p/9u5MCvP+gET6yddF4LoMVyAJ/z40v5JhA5GXmWS6ebWTIPvoiplJFCMILmWG+ErkFwsUvJIR6KGAfH+4EjR55RLbb7ugPt/FQTbfmqvT3/z6DfxBHF6Rnx3NYbd8KtRYzlv1Or+9o+iGv+4LW9nD4ORDjqjoq6urko8yI+s67bLjOjfPKAZjYFnTLyO6SvF8SUxYGCnapC1xLrXnHmVQma4LPnwIDAQAB";
    publicKey ="MIIEowIBAAKCAQEAip7f/IfEtQ6c9Ajk+gbL6w4LOME6M5F9WWfTpp1STML8lEAIpDvCgjeEv+PNlkEkEbO6KoA+GK9fA8/lZ8/GcBsSeFjbiyCjZHs0qDJZv5QiGsnR4xLabVqh7p/9u5MCvP+gET6yddF4LoMVyAJ/z40v5JhA5GXmWS6ebWTIPvoiplJFCMILmWG+ErkFwsUvJIR6KGAfH+4EjR55RLbb7ugPt/FQTbfmqvT3/z6DfxBHF6Rnx3NYbd8KtRYzlv1Or+9o+iGv+4LW9nD4ORDjqjoq6urko8yI+s67bLjOjfPKAZjYFnTLyO6SvF8SUxYGCnapC1xLrXnHmVQma4LPnwIDAQABAoIBADhkW5CbFu3lLPql56jDPQ+5nd0P1oKGDG1jrJmaZJGvvRr+VcWiPgXFWi7KGKeohmjhKboCg8B9D3U4jQXHY93VVZU56M5Xj8Df0lMecJ5cP+eP9N+gmtVjyn6N/aXiL3n9r/tz+xutBGw/jYvZYG9p63LecX+46JWdPnwYRNJBS0fs9mF7K/j1zKxeivJ2/H3LiSVfqMZMzYUnrhAi4v+kV1FWMNWLw4C5wZKHkwszo9Nra2oX8adFsFdVxABOZzogfEdxG3sD8y+JzKzsn5nsDcP0pHfSrSCKAqCUlyRA63hWbKBV0Etf0bZHgNsJGx4vAluFEqVUQRPEoTDEhkkCgYEA19gPZ3cmsQGorJD94qbUUF/koVq8WH1w8OyO0HP8OPvbhBK8XovXxEddiLUbxKiH/6X+IXcGC5BY0wEXXoaauzPtkQRZdQAqf33/4nxeeL+gHyfnra78GwV+rnPYht6A2O8A2G6OFmkLwJJusXZPOqPHI1+igXwAXX+6Wvej6ZUCgYEApGjrPnL4ldh4v3Iz0nicX2YrOw1e0AkXJxm8q/T8oUrz0hRTi1+QaHqulRcPocPjYgqAhWKSRUIo9Ok827U6oGJrp3hxaNST1/XVvbVPYwI53/nzloy8fI+WXWSoKxoAkw58LpBrhJM/CcI5q2DwfDDsLsH1vk1UrFM3P9hAz2MCgYAdQzCLcW7wbm4kvx98e+uq3eVMLtX8FT2bnCacgiz+uL6BAF1DYCgndxlqMEuMdODDOwjiFpXeOXqhWLOHYC5YFOkvUOyj3Rrl3/oyBXR1YF1f+/P/6wpIy4zqL9B6MG49euGddheTWDh8qh2Rt510MMINvKh2b45JHsjwDkTNpQKBgHOzAhmofxe0hwTzMVTkW+cm1zVva1GrlAeILSY1+bLoND2a4FAsqEteSo3Q9Mc6O0I7ccZsX9Mtg/UWTiWvm9pSaMAqGmVTc9d+wTQH7B4Y6vGbzLgdwmdGBOMketQaMF1MzEdYitF5bdtIO51HUvWS2CLvjCin8vZyeWcMoE9RAoGBAMRWmXgMi2FRhDIBmua8xT8e8sQn7DXDVI4K//5pKNpVCekNofVfInqCBLmvOxOCbB9Pxqxu8g+Xa5cXVrLKqR0kvMkuZGr8sTqEM6HtBwppM/8PV8QcBamtZp7w03kMJoPka8qVV4iP6Cqm0e9NPATI71E5AP6vt05uuskbYHdn";
    keys = 'QUJDREVGR0hJSktMTU5PUA==';
    initVector = "encryptionIntVec";

    encryptAESV2(value: any) {
        const key = CryptoJS.enc.Utf8.parse(this.keys);
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(value)), key,
            {
                iv: CryptoJS.enc.Utf8.parse(this.initVector),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

        return encrypted.toString();
    }

    decryptAESV2(value: any) {
        const key = CryptoJS.enc.Utf8.parse(this.keys);
        const decryptedByte = CryptoJS.AES.decrypt(value, key, {
            iv: CryptoJS.enc.Utf8.parse(this.initVector),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decryptedByte.toString(CryptoJS.enc.Utf8);
    }
    public encryptAES(password: string): string {
        return CryptoJS.AES.encrypt(password, this.privateKey).toString();
    }
    
    public decryptAES(passwordToDecrypt: string) {
        return CryptoJS.AES.decrypt(passwordToDecrypt, this.privateKey).toString(CryptoJS.enc.Utf8);
    }
}