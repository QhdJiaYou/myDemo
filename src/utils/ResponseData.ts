export default class ResponseData {
    code: number;

    msg?: string;

    data?: object;

    constructor({ code, msg, data }: ResponseData) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
}
