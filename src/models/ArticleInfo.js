export default class ArticleInfo {
    constructor(title, image, text, date, source, url) {
        this.title = title;
        this.image = image;
        this.text = text;
        this.source = source;
        this.url = url;

        let d = new Date(date);
        this.date = `${(d.getDate() < 10 ? '0' : '') + d.getDate()}.${(d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1)}.${d.getFullYear()} `
            + `${(d.getHours() < 10 ? '0' : '') + d.getHours()}:${(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}`;
    }
}
